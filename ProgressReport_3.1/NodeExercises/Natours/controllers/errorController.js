const AppError = require('../utils/appError');

const handleCastErrorDB = (err) => {
    const message = `O ${err.path} está inválido: ${err.value}`;
    return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    const message = `Valor do campo ${value} duplicado: Por favor use outro valor`;
    return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
    const errors = Object.values(err.errors).map((el) => el.message);

    const message = `Input Data inválido. ${errors.join('. ')}`;
    return new AppError(message, 400);
};

const handleJWTExpiredError = () =>
    new AppError('Seu token expirou, realize o login novamente', 401);
const handleJWTError = () => new AppError('Token invalido, realize o login novamente', 401);

const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack,
    });
};

const sendErrorProd = (err, res) => {
    // Erro Operacional
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });

        // Erro de programação ou desconhecido
    } else {
        // Log Error
        console.error('ERROR', err);
        // Mensagem Generica
        res.status(500).json({
            status: 'error',
            message: 'Foi detectado algum erro desconhecido',
        });
    }
};

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    } else if (process.env.NODE_ENV === 'production ') {
        let error = { ...err };
        error.name = err.name;
        error.message = err.message;
        error.errmsg = err.errmsg;

        if (error.name === 'CastError') {
            error = handleCastErrorDB(error);
        }
        if (error.name === 'ValidationError') {
            error = handleValidationErrorDB(error);
        }
        if (error.code === 11000) {
            error = handleDuplicateFieldsDB(error);
        }
        if (error.name === 'JsonWebTokenError') {
            error = handleJWTError(error);
        }
        if (error.name === 'TokenExpiredError') {
            error = handleJWTExpiredError(error);
        }
        sendErrorProd(error, res);
    }
};

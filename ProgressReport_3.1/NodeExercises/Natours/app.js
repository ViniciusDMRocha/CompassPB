const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1)   Middlewares
// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Body Parser
app.use(express.json({ limit: '10kb' }));

// Data sanitization (NoSQL)
app.use(mongoSanitize());

// Data sanitization (XSS)
app.use(xss());

// Prevent parameter pollution
app.use(
    hpp({
        whitelist: [
            'duration',
            'ratingsQuantity',
            'ratingsAverage',
            'maxGroupSize',
            'difficulty',
            'price',
        ],
    }),
);

// Static files
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// Limit requests from same IP
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Muitas requisições feitas por esse IP, tente novamente daqui 1 hora',
});
app.use('/api', limiter);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
    // const err = new Error(`Não foi possivel encontrar o endereço ${req.originalUrl} neste server`);
    // err.status = 'fail';
    // err.statusCode = 404;

    next(
        new AppError(`Não foi possivel encontrar o endereço ${req.originalUrl} neste server`, 404),
    );
});

app.use(globalErrorHandler);

module.exports = app;

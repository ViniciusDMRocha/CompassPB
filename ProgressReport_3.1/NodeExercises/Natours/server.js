const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION!');
    console.log(err);
    process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB).then(() => {
    // console.log(con.connections);
    console.log('DB conectado com sucesso');
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Rodando o App na porta ${port}`);
});

process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION!');
    console.log(err);
    server.close(() => {
        process.exit(1);
    });
});

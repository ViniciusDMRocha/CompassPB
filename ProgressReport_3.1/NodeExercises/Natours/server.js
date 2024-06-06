const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then(() => {
    // console.log(con.connections);
    console.log('DB conectado com sucesso');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Rodando o App na porta ${port}`);
});

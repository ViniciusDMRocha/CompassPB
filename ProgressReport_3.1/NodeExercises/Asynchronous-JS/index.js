const fs = require('fs');
const superagent = require('superagent');

const readFilePromisse = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject('Arquivo nao encontrado');
            resolve(data);
        });
    });
};

const writeFilePromisse = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if (err) {
                console.log('Erro');
                reject('Error ao inserir no arquivo');
            }
            resolve('Arquivo salvo');
        });
    });
};

const getDogPic = async () => {
    try {
        const data = await readFilePromisse(`${__dirname}/dog.txt`);
        console.log(`Breed: ${data}`);

        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);

        await writeFilePromisse('dog-img.txt', res.body.message);
        console.log('Arquivo salvo com sucesso');
    } catch (err) {
        console.log(err);
        throw err;
    }
    return 'Foto pronta';
};

(async () => {
    try {
        console.log('Vamos procurar a foto do dog');
        const x = await getDogPic();
        console.log(x);
        console.log('Ai esta a foto');
    } catch (err) {
        console.log('ERROR');
    }
})();

/*
console.log('Vamos procurar a foto do dog');
getDogPic()
    .then((x) => {
        console.log(x);
        console.log('Ai esta a foto');
    })
    .catch((err) => {
        console.log('ERROR');
    });

*/
/*
readFilePromisse(`${__dirname}/dog.txt`)
    .then((data) => {
        console.log(`Breed: ${data}`);
        return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    })
    .then((res) => {
        console.log(res.body.message);
        return writeFilePromisse('dog-img.txt', res.body.message);
    })
    .then(() => {
        console.log('Arquivo salvo com sucesso');
    })
    .catch((err) => {
        console.log(err);
    });
*/

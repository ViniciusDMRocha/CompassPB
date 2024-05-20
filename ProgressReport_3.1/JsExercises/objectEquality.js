function Endereco(rua, cidade, cep){
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep;
}

let endereco1 = new Endereco('ABC', 'Sao Paulo', '11111-11');
let endereco2 = new Endereco('ABC', 'Sao Paulo', '11111-11');

function showAddress(endereco){
    for(let valor in endereco)
        console.log(valor, endereco[valor])
}  

function areEquals(endereco1, endereco2) {
    let primeiroProp = Object.getOwnPropertyNames(endereco1);
    let segundoProp = Object.getOwnPropertyNames(endereco2);

    if (primeiroProp.length != segundoProp.length) {
        return false;
    }
    for (let i = 0; i < primeiroProp.length; i++) {
        let propName = primeiroProp[i];

        if (endereco1[propName] !== endereco2[propName]) {
            return false;
        }
    }

    return true;
}

function areSame(endereco1, endereco2){
    return endereco1 === endereco2;
}

console.log(areEquals(endereco1, endereco2));
console.log(areSame(endereco1, endereco2));
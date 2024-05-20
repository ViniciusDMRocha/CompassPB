function Endereco(rua, cidade, cep){
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep;
}

function criandoEndereco(Rua, Cidade, CEP){
    return {
        Rua,
        Cidade,
        CEP
    };
}

let endereco1 = criandoEndereco('ABC', 'Sao Paulo', '11111-11');
let endereco2 = new Endereco('ABC', 'Sao Paulo', '11111-11');

function showAddress(endereco){
    for(let valor in endereco)
        console.log(valor, endereco[valor])
}  

showAddress(endereco1);
showAddress(endereco2);
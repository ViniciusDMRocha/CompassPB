let numbers = [1, 2, 10, 4, 5]
const resp = getMax(numbers);

function getMax(array){
    return array.reduce(function(valorAcumulado, valorAtual){
        if(valorAcumulado > valorAtual) return valorAcumulado;
        return valorAtual;
    });
}

console.log(resp);
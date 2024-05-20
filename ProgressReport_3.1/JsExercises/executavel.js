let numbers = [1, 2, 3, 4, 5, 5];

console.log(excluirNumero(numbers, [2, 5]));

function excluirNumero(array, numero){
    const resp = []
    for(let i of array){
        if(!numero.includes(i)){
            resp.push(i);
        }
    }
    return resp;
}
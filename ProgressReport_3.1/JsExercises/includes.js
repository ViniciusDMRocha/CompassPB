const numbers = [1, 2, 3, 4, 7]

function includes(array, valorDeInteresse){
    for(let i of array){
        if(i === valorDeInteresse)
            return true;
    }
    return false;
}
console.log(includes(numbers, 1));
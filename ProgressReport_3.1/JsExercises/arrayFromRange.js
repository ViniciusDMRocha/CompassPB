let numbers = arrayFromRange(3,6);

function arrayFromRange(min, max){
    let array = [];
    for(let i = min; i <= max; i++)
        array.push(i);
    return array;
}

console.log(numbers);
let numbers = [1, 2, 3, 4, 5]

let resp = move(numbers, 1, -1);
console.log(resp);

function move(array, index, newLocation){
    let newPos = index + newLocation;
    const output = [...array];

    if(newPos < 0 || newPos >= output.length){
        return console.error('Invalid');;
    }
    let number = output.splice(index, 1)[0];
    output.splice(newPos, 0, number);

    return output;
}

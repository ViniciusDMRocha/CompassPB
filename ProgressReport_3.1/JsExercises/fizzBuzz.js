let output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
    if(typeof input !== 'number'){
        return 'Not a Number';
    }
    else if((input % 3 === 0) && (input % 5 === 0)){
        return 'fizzBuzz';
    }
    else if(input % 3 === 0){
        return 'fizz';
    }
    else if(input % 5 === 0){
        return 'Buzz';
    }
    else{
        return input;
    }
}

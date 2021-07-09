//FizzBuzz

//divisible by 3 > fizz
//else by 5 > buzz
//both > fizbuzz
//none > input
//NaN > not a number

const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return NaN;
    } else if (input % 3 === 0 && input % 5 === 0) {
        return 'fizbuzz';
    } else if (input % 3 === 0) {
        return 'fizz';
    } else if (input % 5 === 0) {
        return 'buzz';
    } else return input;
}
const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // toFixed decimal places, here 2

const num = 1123.35480353
console.log(num.toPrecision(5));

// It will return exponential value for precision less than the whole number
// and roundoff value for precision greater than whole number

const hundreds = 100000000
console.log(hundreds.toLocaleString());
// .toLocaleString for commas in string
// .toLocaleString('en-IN') for commas in Indian style of writing


// ---------------------------Maths-----------------------------

const max = 6;
const min = 1;

console.log(Math);
console.log(Math.floor(Math.random()*(max - min + 1)) + min);


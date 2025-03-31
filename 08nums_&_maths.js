// Like string, Number is also very important in JS. Numbers are also has some prototype method that we can use.

// Basic way to define any number value.
const score = 878;
console.log(score);

// If we want to define value should be numbers only then we can define like this:
const balance = new Number(300);
console.log(balance);
// Above number will return a object with key value pair.
//* Try to print this in browser for better understanding


// PROTOTYPE METHODS
// toString(): To convet number into string
console.log(balance.toString());
console.log(typeof balance.toString());


// toFixed(): This method returns a string representing a number in fixed-point notation with the specified number of decimal places.
// toFixed(digit)
console.log(balance.toFixed(2));


// toPrecision(): Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
const newBalance = 23.4578;
console.log(newBalance.toPrecision(3));


// toLocaleString(): Converts a number to a string by using the current or specified locale.
const hundreds = 1000000;
console.log(hundreds.toLocaleString());


// ************************** Math ************************** //
console.log(Math) // Execute in browser for better understanding

console.log(Math.abs(-4)); // abs stands for abosolute value mean the value will always be positive.
console.log(Math.round(3.5)); // Returns a supplied numeric expression rounded to the nearest integer..
console.log(Math.ceil(4.2)); // Returns the smallest integer greater than or equal to its numeric argument.
console.log(Math.floor(4.2)); // Returns the greatest integer less than or equal to its numeric argument.
console.log(Math.min(2, 45, 7, 9)); // Returns the smaller of a set of supplied numeric expressions.
console.log(Math.max(2, 45, 7, 9)); // Returns the larger of a set of supplied numeric expressions.

// Math.random(): Returns a pseudorandom number between 0 and 1.
console.log(Math.random());

// if we want to generate some random number then we can use it in different ways.
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));

// But if we want the value should be in between two specific number then also we can follow some formula
let min = 10000000;
let max = 20000000;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
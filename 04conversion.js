let score = "33";
console.log(typeof score); // Datatype is string

// If we want to convert score in Number type then we have methods
let scoreInNum = Number(score);
console.log(typeof scoreInNum); // number

// Suppose score has some charector also then;
let score1 = "87isi";
let score1InNum = Number(score1);
console.log(typeof score1InNum); // number
console.log(score1InNum); // NaN

// NaN: Not a Number.
// In JS when we convert charectors into Number then it converts into Number but value will be NaN

// "33hjd" => NaN
// undefined => NaN
// true => 1 & false => 0;

// If we convert 1 into boolean then what will be the value, let see:
let isLoggedin = 1;
let booleanIsLoggedin = Boolean(isLoggedin);
console.log(booleanIsLoggedin); // true
// In JS true value will alway be 1 & false will always be 0;

// Another scenario if will convert string into boolean:
let myname = "Munna";
let booleanName = Boolean(myname);
console.log(booleanName); // true
// if empty string is there there then it will be false;


// NUMBER TO STRING CONVERSION
let number = 33;
let stringNumber = String(number);
console.log(typeof stringNumber);
console.log(stringNumber);


// ********************* Operations ********************* //
let value = 3;
let negValue = -value;
console.log(negValue);

/*
    console.log(2 + 2);
    console.log(2 - 2);
    console.log(2 * 2);
    console.log(2 ** 2); // 2 to the power 2
    console.log(2 / 2); 
    console.log(2 % 2); // remender operator
*/

let str1 = "Munna";
let str2 = "Bhai";
console.log(str1 + str2); // MunnaBhai

console.log('1' + 2); // "12"
console.log(1 + '2'); // "12"
console.log('1' + 2 + 2); // "122"
console.log(1 + 2 + '2'); // "32"

console.log(3 + 4 * 2 / 3); // not recommended for realtime work

console.log(+true); // 1
console.log(+""); // 0


// Increamental operators
// prefix & postfix
let gameCounter = 100;
++gameCounter; // prefix operator
gameCounter++; // postfix operator
console.log(gameCounter);

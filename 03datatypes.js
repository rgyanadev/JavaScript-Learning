"use strict"; // treat all JS code as newer version

// alert(3+3); // Alert can not be used in node.js

/* 
There are two type of datatypes we have.
1. Primitive : Call by value
2. Not primitive : Call by reference
*/

/*
    PRIMITIVE DATATYPES
    number => Accepts all number & decimal also
    bigInt => Accepts big numerical number or scientific numbers
    string => Accepts all characters
    boolean => true/false
    null => Standalone value: represents empty value;
    undefined => Value is not assigned or value is not present.
    symbol => unique : It is used to find out uniqueness
*/

// Number
const number1 = 23;
const number2 = 23.52;

// BigInt
const bigNumber = 9384734238497837n;

// String
const str1 = "lkjdfkjskd";
const str2 = 'kljsdkfjk'

// Boolean
const isLoggedin = true;
const isSignedup = false;

// Undefined
let var1; // value will be undefined
let var2 = undefined;

// Null
const nullValue = null;

// Symbols
const variable1 = Symbol('1233');
const variable2 = Symbol(123);


/*
    NON-PRIMITIVE DATATYPES
    object
    array
    functions
*/

// Objects 
const obj = {
    name: 'something',
    age: 24
}

// Arrays
const arr = ['apple', 'banana', 'orange'];

// functions
const myFunction = function myFunc() {
    console.log('Hello world!');
}


// In JS we don't mention datatype explicitly. JS is smart enough to identify the datatype.
// But how would we check what is the datatype: For this we have one method called typeof
console.log(typeof undefined); // undefined
console.log(typeof null); // object


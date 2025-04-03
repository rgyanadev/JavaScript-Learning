/*
    An array is a type of global object used to store data. Arrays can store multiple values in a single variable, which can condense and organize our code.

    - Array can have multiple value with different data type also.
    - The values of array is called elements
    - JavaScript array-copy operations create shallow copies.
    - Arrays can be access through indexing & index always starts from 0;
*/

const myArray = [1, 2, 3, 4, 5];
const myHeros = ["Ironman", "Shaktiman", "Thor",];
console.log(typeof myArray); // object
console.log(myArray[0]); // first element : 1

// There is another way we can define array by using new Array
const myArray2 = new Array(2, 3, 5, 6, 7);
console.log(myArray2)


// Array methods
myArray.push(6); // Used to add element in array at last index
console.log(myArray);

myArray.pop(); // Used to remove last element from an array
console.log(myArray);

myArray.unshift(0); // Used to add element in first of an array
console.log(myArray)

myArray.shift(); // Used to remove element from first element of an array
console.log(myArray);

let isAvailable = myArray.includes(3); // Checks element is available or not
console.log(isAvailable);

let indexVal = myArray.indexOf(3); // Returns index of the element
console.log(indexVal);

const newArray = myArray.join(); // It will bind all elements & returns a string.
console.log(typeof newArray);
console.log(newArray)


// slice(startIndex, range): Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
console.log('OG-ARRAY', myArray);
let myn1 = myArray.slice(1, 3);
console.log('Result of slice:', myn1);
console.log("After slice my OG-Array:", myArray);

// splice(startIndex, range): Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
let myn2 = myArray.splice(1, 3);
console.log('Result of splice:', myn2);
console.log('After splice my OG-ARRAY', myArray);


// SOME OTHERS METHODS
const marvel_heros = ['Ironman', 'Thor', 'Hulk', 'Spiderman'];
const dc_heros = ['Superman', 'Batman', 'Aquaman', 'Flash'];

// If we can to merge two array then can we do it using push() method, lets find out:
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// output: ['Ironman','Thor','Hulk','Spiderman',[ 'Superman', 'Batman', 'Aquaman', 'Flash' ]];
// In this way it push whole array of dc_heros into marvel_heros in 4th index position. This is not the correct way to merge two arrays.
// Before we go to correct approch lets find out if we have nested array like modified marvel_heros then how we can access nested value.
// Suppose we want to access Batman from nested array:
// console.log(marvel_heros[4][1]);


// Lets merge two array using concat() method:
let allHeros = marvel_heros.concat(dc_heros); // concat always returns new array
console.log('All heros:',allHeros);

// There is another way we can do this by using spread opertor
// spread operator syntax is triple dot;
let allNewHeros = [...marvel_heros, ...dc_heros];
console.log('All Heros with spread operator:', allNewHeros);

//? Difference between concat & spread operator is, In concat we have limitation that at a time only two array we can concat but by using spread operator we can add multiple array in a time.

console.log(Array.isArray("MUNNA")); // To check value is array or not.
console.log(Array.from("MUNNA")); // Convert into array
console.log(Array.from({name: "Gyana Ranjan Rout"})); // By default it will return empty array, we have to specify which one we want to convert in array, key or value.

// Suppose we have multiple variable, then how we can add them into a single array
let score1 = 100;
let score2 = 200;
let score3 = 300;
let allScoreArray = Array.of(score1, score2, score3); // Returns a new array from a set of elements.
console.log(allScoreArray);
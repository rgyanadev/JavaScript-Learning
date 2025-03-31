const myName = "Gyana";
const repoCount = 3;

// Now if we want to add both string or concat both string then we can do it in multiple way
console.log(myName + " has total of " + repoCount + " repository");

// But there is one method we can use & its very effective: STRING INTERPOLATION
// We use backtick to write this & to access varialbe value we use ${variable} syntax. Rest everyting it takes as string
console.log(`${myName} has total of ${repoCount} repository.`);

// We can declare string in some other way also.
const yourName = new String('Munna Bhaiya');
// The new keyword is used to create new object instance from constructor function. Here string is the constructor function.
// When we use new String(), it creates a String object wrapper, which is different from a primitive string literal.
// In this case the type of yourName will be object.
//* Check this in browser console for better understanding.

// Every string value behaves as array, mean consider that every character of a string is consider as element of an array.
// String values has there length.
const myStr = "hello world";
console.log(myStr.length); // 11
// We can access specific character of string also like below:
console.log(myStr[0]); // h
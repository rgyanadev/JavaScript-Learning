// length: To find length of the string
let str1 = 'Mahismati';
console.log(str1.length);


// charAt(): To find the charactor from the index
let str2 = 'Mahismathi';
console.log(str2.charAt(3));


// charCodeAt(): This method return a code of a character at specific index in a string;
// The method returns a UTF-16 code (an integer between 0 and 65535).
let str3 = 'Hello world';
console.log(str3.charCodeAt(2));


// at(): This method returns the character at a specified index (position) in a string.
// This on will accept nagative value also. If the value is nagative then it will check from the last.
let str4 = "Sheoiehalsjdiu";
console.log(str4.at(2));
console.log(str4.at(-2));


// Property Access string[];
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
let str5 = 'lksjdflkjj';
console.log(str5[6]);


// Extracting String Parts
// slice(): This method extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).
let str6 = "Apple, Banana, Kiwi";
console.log(str6.slice(7, 13));
// If you omit the second parameter, the method will slice out the rest of the string:
console.log(str6.slice(7));
console.log(str6.slice(-12, -6));

// substring(): This method is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
console.log(str6.substring(7, 13));


// toUpperCase() & toLowerCase(): First method is to convert string into uppercase & second one to convert lowercase
let str7 = 'Hello World!';
console.log(`Uppercase: ${str7.toUpperCase()}`);
console.log(`Lowerecase: ${str7.toLowerCase()}`);


// concat(): This method is used to join two or more strings
// Instead of plus method also we can use concat to join strings
let text1 = 'Hello';
let text2 = 'World';
console.log(`Concat two strings: ${text1.concat(" ", text2)}`);
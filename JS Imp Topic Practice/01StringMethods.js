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


// trim(): This method is used to remove white spaces from both end of the string.
// trimStart(): This method removes white spaces only from the beginning of the string.
// trimEnd(): This method removes white spaces only from the end of the string.
let strTrim = "  Hello world  ";
console.log(strTrim.trim()); // 'Hello World'
console.log(strTrim.trimStart()); // 'Hello World  '
console.log(strTrim.trimEnd()); // '  Hello World'


// padStart(length, value): This method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.
let string8 = "5";
console.log(string8.padStart(4, "0"));


// padEnd(length, value): This method pads a string from the end.
// It pads a string with another string (multiple times) until it reaches a given length.
let string9 = "5";
console.log(string8.padEnd(4, "0"));


// repeat(count): method returns a string with a number of copies of a string.
let string10 = "Hello";
console.log(string10.repeat(5));


// replace(stringWantToReplace, replaceValue): This method replaces a specified value with another value in a string
let string11 = 'JavaScript is best of the best';
console.log(string11.replace('JavaScript', 'Java'));

// Regular expression for replacing all
console.log(string11.replace(/best/g, 'Better'));

// This method is case sensitive. The value should be case sensitive.
// But for case insensitive also we can replace value by using /i expression
console.log(string11.replace(/javascript/i, 'GoLang'))

// replaceAll(): This method is allows you to specify a regular expression instead of a string to be replaced.
console.log(string11.replaceAll('best', 'Better'))
// console.log(string11.replaceAll(/best/g, 'Better'))


// split(): This method can convert a string into an array
let string12 = "apple,banana,orange";
console.log(string12.split(','));
console.log(string12.split(',', 2));
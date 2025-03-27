// indexOf(): This method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found
let string1 = "Please locate where 'locate' occurs!";
console.log(string1.indexOf('locate'));

// lastIndexOf(): This method returns the index of the last occurrence of a specified text in a string
console.log(string1.lastIndexOf('locate'));

// Both methods accept a second parameter as the starting position for the search
console.log(string1.indexOf("locate", 15));
console.log(string1.lastIndexOf("locate", 15));


// search(): This method searches a string for a string (or a regular expression) and returns the position of the match
let string2 = "Please locate where 'locate' occurs!";
console.log(string2.search('locate'));
console.log(string2.search(/locate/));


// match(): This method returns an array containing the results of matching a string against a string (or a regular expression).
let string3 = "The rain in SPAIN stays mainly in the plain";
console.log(`Match with normal text: ${string3.match('ain')}`);
console.log(`Math with normal text with expression: ${string3.match(/ain/)}`);
console.log(`Match with global search ${string3.match(/ain/g)}`);
console.log(`Match with global case insensitive: ${string3.match(/ain/gi)}`);


// matchAll(): method returns an iterator containing the results of matching a string against a string (or a regular expression).



// include(): This method returns true if a string contains a specified value.
let string5 = "Hello world, welcome to the universe.";
console.log(string5.includes("world"));
console.log(string5.includes("world", 6)); // 12 is the start position


// startsWith(): 

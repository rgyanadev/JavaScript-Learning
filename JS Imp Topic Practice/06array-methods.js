// Array Methods Quickcharts
let myArray = [1, 2, 3];

// length: This propety is to find out length of any array.
console.log('Lenght of the element is:', myArray.length); // 3

// push(): This method is used to add new element at last into array.
myArray.push(4)
console.log('Pushed new element to array:', myArray);

// pop(): This method is used to remove last element from an array.
myArray.pop();
console.log('Poped out element from array:', myArray);

// unshift(): This method is used to add element in first of an array.
myArray.unshift(0);
console.log('Unshift method result:', myArray);

// shift(): This method is used to remove first element of an array.
myArray.shift();
console.log('Shift method result:', myArray);

// at(index): This method returns element value from an array based on index.
console.log('At method result:', myArray.at(2));

// indexOf(element): Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log('IndexOf method result:', myArray.indexOf(2));

// include(element): Determines whether an array includes a certain element, returning true or false as appropriate.
console.log('Include method result:', myArray.includes(3));

// map(): Calls a defined callback function on each element of an array, and returns an array that contains the results.
let mapArray = myArray.map((num) => num * 2);
console.log('Map method result:', mapArray);

// filter(): Returns the elements of an array that meet the condition specified in a callback function.
let filteredArray = myArray.filter((item) => item > 2);
console.log('Filter method result:', filteredArray);

// every(): Determines whether all the members of an array satisfy the specified test.
// In simple way this method checks every element of an array, if those elements all elements satify then it return true else false.
console.log('Every method result:', myArray.every((num) => num > 2));

// some(): Determines whether the specified callback function returns true for any element of an array.
console.log('Sum method result:', myArray.some((num) => num > 2));

// fill(): Changes all array elements from start to end index to a static value and returns the modified array
let filledArray = myArray.fill(10);
console.log('Fill method result:', filledArray);

// reduce(): Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
let reducedArray = myArray.reduce((acc, num) => acc + num, 0);
console.log('Reduce method result:', reducedArray);

// concat(): Combines two or more arrays. This method returns a new array without modifying any existing arrays.
myArray = [1, 2, 3];
let newArray = [4, 5, 6];
let concatinatedArray = myArray.concat(newArray);
console.log('Concat method result:', concatinatedArray);

// reverse(): Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
myArray.reverse()
console.log('Reverse method result:', myArray);

// sort(): Sorts an array in place. This method mutates the array and returns a reference to the same array.
myArray.sort();
console.log('Sort method result:', myArray);

// join(): Adds all the elements of an array into a string, separated by the specified separator string.
let jointedValue = myArray.join('-');
console.log('Join method result:', jointedValue);

// flat(): Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// In simple terms if we have nested array then we can make it flat array by using flat method.
let nestedArray = [1, 3, [6, 87,], [77, 54], 97, 26];
let flatArray = nestedArray.flat()
console.log('Flat method result:', flatArray);

// find(): Returns the value of the first element in the array where predicate is true, and undefined otherwise.
let findedValue = myArray.find((num) => num > 2);
console.log('Find method result:', findedValue);

// findIndex(): Returns the index of the first element in the array where predicate is true, and -1 otherwise.
let findIndexVal = myArray.findIndex((num) => num > 2);
console.log('FindIndex method result:', findIndexVal);

// toString(): Returns a string representation of an array.
let stringValue = myArray.toString();
console.log('ToString method result:', stringValue);

// toLocaleString(): Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.
let localeStringVal = myArray.toLocaleString();
console.log('ToLocaleString method result:', localeStringVal);

// slice(): Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
let slicedArray = myArray.slice(2);
console.log('Slice method result:', slicedArray);

// splice(): Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
let splitedArray = myArray.splice(1, 1, 'a');
console.log('Splice method result:', splitedArray);

// Array.isArray(): Checks array is actual array or not.
console.log('Array.isArray method result:', Array.isArray(myArray));

// Array.from(): Creates an array from an iterable object.
console.log('Array.from method result:', Array.from("234"));

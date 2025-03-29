// console.log(2 > 3);
// console.log(2 == 2);
// console.log(2 == "2");
// console.log(2 === 2);
// console.log(2 != 1);
// All these above code will give value in boolean.

// In JS if we can compare between two different datatype but that is not recommended. As a code writer we should be carefull with comparision. Whenever we are comparing something then we need to ensure that both's type should be same. Otherwise the results will be unpredictable.
console.log("2" > 1); // true
console.log("02" > 1); // true
// JS is bit smart, before compare it convers "2" & "02" into numbers then compares. But the value will be unpredictable always.

console.log( null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined == 0);

// There is the difference between == and ===;
// == compare only value but === compare value with datatype also.
console.log("2" == 2); // true: because both value is same.
console.log("2" === 2); // false: because both is checking with value & datatype.
console.log(2 === 2); // true
// Prerequiste

/*
    Before knowing arrow function let's understand about this keyword.

    this: It's a keyword which always refers to correct context.

    - The value of this in JavaScript depends on how a function is invoked (runtime binding), not how it is defined.

    - When a regular function is invoked as a method of an object (obj.method()), this points to that object.

    - When invoked as a standalone function (not attached to an object: func()), this typically refers to the global object (in non-strict mode) or undefined (in strict mode). 
*/

const obj = {
    name: "manoj",
    channel: "mj",
    welcomeMessage: function () {
        console.log(`I am ${this.name} and welcome to my channel !`);
        // console.log(this) // this will print undefined cuz this keyword does not hava any reference.
    }
}
console.log(obj.welcomeMessage())
// we can not access name through this keyword outside to obj

console.log(this);
// Here is another thing is if we will print this keyword then here it will print {} (empty object). Reason is currently we are in node environment but if we will print this in browser then there it will give some propeties. 
/* For better understanding do console.log(this) in browser console.





/*
    ARROW FUNCTION
    There is another way we can define function is called arraw function.

    we can assign arrow function into a variable also.
    - Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.

    - Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.

    - Arrow functions cannot use yield within their body and cannot be created as generator functions.
*/

let arrowFunc = () => {
    console.log("This is an arrow function!");
}

// arrow functions are nothig but just like our normal function with different syntax.
// It works the same as any other function in javascript.

// Implicit return
// In implicit return we don't have to write explicitly return keyword. JS will automatically understand the return statement. 
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(1, 2));

const example1 = (num1, num2) => (num1 + num2) // this way also we can define
const example2 = () => ({ username: "gyana" }) // can return object like this also.
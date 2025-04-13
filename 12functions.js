/* 
    Functions

    Think of a function like a reusable magic trick.
    You write some code once inside it, and then you can use it
    anywhere in your program to do that same trick again and again.

    * Write once, use everywhere. Less work, more magic.
*/

// Function defination
function sayMyName() {
    console.log("gyana");
}

// To execute this code we need to write it like this:
sayMyName();
// Without this, above functino won't execute.
// This is called function execution.
// Another popular thing is calling the function to execute.

// Let's do something
function addTwoNumber() {
    const number1 = 10;
    const number2 = 20;
    console.log(number1 + number2)
}
// In this function we are adding two numbers & displaing result on console.
// But here the values are constant mean we can not change value. So, how could we do this: (By using parameters)
function addCustomNums(num1, num2) {
    // here num1 & num2 is called parameters
    console.log("The sum of two number is:", num1 + num2);
}

// Now we we call this function to execute we need to pass value at the place of num1 & num2. These passed value called arguments.
addCustomNums(2, 3);
// we can pass any values as argument & it will give the result of that two numbers.
//* Obviously, It should be numbers only because our execution code is execting number. 
// If we would pass random values then it might not give us the expected result.

// Now lets understand some intersting things.
// We can store the whole function in one variable also, like this:
let result = addCustomNums(10, 4);
// Here this result will execute 14 but if we will print result what will be the ans.
console.log(result); // undefined

// Let's understand why it happened.
// To access function value we need to return the result so, we can access the result.
function returnSomething() {
    return "Value has been returned!!";
}
let returedValue = returnSomething();
console.log("Result of retured value:", returedValue);
// Return statement has some rules:
// After return statement if we add any code, that simply does not execute. We if we want to execute some code then it should be before return statement.
// * There is also another thing called scope: we will learn about this later

// Some other function examples
function hasUserLoggedin(username) {
    // Suppose while calling this function user does not pass any argument then we can handle that scenarion by using some conditonal operator
    if (username === undefined || !username) {
        console.log("Please enter username first!");
        return; // to stop execution here.
    }
    return `${username} just loggedin!`;
}
console.log(hasUserLoggedin(""));


const myNewArray = [200, 300, 400, 500, 600];
function returnMySecondValue(getArray) {
    return getArray[1];
}

console.log("My second element of array is:", returnMySecondValue(myNewArray));
// As argument we can pass directly any object or array also like below:
// callingFunction({ username: "gyana", price: 300 })
// callingFunction([200, 300, 400, 500])
// These way also it works perfectly
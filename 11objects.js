// Singleton
/*
    Objects are one of the most important concept of JS. In Array we have leared about Array object which has property like length.
    The first thing we need to know about objects that they have properties.
    - Object properties are accessed through what's know as dot notation.
*/

// For exmaple: If we have an object named car with a property named color, we can access that in two ways
// Two decalare object we user OBJECT LITERALS. Objects are keys & values
let car = {
    color: '',
    type: ''
};
car.color = 'Blue'; // first way using dot notation
console.log(car);

car['type'] = 'Sedan'; // second way
console.log(car);

// We can also add our own properties to an object.
car.numberOfDoors = 4;
console.log(car);


// Getting Started
const mySym = Symbol("key1");
const JsUser = {
    name: "Gyana",
    age: 24,
    location: "Bhubaneswar",
    email: "gyana@test.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", 'wednesday', 'saturday'],
    "full address": "Kishan Nagar, Palasuni, Bhubaneswar, 751002", // This way also we can define but we can access this by using dot notation.
    [mySym]: "Symbol Value"
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full address"]);
console.log(JsUser[mySym]); // accessing symbol

// We can change value of object also
JsUser.email = "gyana@chatgpt.com";
console.log("Object value change:", JsUser);

// If we want to freez the object, then after modification of any value it won't reflect in object
// Object.freeze(JsUser);
// JsUser.email = "gyana.dev@gmail.com";
// console.log("After freez object value:", JsUser);

// We can add function also inside a object
JsUser.greeting = function () {
    console.log("Welcome to India!");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greetingTwo());
console.log(JsUser);

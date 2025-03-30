// There are two types of memory we have in JS
// 1. Stack (Primitive): The stack is used for static memory allocation, meaning the size & location of the memory are determined at compile time. It operates Last In - Fist Out (LIFO) principle.

let myName = "Munna";
let myNickname = myName;
myNickname = "Ladlu";

console.log(myName);
console.log(myNickname);
// In stack memory location, primitive values always take the copy of original value.

// 2. Heap (Non-primitive) : The heap is used for dynamic memory allocation where memory is allocated at runtime.
let user1 = {
    name: "munnabhiya",
    email: "munna@test.com"
}

let user2 = user1;
user2.email = "munnabhaiya@test.com";

console.log(user1.email);
console.log(user2.email);
// In heap memory location, non-primitive values have one sigle referece point. so If you change something it will update original value also.





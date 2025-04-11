let hingeUser = new Object();
console.log(hingeUser)

hingeUser.id = '12334';
hingeUser.name = "Rommy";
hingeUser.isLoggedin = false;
console.log(hingeUser);

// We can define nested object also like below:
const reguralUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Soham",
            lastname: "Shah"
        }
    }
}
// To access nested value, we can use same dot notation.
console.log(reguralUser.fullname.userFullname.firstname);


// How to merge to object
// By using Object.assign(target, source) method: Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
let obj1 = { num1: 1, num2: 2 };
let obj2 = { num3: 3, num4: 4 };
let obj3 = Object.assign(obj1, obj2);
console.log(obj3);

// Another way to merge is spread operator: most used to merge object
const mergedArray = { ...obj1, ...obj2 }; // simple & sweet
console.log(mergedArray);

// Object.keys(): Returns the names of all keys & stores into an array.
console.log("Object.key method result:", Object.keys(hingeUser));

// Object.values(): Returns the names of all values & stores into an array.
console.log("Object.value method result:", Object.values(hingeUser));


// Object.entries(): Returns an array of key/values of the enumerable own properties of an object
console.log("Object.entries() method result:", Object.entries(hingeUser));


// hasOwnProperty(): Determines whether an object has a property with the specified name.
console.log(hingeUser.hasOwnProperty('isLoggedin'));
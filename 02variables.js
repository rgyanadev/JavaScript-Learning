/*
Javascript has three keyword to declare varibales

var: Function scope, can be redeclared & can be re assigned.
     In mordern JS, It prefers not to use because of the issue of block scope & function scope.

let: Block scope, can not redeclared but can be re assigned.

const: Block scope, always need assignable & can not be re assigned.
       But we can modify object values & array elements.
*/

const accountId = 14556;
let accountEmail = 'hahri@gmail.com';
var accountPassword = "12345";

// Also we can declare variable without using keyword & also can assign value but it prefers not to use.
accountCity = "Bhubaneswar"

// In JS we can only declare varibale also but the value will be undefined.
let accountState;

// accountId = 2; // Not Allowed
accountEmail = 'hareu@test.com';
accountPassword = '8973487349';

console.table([accountId, accountEmail, accountPassword, accountState]);


// There are different way to define varialable also but those are not recommended;
let num1, num2, num3;
num1 = num2 = num3 = 10;
console.table([num1, num2, num3]);

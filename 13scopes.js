/*
    {} => Whereever curly braces comes in progamming, those usually identified as scope of that perticuar section.

    Scope is a vast topic itself which has so many rules that progaming should follow.

    Why scope?
    This is because there is something called function scope/global scope and block scope. BLOCK Scope is someting which every progammer follows. 

    Before as we heard about var, let & const, then let's understand how the scope works based on these keyword.
*/

// var variable1 = 10;
// let variable2 = 20;
// const variable3 = 30;

// console.log(variable1);
// console.log(variable2);
// console.log(variable3);
// If we see here, every variables will console properly without any problem. If this is the case then why let and const keywords introduced. Because of scope. VAR supports function scope which should be block scope. To prevent this we have LET & CONST.

// Let's understand with an example:
var a = 100;
if (true) {
    var a = 76;
    let b = 53;
    const c = 64;
}
/*
    Here first I have defined var a = 100, then have one if condition where I have defined var, let & const. Now if we would try to access those variables outside of that if condtional then for b & c we will get error.

    But not for a because the value can be access. This is the problem. When multiple progammers working in same file & they have defined multiple variable with same name, which we can do then it causes issues.
*/

//* There is a difference between browser global scope & node global scope. Both behaves differently.
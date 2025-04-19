/*
    {} => Whereever curly braces comes in progamming, those usually identified as scope of that perticuar section.

    Scope is a vast topic itself which has so many rules that programming should follow.

    Why scope?
    This is because like real life in programming also we need to have some limits. There are usually two types of scopes we have in JS
    - global scope : which can be accessible globaly.
    - block scope : while can be accessible only inside perticular section of code.

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

// More examples of scopes.
function one() {
    const username = "gyana";

    function two() {
        const location = "bhubaneswar";
        console.log(username);
    }
    // console.log(location); // will throw error because we are trying to access it outside of its scope.

    two();// calling function two
}
// console.log(username); // This will also throw error cuz we are trying to access this out side of that scope.
one(); // calling function one


if(true){
    let username = "munna";

    if(true){
        let website = "linkedin";
        console.log(username + " " + website);
    }
    // console.log(website); // This will throw error because we are accessing outside that scope.
}
// console.log(username); // This will throw error because we are accessing outside that scope.


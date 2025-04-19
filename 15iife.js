// Immediately Invoked Function Expressions (IIFE)

/*
    This is used to Immediate execution.
    This has been used to prevent global scope polution.
    syntax: (function expression)()
    In these two paranthises means, in first we write our function code and second one is used for execution.
*/

(function printValue() {
    // named iife
    console.log("PRINT THIS VALUE");
})();
// This will execute and will print the console value.
// After every iife add semicolon to end that execution or else it could cause issues.

// iife with parameter
((name) => console.log(`MY NAME IS ${name}.`))("MUNNA");
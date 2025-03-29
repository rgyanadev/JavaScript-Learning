let num = 1;
function checkCount() {
    console.log('Calling => ' + num);
    num++

    if (num === 11287) {
        return;
    } else {
        checkCount();
    }

}
checkCount();


// Factorial in recursion
function printFact(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * printFact(n - 1);
    }
}

let number = 5;
let factorialValue = printFact(number);
console.log('Factorial Value: ' + factorialValue);
// Q01. Reverse a String. 
function reverseString(str) {
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revStr = revStr + str[i]
    }

    return revStr;
}

let actualString = 'lskjfshfsk';
let revervedValue = reverseString(actualString);
console.log(revervedValue);


// Q2. Reverse an Array.
function reverseArray(arr) {
    let tempArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        tempArr.push(arr[i])
    }

    return tempArr;
}

let actArray = [78, 374, 38, 47, 86, 23];
console.log(reverseArray(actArray));


// Q3. Print fibonacci sequence
function fibonacci(count) {
    let fib = [0, 1];

    for (let i = 2; i < count; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

console.log(fibonacci(8));


// Q4. Factorial of Number
function factorial(num) {
    result = 1;
    for (let i = num; i >= 1; i--) {
        result = result * i
    }

    return result;
}

console.log(factorial(5));


// Q5. Prime number
function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
        else return true;
    }
}

console.log(isPrime(4));


// Q6. Power of Two
function isPowerOfTwo(num) {
    if (num < 1) return false;

    if (num === 1) return true;

    for (let i = num; i > 1; i = i / 2) {
        if (i % 2 !== 0) return false;
    }

    return true;
}

console.log(isPowerOfTwo(8));   // Output: true
console.log(isPowerOfTwo(16));  // Output: true
console.log(isPowerOfTwo(5));   // Output: false
console.log(isPowerOfTwo(0));   // Output: false
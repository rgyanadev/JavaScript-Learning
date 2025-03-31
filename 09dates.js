// Dates

const date = new Date(); // This will always gives current time with today's date.
console.log(typeof date); // Object
console.log(date);
// In this date will give some value which Ideally not reable.

// We have methods to convert date into more readable format.
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toDateString());
console.log(date.toLocaleString());
// There are many methods we have where we can format date based on our requirement.

// How to define different date, let's find out.
// Buy using same new Date() syntax we gonna change define different date.
// Syntax: new Date(year, month, date);
// ps. In JS months starts from 0;
const myDate = new Date(2023, 0, 20);
console.log(myDate.toDateString());

// We can define date using MM-dd-YY formt or opposite format also
// const newDate = new Date("2023-01-15");
const newDate = new Date("01-15-2025");
console.log(newDate.toLocaleString());

// Some addtional methods we will discuss like:
console.log(newDate.getTime()); // Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
console.log(newDate.getFullYear()); // Return full year
console.log(newDate.getMonth()); // Returns index of month
// Similarly we have multiple method we can try: Follow MDN Doc

// If we want to use Timestamp then we can also we can use.
// Timestamp is very imp. which gives us exact time with dates.
const timestamp = Date.now();
console.log(timestamp);


// Additionally, toLocaleString() is one of the most interesting method. 
// We can addtionally customize the date format by usig toLocaleString();
const localDate = new Date();
localDate.toLocaleString("default", {
    weekday: "long",
    day: "numeric"
})
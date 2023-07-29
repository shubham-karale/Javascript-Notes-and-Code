//In These Files, We learn about Numbers in javasript
let num = 55;
console.log(num);
let num2 = new Number(65); // Make number as a objects
console.log(num2);
// toPrecision() method returns a string representing the Number object to the specified precision.
let num3 = 123.456;
console.log(num3.toPrecision(3)); // op = 123

// toFixed() method converts a number into a string, rounding to a specified number of decimals.
let num4 = 123.456;
console.log(num4.toFixed(2)); //

// toExponential() method returns a string representing the Number object in exponential notation.
let num5 = 123.456;
console.log(num5.toExponential(2)); //
// toLocaleString() method returns a string with a language-sensitive representation of this number.
let amt = 100000;
console.log(amt.toLocaleString());


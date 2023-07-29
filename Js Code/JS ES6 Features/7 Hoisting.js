// HOISTING IN JS
//***************************IMPORTANT CONCEPT FOR INTERVIEW******************************************************
// Hoisting in js is a mechanism where variables and function declarations are moved to the top of their scope before the code execution.

//  Javascript only hoists declarations, not initializations.
//Example
// console.log(num); // undefined
console.log(num); // Prints undefined until the variable is initialized reached
// Declaration hoisted to the top but not the initialization
var num;
num = 6;

//*********************************************************************************************************************

//HOISTING will work differet for let and const
//Example
console.log(num); // ReferenceError: Cannot access 'num' before initialization
// let num = 6;

// Example 2

num1 = 1256;
console.log(num1); // ERROR: num1 is not defined
let num1;

//*********************************************************************************************************************

// Functions Expressions are not HOISTED

// Example
console.log(add(2,3)); // ERROR: add is not a function
let add = function(a,b) {
    return a + b;

    greet();  // ERROR: greet is not a function
    console.log(g); // undefined
    var g = function greet() {
        console.log("Hello");
    }
}

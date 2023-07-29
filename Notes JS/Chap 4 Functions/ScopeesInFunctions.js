//Scopes
/*
var variables have function scope. This means that they can only be accessed within the function in which they are declared.
let variables have block scope. This means that they can only be accessed within the block in which they are declared.
const variables also have block scope, but they cannot be reassigned once they are declared.
 */
/*
var variables have function scope, let and const variables have block scope.
var variables are accessible throughout the entire function
while let and const variables are only accessible within the block of code where they are defined. Additionally,
const variables are read-only, meaning their value cannot be changed once assigned.
 */
// let a = 5;
// let b = 6;
// let c = 7;
{
    let a = 5;
    const b = 6;
    var c = 7;
}
// console.log(a); // let have local scope
// console.log(b); // const is similar to let
console.log(c);// var is having global scope op = 7

let num1 = 10;
let num2 = 20;
var num3 = 30;
if(true)
{
    let num1 = 11;
    let num2 = 21;
    var num3 = 31;
    console.log(`Inner : ${num1},{num2},{num3}`); //op 11 21 31
}
console.log(`Outer : ${num1},{num2},{num3}`); // Op = 10 20 31
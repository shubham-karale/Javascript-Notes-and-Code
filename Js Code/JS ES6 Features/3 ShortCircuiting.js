// What is Short Circuiting?
//Ans = It is a way to assign default values to variables
/*
 Short Circuiting in JS
    1. || (OR) operator
    2. && (AND) operator
    E.g.
    let a = 10;
    let b = 20;
    let c = a || b; // 10
    let d = b || a; // 20
    let e = a && b; // 20
    let f = b && a; // 10
 */

let a = 10;
let b = 20;
let c = a || b; // 10   Or = Takes the first truthy value
console.log(c)
let d = b || a; // 20
console.log(d)
let e = a && b; // 20  And = Takes the last truthy value
console.log(e)
let f = b && a; // 10

console.log(f)


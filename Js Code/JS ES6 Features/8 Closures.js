// CLOSURES IN JAVASCRIPT
//***********************************MOST IMPORTANT FOR INTERVIEW***********************************//

// What is CLOSURES in javascript ?
//Ans = CLOSURE IS FUNCTION ALONG WITH ITS LEXICAL ENVIRONMENT

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
//  Closures = function toh return karega hi uske sath woh uska lexical environment bhi return karega

message = "Good Global";

function greet() {
    {
        console.log(`Hello ${message}`)
    }
}

greet() // Hello Good Global


message1 = "Good Global";

function greet1()
{
    let message1 = "Good Local";
    {
        message1 = "GOOOOD MORNING"
        console.log(`Hello ${message1}`) // Hello GOOOOD MORNING
    }
    console.log(message1) // GOOOOD MORNING
}
greet1(); // Hello Good Local

// Example 2

let msg = "Hello Global";

function greet2()
{
    let msg = "Hello Local";
    let c = function ()
    {
        console.log("I am C " + msg)
    }
    return c;

}

let res = greet2();
res(); // I am CHello Local

// Explain the above example
// 1. let msg = "Hello Global"; // Global Scope
// 2. function greet2() // Global Scope
// 3. let msg = "Hello Local"; // Local Scope
// 4. let c = function () // Local Scope
// 5. return c; // Local Scope
// 6. let res = greet2(); // Global Scope
// 7. res(); // Global Scope


//*********************************************************************************************************************
// Closures Example with corner cases
/*
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    displayName(); //
}
init(); // Mozilla  */

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    name = "Akshaya"
    displayName(); //
}
let c = init();
// Akshaya Why ? = Because the closure (displayName) is called after the variable is changed = closure
// returns the latest value of the variable


//****************************************************************************************************************************************

// ********************************************MOST IMPORTANT INTERVIEW QUESTION******************************************************

let x = () => {
    let num = 1;
    console.log(num)
    let y = () =>{
       let num = 2;
        console.log(num)
        let z = () =>{
            let num = 3;
            console.log(num)
        }
        z();
    }
    y();
}
x();

console.log("************************************************************************************************")
     /*******https://chat.openai.com/share/038d4cbf-57d4-4665-b2df-337185d3acd4***************/
/*
The given code defines a set of nested functions using arrow function syntax. Let's go through the code step by step to understand its behavior.

The outermost function is assigned to the variable x. This function has no parameters and begins with an opening curly brace { and ends with a closing curly brace }. It defines a local variable num and assigns it the value 1.


let x = () => {
    let num = 1;
    console.log(num);
    // ...
};
Inside x, there is another function assigned to the variable y. This function also has no parameters and begins with an opening curly brace { and ends with a closing curly brace }. It defines a new local variable num and assigns it the value 2.


let y = () => {
    let num = 2;
    console.log(num);
    // ...
};
Inside y, there is yet another function assigned to the variable z. This function also has no parameters and begins with an opening curly brace { and ends with a closing curly brace }. It defines a new local variable num and assigns it the value 3.

let z = () => {
    let num = 3;
    console.log(num);
};
The z function simply logs the value of its local variable num to the console.

After defining the z function, it is immediately invoked using the syntax z(). This means that the function is called and executed immediately.

z();
Returning back to the y function, after defining the z function, it also invokes the z function using z(). This means that the z function will be called and executed when y is invoked.


y();
Finally, returning back to the x function, after defining the y function, it invokes the y function using y(). This means that the y function will be called and executed when x is invoked.


x();
When the code is run, the following output will be logged to the console:


1
2
3
This is because the code executes x(), which in turn executes y(), and y() executes z(). Each function logs the value of its own num variable, resulting in the sequential output of 1, 2, and 3.
 */

//************************************************************************************************************************

// Closures Example 2

function returnFunction()
{
    let x1 = () => {
        let num1 = 1;
        console.log(num1)
        let y1 = () =>{
            // let num1 = 2;
            console.log(num1)
            let z1 = () =>{
                // let num1 = 3;
                console.log(num1)
            }
            z1();
        }
        num1 = 100;
        y1();
    }

    return x1;
}

let test = returnFunction();
test();

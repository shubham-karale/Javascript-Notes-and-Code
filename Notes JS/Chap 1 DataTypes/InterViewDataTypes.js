/*
  What are the Types of 1 Data Types in JavaScript?
  ans: 1. Primitive 1 Data Types
       2. Non-Primitive 1 Data Types

    1. Primitive 1 Data Types
        1. Number
        2. String
        3. Boolean
        4. Undefined
        5. Null
        6. Symbol = new in ES6 Used to create unique identifiers for objects

   2.Non-Primitive 1 Data Types
        1. Object
        2. Array
        3. Function
        4. Date

    Qu 2: What is the difference between Primitive and Non-Primitive 1 Data Types?
    ans: Primitive 1 Data Types are passed by value and
         Non-Primitive 1 Data Types are passed by reference.

    Qu 3 Is JavaScript a statically typed or a dynamically typed language, and Why?
    Ans = Dynamically Typed Language because the type of variable is determined at runtime.

    Qu 4 = What is the Syntax of Symbol data types ?
    Ans = let value = Symbol('hello');
    Qu 5 Why Javascript language is called as loosely typed language ?
     ans = Because we can assign any type of data to a variable without any type checking.

    Qu 6 Why Javascript language is single threaded language?
     Ans = JavaScript is single-threaded, which means it can only do one thing at a time.
         It goes through each line of code in order,doing one task before moving on to the next.
 */


let id1 = Symbol("123");
let id2 = Symbol("123");
console.log(id1 === id2); // false

// Big Int Example
let big_num = 1234567890123456789012345678901234567890n;
console.log(big_num)

// Q Chap 2 4 Arrays Examples
let superhero = ["Batman","Superman", "Spiderman", "Ironman","Aquaman","Captain-Marvel"];
console.log(superhero);

// Q Object Examples Object is key value pair
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person);

// Function Examples
// typeof operator returns function for functions but actually functions are objects
function myFunction() {
    console.log("Hello World!");
}

console.log(typeof myFunction);
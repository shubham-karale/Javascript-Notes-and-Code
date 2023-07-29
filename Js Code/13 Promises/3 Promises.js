// What is Prmise in JS ?
//Ans=  A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.
//SYNTAX: new Promise( /* executor */ function(resolve, reject) { ... } );

//
// console.log("START");
// setTimeout(function(){
//     console.log(" MID Hello World");
// },3000);
//
// console.log("END");

console.log("*********************************************************************************")

//*********************************************************************************************************************

// let promise = new Promise(function(resolve, reject) {
//     console.log("Promise");
//     resolve(69);
// });
// console.log("START");
// setTimeout(function(){
//     console.log("HELLO WORLD AFTER 2 SEC");
// },2000);
//
// console.log("END");
//
// console.log(promise)

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


//What is Parallel Programming? = Parallel programming is a type of computation in which many calculations are carried out simultaneously.

// What is Parallel Execution? = Parallel execution is a method of simultaneously running multiple tasks.

// What is the difference between Parallel Programming and Parallel Execution? = Parallel programming is a type of
// computation in which many calculations are carried out simultaneously. Parallel execution is a method of
// simultaneously running multiple tasks.///

//*********************************************************************************************************************

// let newPromise = new Promise(function(resolve, reject) {
//     console.log("Promise is Pending");
//      setTimeout(function(){
//          console.log("Promise is Resolved");
//          resolve(true);
//      },3000);
// });

let newPromise2 = new Promise(function(resolve, reject) {
    console.log("Promise is Pending");
    setTimeout(function(){
        // console.log("Promise is Rejected");
        reject(new Error("Promise is Rejected"));
    },5000);
})

newPromise.then(function(data) {
    console.log(data);
});

newPromise2.catch(function(error) {
    console.log(error);
});

newPromise2.then(function(data) {
    console.log(data);
});
// then() method takes two arguments, a callback for success and another for failure.
// catch() method is equivalent to then(null, rejection) and is used for catching errors.



console.log(newPromise);
console.log(newPromise2)
// Promise
/*
    What is Promise?
   Ans = A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
 */

//  Async task = DB Calls, API Calls, File Read, File Write, setTimeout, setInterval, etc.

const promise1 = new Promise(function(resolve, reject){
    setTimeout(function()
    {
        resolve("Promise is Resolved");
    },2000)
});
//What is need of resolve() and reject()?
// Ans = The resolve() method returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned; if the value is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value. This function flattens nested layers of promise-like objects (e.g. a promise that resolves to a promise that resolves to something) into a single layer.

//resolve() is also usefule while we are using the .then() method.

//then() method is used to handle the resolved value of the promise. = takes callback function as argument.

//catch() method is used to handle the rejected value of the promise. = takes callback function as argument.

promise1.then(function(data){
    console.log("Promise is Settled Perfectly")
}).catch(function(error){
    console.log("Promise is Rejected")
});

// to connect then with the Promise method we use resolve() method.
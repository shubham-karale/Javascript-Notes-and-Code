// What is Asynchronous Programming?
//Ans = Asynchronous programming is a means of parallel programming in which a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure or progress.

// What is Synchronous Programming?
//Ans = Synchronous programming is a means of programming in which a unit of work runs and completes before the next unit is run.

// What is the difference between Asynchronous and Synchronous Programming?
//Ans = In synchronous programming, the program is executed sequentially from top to bottom. In asynchronous programming, the program is executed immediately where it is called. It doesn't wait for the response from the function.

// Exmaple of Asynchronous Programming
//Ans = setTimeout() function is an example of asynchronous programming.

setTimeout(function(){
    console.log("Hello World");
},3000);
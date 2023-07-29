// Event Loop = 1. Call Stack 2. Callback Queue 3. Event Loop

/*
Qu 1 What is Javascript?
Ans: Javascript is a programming language that is used to make web pages interactive.
Javascript is a scripting language that is used to create and control dynamic website content.
Javascript is single threaded, non-blocking,asynchronous,concurrent language.


Qu 2 What is call stack and How its works?
Ans: Call stack is a data structure that records the function calls, basically where in the program we are.
Call stack is used to manage function invocation.
Call stack is a LIFO data structure.

 Qu 3 What is task Queue and How its works?
 Ans = Task Queue is a data structure that records the tasks that needs to be done.
    Task Queue is also known as callback queue.

    Main function of task queue = put the task in queue for waiting until the previous function in callback queue
     should be executed


  Qu 4 What is Event Loop and How its works?
  Ans = Event Loop is a functionality that checks the call stack and task queue.
  Event Loop is a functionality that pushes the task from task queue to call stack.
 */

//********************************************************************************************************

// EVENT LOOP

/*

As a senior JavaScript developer, I can explain the concept of the event loop in simple words.

In JavaScript, the event loop is responsible for managing the order in which different tasks are executed. It ensures that your code runs smoothly and doesn't block or freeze the entire program.

Imagine you have a to-do list with multiple tasks. Each task takes some time to complete, and you want to make sure you don't get stuck on one task while ignoring the others. The event loop helps you manage this situation.

Here's how it works:

JavaScript is single-threaded, meaning it can only execute one task at a time. So when a task is executed, it runs until completion before moving on to the next task.

JavaScript keeps track of two main components: the call stack and the event queue. The call stack is like a stack of function calls, keeping track of the currently executing task.

When an asynchronous task, such as fetching data from a server or waiting for a user's input, is encountered, it gets moved to the event queue instead of being executed immediately. The event queue holds these tasks until they are ready to be processed.

The event loop continuously checks if the call stack is empty. If it is, it takes the next task from the event queue and pushes it onto the call stack for execution.

This process repeats indefinitely, allowing tasks in the event queue to be executed one after the other, as long as the call stack is empty.

To summarize, the event loop ensures that JavaScript can handle asynchronous tasks efficiently. It moves such tasks to a separate queue and processes them when the call stack is empty, ensuring smooth and non-blocking execution of your code.
 */
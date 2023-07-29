// TOP LEVEL MODULE

/*
    - Top Level Module is a new feature in ES2020
    - It allows us to import modules without using the module keyword
    - It allows us to use await keyword at the top level

    What is a top-level module?
    A module that can use the await keyword at the top level.
    When can I use top-level await?
        In ES modules.

     Benefits of using top-level await:
        Makes asynchronous code more concise and easier to read.
        Improves performance by allowing the browser to start executing other code while the asynchronous operation is pending.
        Makes it easier to write code that is compatible with different JavaScript runtimes.

    Drawbacks of using top-level await:
            Can be more difficult to debug asynchronous code that uses top-level await.
            Can be more difficult to test asynchronous code that uses top-level await.
            Not supported in all JavaScript runtimes.
 */

// Example 1
const fetch = require("fetch");

const url = "https://example.com/data.json";

const data = await fetch(url);

console.log(data);

//
// A top-level module in JavaScript is a module that can use the await keyword at the top level. This allows you to write asynchronous code at the top level of a module, without having to wrap it in an async function.
//
// Top-level await was introduced in ES2020, and it is supported in all major JavaScript runtimes, including Node.js and browsers.


    const fetch = require("fetch");

const url = "https://example.com/data.json";

const data = await fetch(url);

console.log(data);

// In this example, the await keyword is used to wait for the fetch() promise to resolve before the console.log()
// statement is executed.

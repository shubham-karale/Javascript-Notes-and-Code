// CLOSURES


/*
   What is meant by closures in mdn docs
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
 */

//Closures means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned

// Closures doesn't make separate copy it is just pass the reference to the variables

//Example 1

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++;
        return count;
    }
    return innerFunction;
}

console.log(outerFunction())

let res = outerFunction();
console.log(res())


// Example 2

let counter = function () {
    let count = 0;
   let innerCounter =  function () {
        count++;
        console.log(count);
    }
    return innerCounter;
}

let cnt = counter();
console.log(cnt()); //1

console.log(cnt()) // 2

console.log(cnt()) // 3
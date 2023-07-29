// REST OPERATOR = ... (3 dots) = It is used to merge a list of function arguments into an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [a, b, ...rest] = arr;

console.log(a,b,rest);  // 1 2 [ 3, 4, 5, 6, 7, 8, 9 ]

// Example 2

let arr2  = [1,2,3,4,5,6,7,8,9];

let [a2, , , , , ...rest] = arr2;

console.log(a2,rest); // 1 [ 6, 7, 8, 9 ]
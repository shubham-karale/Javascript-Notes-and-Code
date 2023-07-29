/*
    Arrays Methods
    1)push() = add last element in array
    2)pop() = remove last element in array
    3)shift() = remove first element in array
    4)unshift() = add first element in array
    5)splice() = add and remove element in array
    6)concat() = add two array in one array
 */

// Reverse Array
let num = [1,2,3,4,5,6,7,8,9,10];
// reverse() = reverse array = mutator method = changes the original array
console.log(num.reverse()); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let numbers = [1,2,3,4,5,6,7,8,9,10];

let letters = ['a','b','c','d','e','f','g','h','i','j'];

let mix = numbers.concat(letters); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
// concat() = add two array in one array = non-mutator method = not changes the original array

//slice()
let parts = mix.slice(5,10); // ["f", "g", "h", "i", "j"]
// slice() = slice array = non-mutator method = not changes the original array

//splice()
let splice_arr = mix.splice(5,10); // ["f", "g", "h", "i", "j"]
// splice() = add and remove element in array = mutator method = changes the original array
console.log(splice_arr); // ["f", "g", "h", "i", "j"]
console.log(mix); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b", "c", "d", "e"]

// at() = get element from array
let arr2 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr2.at(5)); // 6  = return the index
console.log(arr2.at(-4)); // 7 = return the index
// at() = get element from array = non-mutator method = not changes the original array
// at() = not supported in all browsers


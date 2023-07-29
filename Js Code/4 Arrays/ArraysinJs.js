// We learn about Chap 2 4 Arrays in javascript
/*
     Chap 2 4 Arrays are the collection of multiple items and their values
      **********************InterView Questions*************************
      1) What is the difference between Array and Object?
      2) What is the difference between Array and Set?
      3) What is the shallow copy and deep copy?
      4) What is the difference between shallow copy and deep copy?

 */
//Syntax
const arr = [1,2,3,4,5,6,7,8,9,10];
let nums = new Array("Batman","Joker","Aquaman","Flash","SuperMan");
// Chap 2 4 Arrays are the collection of multiple items and their values
console.log(arr);
arr[0] = 2;
console.log(arr);
// So By Performing above operation we can change the value of the array
//These means that arrays perform shallow copy Operation


//*****************************Chap 2 4 Arrays Methods*******************************
/* 1) Array.isArray() = This method is used to check whether the given variable is array or not
    2) Array.from() = This method is used to convert the string into array
    3) Array.of() = This method is used to convert the string into array
    4) Array.prototype.concat() = This method is used to merge two or more arrays
    5) Array.prototype.copyWithin() = This method is used to copy the part of array to another location in the same array
    6) Array.prototype.entries() = This method is used to return the array iterator object with key value pair
    7) Array.prototype.every() = This method is used to check whether all the elements of the array pass the test or not
    8) Array.prototype.fill() = This method is used to fill the array with static value
    9) Array.prototype.filter() = This method is used to create a new array with all the elements which pass the test
    10) Array.slice() = This method is used to return the selected elements in the array as a new array object
    11) Array.splice() = This method is used to add or remove the elements from the array




 */
// Slice Operations
const arr1 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr1.slice(1,4));
console.log("A :",arr1); // As we can see that slice method does not change the original array
//Splice
console.log(arr1.splice(1,4));
console.log(" B ",arr1);  // As we can see that splice method change the original array
//Map function in Javascript
/*
       Map function is used to iterate over the array and it returns a new array
         Syntax : array.map(function(currentValue,index,arr),thisValue)
            Example : const arr = [1,2,3,4,5,6,7,8,9,10];
                        const newArr = arr.map( (ele) => ele * 2);
                        console.log(newArr);
 */
//  Filter and Map Function return new array after modifications

const nums = [1,2,3,4,5,6,7,8,9,10];
const newNums = nums.map( (ele) => ele+10);
console.log(newNums)

const test = nums.map( (ele) => { ele + 10}); // return undefined because we have not used return keyword
console.log(test); // [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ]

//---------------------------------------------------------------------------------------------------------------------------


//What is chaining in Javascript ?
// Ans = Chaining is a way to connect multiple methods one after another on the same object.
//        It is done by returning the object itself from the method.

let arr_num = [1,2,3,4,5,6,7,8,9,10];
let ans = arr_num.map( (ele) => ele + 10).map( (ele) => ele + 1).filter( (ele) => ele % 2 == 0 );
console.log(ans);
// after applying map function on arr_num we get new array and then we apply map function on new array and so on
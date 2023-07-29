/*
   Higher Order Methods
    1)forEach() = loop through array
    2)map() =
    3)filter() =
    4)reduce() =
    5)find() =
    6)findIndex()
    7)every()
    8)some()
    9)sort()
    10)flat()
    11)flatMap()

    14)entries()
    15)from()
    16)of()
 */

//map() =
let arr = [1,2,3,4,5,6,7,8,9,10];
let arr2 = arr.map((currentValue, index, array) => {
    return currentValue * 2;
});
console.log(arr2); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

//filter() = FILTER THE VALUE BASED ON CONDITION AND RETURN NEW ARRAYS
let arr3 = [1,2,3,4,5,6,7,8,9,10];
let arr4 = arr.filter((currentValue, index, array) => {
    return currentValue > 5;
});
console.log(arr4) // [6, 7, 8, 9, 10]

// reduce() = accumulate the value and return single value
let arr5 = [1,2,3,4,5,6,7,8,9,10];
let sum = arr5.reduce((accumulator, currentValue, index, array) => {
    return accumulator + currentValue;
});
console.log(sum); // 55

// find() = find the value and return the value
let arr6 = [1,2,3,4,5,6,7,8,9,10];
let find = arr6.find((currentValue, index, array) => {
    return currentValue > 5;
});
console.log(find); // 6 = returns the first value which satisfies the condiiton

// findIndex() = find the value and return the index
let arr7 = [1,2,3,4,5,6,7,8,9,10];
let findIndex = arr7.findIndex((currentValue, index, array) => {
    return currentValue > 5;
});
console.log(findIndex); // 5 = returns the first index which satisfies the condiiton

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  some() and every() = return boolean value
// some() = return true if any one value satisfies the condition
// every() = return true if all value satisfies the condition

// some() example
let strArr = ['a','b','c','d','e','f','g','h','i','j'];
let some = strArr.some((currentValue, index, array) => {
    return currentValue === 'g';
});
console.log(some); // true

// every() example
let strArr2 = ['a','b','c','d','e','f','g','h','i','j'];
let every = strArr2.every((currentValue, index, array) => {
    return currentValue === 'a';
})
console.log(every); // false

// some() example 2
let scores = [65,83,90,78,50,94,50,72,60,81];
let some1 = scores.some((currentValue, index, array) => {
    return currentValue > 90;
});
console.log(some1);// true

let every1 = scores.every((currentValue, index, array) => {
    return currentValue >= 50;
});
console.log(every1); //

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// flat() = convert nested array into single array
let nums1 = [1,2,3,4,5,6,7,8,9,10,['a','b','c','d','e','f','g','h','i','j'], ['!','@','#','$','%','^','&','*']];
let flat = nums1.flat();
console.log(flat)

// flatMap() = convert nested array into single array and perform operation on it
//flatmap() = map() + flat()
//Example 1
let nums2 = [1,2,3,4,5,6,7,8,9,10,['a','b','c','d','e'['k','l','m','n','o','p','x','y','z'],'f','g','h','i','j']];
let flatMap = nums2.flatMap((currentValue, index, array) => {
    return currentValue + 10;
});
console.log(flatMap);
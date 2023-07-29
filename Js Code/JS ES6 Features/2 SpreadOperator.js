// Spread Operator

// Spread Operator is used to spread the elements of an array or object

// Spread Operator in Arrays

let arr = [1,2,3,4,5,6,7];
let arr2 = [8,9,10,11,12,13,14,15];
console.log(...arr); // 1 2 3 4 5 6 7
console.log(...arr2); // 8 9 10 11 12 13 14 15

console.log(...arr,...arr2); // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

const nameOfGirl = 'AKSHAYA';
console.log(...nameOfGirl); // A K S H A Y A

//********************************************************************************************************************* */

//+++++++++++++++++++++++++++++++++++REST OPERATOR+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Rest Operator is used to merge a list of function arguments into an array

// Rest Operator in Arrays

let testingNums = [1,2,3,4,5,6,7,8,9,10];
let [a,b,c,...d] = testingNums;

console.log(a,b,c,d); // 1 2 3 [ 4, 5, 6, 7, 8, 9, 10 ]

// Converting the arrays into the Objects

let arr3 = [1,2,3,4,5,6,7,8,9,10];
let {...obj} = arr3;

console.log(obj); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5,'5': 6, '6': 7, '7': 8, '8': 9, '9': 10 }

// Spread Operator in Functions

let sumArr = [1,2,3]
function sum(a1,b1,c1){
    return a1+b1+c1;

}

console.log(sum(...sumArr)); // 6

//************************************************************************************************************


//  REACT JS SPREAD OPERATOR EXAMPLE

let obj2 = {
    name: 'Akshaya',
    age: 22,
    city:"Amravati",
    state:"Maharashtra",
    country:"India",
    jobLocation:"Mumbai"
}

console.log( { ...obj2,jobLocation:"Pune" } ); // { name: 'Akshaya', age: 22, city: 'Amravati', state: 'Maharashtra', country: 'India', jobLocation: 'Pune' }

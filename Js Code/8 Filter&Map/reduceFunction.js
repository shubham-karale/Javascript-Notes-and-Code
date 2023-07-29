// Reduce Function in Javascript
/*
    The reduce() method executes a reducer function (that you provide) on each element of the array,
    resulting in single output value.
    Syntax : array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    Example : const arr = [1,2,3,4,5,6,7,8,9,10];
                const sum = arr.reduce( (accumulator, currentValue) => accumulator + currentValue);
                console.log(sum);
                op : 55
    Real Life Example : Shopping Cart Example :
 */
const arr = [1, 2, 3, 4];
const sum = arr.reduce((function (accumulator, currentValue) {
    console.log(`Accumulator = ${accumulator} and Current Value = ${currentValue}`);
    return accumulator + currentValue
}), 0);
// Reduce Function takes two arguments : 1. Callback Function 2. Initial Value
// Callback Function takes four arguments : 1. Accumulator 2. Current Value 3. Current Index 4. Array
// Initial Value is optional

// Reduce Function is used to find the sum of all the elements of the array

// Reduce Method using arrow function
let test_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const totalSum = test_nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum);

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Real Life Example : Shopping Cart Example :

let shoppingCart = [{
    product: "Laptop",
    quantity: 1,
    price: 100000,
},
    {
        product: "Mobile",
        quantity: 2,
        price: 50000,
    },
    {
        product: "Headphones",
        quantity: 1,
        price: 5000,
    },
    {
        product: "Charger",
        quantity: 1,
        price: 1000,
    },
    {
        product: "Mouse",
        quantity: 1,
        price: 500,
    },
    {
        product: "Keyboard",
        quantity: 1,
        price: 1000,
    },
    {
        product: "Monitor",
        quantity: 1,
        price: 10000,
    },
    {
        product: "Hard Disk",
        quantity: 1,
        price: 5000,
    },
    {
        product: "Pen Drive",
        quantity: 1,
        price: 1000,
    },

];

const totalSumKart = shoppingCart.reduce( (accumulator,item) => accumulator+item.price,0)
console.log(totalSumKart);



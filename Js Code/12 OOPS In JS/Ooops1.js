// OOPS in JS
// Contsructor function
// What is constructor function ?
// Ans = Constructor function is used to create a new object with properties and methods
let Car = function (color,model)
{
    this.color = color; // this keyword is used to refer to the current object
    this.model = model; // properties can be accessed using dot operator
}

let car1 = new Car("Black","BMW"); // new keyword is used to create a new object
// car1 is intance of Car
console.table(car1);

let College = function(name,address)
{
    this.name = name;
    this.address = address;
}
let college1 = new College("IIT","Delhi");
console.table(college1);

console.log(car1 instanceof Car); // true //
// instanceof is used to check whether the object is instance of a class or not

console.log(Car.prototype)

// What is prototype ?
// Ans = Prototype is an object that is associated with every functions and objects by default in JS

// What is prototype chain ?
// Ans = It is used to access the properties and methods of one object from another object
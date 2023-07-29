// Object Destructuring
const user = {
    full_name: "Ramya Krishnan",
    age: 24,
    city: "Hyderabad",
    email: "ramyaKrishnan@gmail.com",
    hobbies: ["Singing", "Dancing", "Reading"],
}
//What is Object Destructuring?
//It is a way to extract properties from an object or items from
// an array and store them in variables

//Syntax
const {full_name:name,city:hyd} = user;
console.log(`The Name is ${name} and City is ${hyd}`)

//JSON = JavaScript Object Notation
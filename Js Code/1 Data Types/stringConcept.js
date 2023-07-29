// String Concept in JavaScript
let name = "Shubham";
let age = 22;
let city = "Mumbai";
// Below is the old fashion way to print the string
console.log("My name is " + name + " and my age is " + age + " and I live in " + city);
// Below is the new fashion way to print the string
// String Interpolation
console.log(`My name is ${name} and my age is ${age} and I live in ${city}`);


//String as objects
//As per below statments we can make string as key value pair that is objects
let naam = new String('Monami');
console.log(naam);

//String Methods
console.log(naam.length);
console.log(naam.toLowerCase());
console.log(naam.toUpperCase());
console.log(naam.charAt(2));
console.log(naam.indexOf('a'));
console.log(naam.lastIndexOf('a'));
console.log(naam.endsWith('i'));
console.log(naam.includes('a'));
console.log(naam.substring(0,4));

str = `            Helllo World How're You Doing What is the plan of the today         `;
console.log(str.split(' '));
console.log(str.substring(-8,5));
console.log(str.trim(" "));
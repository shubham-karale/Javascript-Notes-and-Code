// Chap 2 4 Arrays Parts 2
// // We learn about Chap 2 4 Arrays in javascript

const marvel_heroes = ['Spiderman','Ironman','Captain Marvel',"Shang Chi",'Hawk Eye'];
const dc_heroes = ['Batman','Superman','Aquaman'];

// .push()
// marvel_heroes.push(dc_heroes)
console.log(marvel_heroes); //Array ke andar array push ho gaya

// .concat() = This method is used to merge two or more arrays
const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes); //

//Spread Operator = This operator is used to merge two or more arrays
// Syntax of Spread Operator is ...
const mytoys = ['Bat','Ball','Car','Bike'];
const friendToys = ['Doll','Teddy','Car','Bike'];
const ourToys = [...mytoys,...friendToys];
console.log(ourToys);

//.flat() = This method is used to merge two or more arrays into one array
const num1 = [1,2,3,[4,5,6,[7,8,[9,10,11,[12,13,14,[15]]]]]];
console.log(num1.flat(Infinity));

// Array.isArray() = This method is used to check whether the given variable is array or not
console.log(Array.isArray(num1));
//Array.from() = This method is used to convert the string into array
const str = "Hello World";
console.log(Array.from(str));
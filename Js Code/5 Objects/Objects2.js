// We Learn about objects in js Part 2

//Literal Notation = Non Singleton Object
const user = {} //Empty Object
//Constructor Notation = Singlton Object
const user1 = new Object(); //Empty Object

console.log(user);
console.log(user1);

const tinderUser = {};
tinderUser.name = "Ramya";
tinderUser.age = 24;
tinderUser.city = "Hyderabad";
tinderUser.email = "ramyakrishnan@gmail.com";
tinderUser.hobbies = ["Singing","Dancing","Reading"];
console.log(tinderUser);

//---------------------------------------------------------------------------------------------------------
const regularUser = {
    name: "Monami",
    fullname:{
        userName:{
            firstName:"Monami",
            lastName:"Mahajan"
        }
    }
}
console.log(regularUser);


const obj1 = {1:"a",2:"b",3:"c"};
const obj2 = {4:"d",5:"e",6:"f"};
const obj3 = {obj1,obj2};
console.log(obj3);

// const obj4 = Object.assign(obj1,obj2); // It will merge the two objects all the values in stored in obj1
console.log(obj1);

// Most Preferable Method for Object Merging
const obj5 = Object.assign({},obj1,obj2); // It will merge the two objects all the values in stored in new object
console.log(obj1);

// Object Merge using Spread Operator
const obj6 = {...obj1,...obj2};
console.log(obj6);

// Object Methods
console.log(Object.keys(tinderUser)); // It will return the keys of the object op will be in arrays
console.log(Object.values(tinderUser)); // It will return the values of the object op will be in arrays
console.log(Object.entries(tinderUser)); // It will return the keys and values of the object op will be in arrays
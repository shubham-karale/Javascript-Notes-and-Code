// we Learn about this keywords
// this keyword is used to access the object properties
// refers to the object that is executing the current function
/*
 context means kiske bare me baat ho rahi hai
 ***********************************InterView Que********************************************************
 1)When You're in node enviourment then this keyword refers to the global object
 and in browser this keyword refers to the window object
 "this" keyword is a powerful tool that can be used to access properties and methods of objects.
 It can also be used to refer to the global object.
 2)In JavaScript, the this keyword refers to an object.
 Which object depends on how this is being invoked (used or called).
The this keyword refers to different objects depending on how it is used:
In an object method, this refers to the object.Alone, this refers to the global object.
In a function, this refers to the global object.

 */
const user = {
    userName: "Ramya Krishnan",
    price:2000,
    welcomeMessage : function()
    {
        console.log(`The UserName is ${this.userName}, Welcome to the website`);
        console.log(this) // op will be the object because we are in the object context
    }
}
user.userName = "Monami"; // op will be monami beacause change the value of the object as in context
user.welcomeMessage();
console.log(this); // op will be empty object because we are in node enviourment

// this keyword is used to access the object properties
//this keyword in fucntion
function one()
{
    console.log(this); // some methods of this will be printing
}
one();

function two()
{
    let userName = "Monami";
    console.log(this.userName); // op = undefined because this keyword will only apply to the object
}
two();
//*************************************ARROW FUNCTION***************************************************
// Arrow function does not have their own this keyword
let three = () =>{
    userName = "John";
    console.log(this.userName); // op = undefined because this keyword will only apply to the object
}
three();
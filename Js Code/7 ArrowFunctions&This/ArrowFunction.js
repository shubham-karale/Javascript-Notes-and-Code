//Arraw Function
//Arrow Function is a new way of writing a function
//Syntax = () => {}
// Explicit Return = You have to write return keyword
const add = (num1, num2) =>{
    return num1 + num2;
}
console.log(add(10,20));

// Implicit Return = There is no need to write return keyword
// If the function has only one line of code then we can remove the curly braces and return keyword
// If you write curly braces then you have to write return keyword
// If you write () then you don't have to write return keyword
//************************** Remember these concept is very useful in React Js************************
const substract = (num1,num2) => (num1-num2);
console.log(substract(20,10));

// What if the return the object in arrow function
//while writing object in arrow function we have to write () before the curly braces
const objTest = () => ({name:"Ramya",age:21});

/************************************Important Points ******************************************** */
// old method solutions
const devName = {
    name:"Ramya",
    role:"Javascript Developer",
    exp:2,
    show:function(){
        let that = this;
        console.log(this)
        console.log(this.name,this.role,this.exp);
        setTimeout(function(){
            // console.log(this.name,this.role,this.exp); op = undefined undefined undefined
            console.log(that.name,that.role,that.exp);
        },2000); // function ke anddar function hai toh context change ho jata hai
    }
}
//new Mehthod Solutions
// Lexical This
const managerName = {
    name:"Ramya",
    role:"Project Manager",
    exp:5,
    display:function (){
        console.log(this.name,this.role,this.exp);
       setTimeout(() => {
        console.log(this.name,this.role,this.exp);
       },2000);
    }
}

devName.show();
managerName.display();

/*
  Functions inside the Objects are called Methods
 */
const obj = {
    name: 'Raj',
    age: 20,
    greet: function () {
        console.log(`Hello, ${this.name}`);
    }
}
console.log(obj.greet()); // Hello

//this keyword is used to access the properties of the object
const obj1 = {
    userName :"Shubham",
    lastName:"Karale",
    age:22,
    greet: function () {
        console.log(`Hello, ${this.userName} ${this.lastName}`);
    }

}
//********************************************************************************************************

// call() and apply() methods
// call() and apply() methods are used to invoke the function directly by passing the object as an argument

let mainPlane = {
    airLine: "Air India",
    flightNumber: 123,
    bookings : [],
    book: function (passengerName, passengerFlightNumber) {
        console.log(`${passengerName} booked a seat on ${this.airLine} flight ${this.flightNumber}`);
        this.bookings.push({passengerName, passengerFlightNumber});
    }
}
mainPlane.book("Monami", 123);
console.log(mainPlane.bookings)

let childPlane = {
    airLine: "Indigo",
    flightNumber: 456,
    bookings : []
}
let bookTicket = mainPlane.book();
// bookTicket.book("Shubham", 456); // Error: Cannot read property 'push' of undefined
bookTicket.call(childPlane, "Shubham", 456);

//Why we use the call() method?
//Ans = Because we want to use the book() method of mainPlane object in childPlane object

// Apply() method  = same as call() method but the only difference is that
//                    we pass the arguments in the form of array

let bookTicket1 = mainPlane.book();
bookTicket1.apply(childPlane, ["Shubham", 456]);

//********************************************************************************************************
// MOST IMPORTANT FOR REACT.JS
// bind() method  = same as call() method but the only difference is that it doesn't invoke the function
// bind() method is used to create the copy of the function and store it in the variable
function greetings(){
    console.log(`Hello, ${this.name}`);
}
let greet = greetings.bind({name: "Shubham"});

//********************************************************************************************************
//pass by value
let arr= [1,2,3,4,5];
 let getValue = [...arr]; // pass by value all values of arr copied to getValue
getValue[1]=  21;

console.log("Arr Value :"+ arr); // [1,2,3,4,5]
console.log("get Value :"+ getValue); // [1,21,3,4,5]


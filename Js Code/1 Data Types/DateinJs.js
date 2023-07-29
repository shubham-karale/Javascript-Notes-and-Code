// In these flie we learn about Date in javascript
let today = new Date();
console.log(today);
console.log(typeof today);// Type is Object

console.log(today.toString()); //Date is in string format

console.log(today.toLocaleString()); //Date is in local format output = 1/1/2021, 12:00:00 AM

console.log(today.getFullYear()); //Gets the year  output = 2021

console.log(today.getMonth()); //Gets the month output = 0

console.log(today.getDate()); //Gets the date output = 1

console.log(today.getDay()); //Gets the day

console.log(today.getHours()); //Gets the hours

console.log(today.getMinutes()); //Gets the minutes

console.log(today.getSeconds()); //Gets the seconds

console.log(today.getMilliseconds()); //Gets the milliseconds

console.log(today.getTime()); //Gets the time

console.log(today.getTimezoneOffset()); //Gets the timezone offset

console.log(today.getUTCFullYear()); //Gets the UTC full year

console.log(Date.now()); //Gets the time

//How to convert time into milliseconds

/*
  InterView Questions
 */
console.log(Math.floor(Date.now() / 1000)); //Gets the time in seconds

console.log(`Today's date is ${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`);

let newDate = new Date(2021, 1, 1, 12, 30, 30, 30);
console.log(newDate);

console.log(newDate.toLocaleString('default', {month: 'long'}, {day: 'numeric'}, {year: 'numeric'}));

//Time Elapsed
// Using Date objects
const start1 = Date.now(); //

// The event to time goes here:
const start = new Date();
// doSomethingForALongTime();
const end = new Date();
const elapsed = end - start; // elapsed time in milliseconds
console.log(elapsed);

const difftime = end.getTime() - start.getTime();
console.log(difftime);
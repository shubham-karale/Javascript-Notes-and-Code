// Variables in Javascipt
const userId = 555;
let userName = 'John';
let pasword = "sdqd33vjkv@";
var captcha = 85995;

// Prefer Not to use var keyword because it is not block scoped, and it is function scoped
// userId = 565;
console.log(userName, userId, pasword, captcha);
// By Using console.table() we can print the values in table format
console.table([userName, userId, pasword, captcha])
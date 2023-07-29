let userName = []
if(userName.length===0)
{
    console.log("No User");
}
else{
    console.log("User is there");
}
//Empty 5 Objects
let user = {name:"shubham"};
 if (Object.keys(user).length===0)
{
    console.log("No User");
}
else{
    console.log("User is there")
}
//---------------------------------------------------------------------------------------------------------
//Important Points
/*
  false == 0 = true
    false == "" = true
    false == undefined = true
    false == null = true
    false == NaN = true
    0 == "" = true
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* Ternary Operators
     Syntax: condition ? true : false

 */
let age = 29;
 age > 18 ? console.log("You can vote") : console.log("You can't vote");

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
  Nullish Coalescing Operator (??)
    It is used to check the null or undefined values
 */
let val1 = 10 ?? 20;
let val2 = null ?? 30;
let val3 = undefined ?? 90; //
let vale4 = 0 ?? 97; //0 is not null or undefined so it will return 0
let val5 = null ?? 50 ?? 100; //it will return 50 because it is the first non-null value
console.log(val1); //10
console.log(val2); //
console.log(val3);
console.log(vale4);
console.log(val5);

//

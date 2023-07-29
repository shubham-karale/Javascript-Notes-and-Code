//Scopes 2
// Compare this snippet from Notes JS\Chap 4 3 Functions\ScopeesInFunctions.js:
/*
  In nested functions, child function can access the variables of parent function
  but parent function can't access the variables of child function
 */
function one(){
   let name = "Shubham";
    function two(){
      const website = "chatgpt and google bard";
        console.log(name);
    }

    // console.log(website); // It will give error because website is not defined in this scope
    two(); // It will print the name because it is defined in the outer scope
}

one();

//---------------------------------------------------------------------------------------------

if(true)
{
    let name = "Hrishi";
    if(name==="Hrishi")
    {
        let website  = "google bard";
        console.log(`Hello ${name}, Welcome to ${website}`);
    }
   // console.log(`Hello ${name}, Welcome to ${website}`);
    // It will give error because website is not defined in this scope
}
//console.log(`Hello ${name}, Welcome to ${website}`);
// It will give error because NAME & website is not defined in this scope


//--------------------------------------------------------------------------------------------------
/* +++++++++++++++++++++++++++++++++INTRESTING POINTS+++++++++++++++++++++++++++++++++++++++++++++++
    1) In nested functions, child function can access the variables of parent function
 */
/*

 */
console.log(addOne(5)) // output = 6
function addOne(value)
{
    return value+1;
}

//Remenber the below function is not a function it is a variable
addTwo(5); // output = error because of HOISTING concept
let addTwo = function  (value)
{
    return value+2;
}
//    Why second funnction call gave an error ?
//    Ans = The second statement gives an error because the variable addTwo is not defined yet.
//    This is because variables declared with const are not hoisted.
// When you declare a variable with const,
// the variable is not actually created until the line of code is executed.
//  This is different from variables declared with var, which are created when the function is entered.
// In this case, the variable addTwo is not created until
// the line of code const addTwo = function (value) { ... } is executed.
//  However, the line of code addTwo(5); tries to access the variable addTwo before it is created.
//  This is why the code gives an error.
// To fix this error,
//  you can move the line of code const addTwo = function (value) { ... } to the top of the function.
//  This will ensure that the variable addTwo is created before it is used.

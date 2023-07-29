//3 Functions
//write definition of function
/*
function name(parameters){
    //body of function
    //return statement
}
 */
function addTwoNum(num1,num2)
{
    console.log("The Sum of Two Numbers is: ",num1+num2);
}
//call the function
//addTwoNum = function refernce
//addTwoNum() = function call
addTwoNum(10,20); // 10,20 = arguments while num1 and num2 are parameters

//function can be stored in a variable = Anonymous Function
let sum = function(n1,n2){
    console.log("The Sum of Two Numbers is: ",n1+n2);
}
console.log(sum);
//While storing function in a variable we have to return the value

function sum1 (n1,n2){
    let res = n1 + n2;
    return res;
    // console.log(n1+n2) prints the ans but return the undefined values

}
let ans = sum1(5,55);
console.log(ans)


//---------------------------------------------------------------------------------------------
//Important Points
/*
When you write the return statments the expression below return statements does not execute
 */

// Why do return statement don't print the value?
// Ans = Because return statement is used to return the value to the function call
function substract(n1,n2)
{
    return n1-n2;
}
substract(5,9);

console.log(substract(5,9));
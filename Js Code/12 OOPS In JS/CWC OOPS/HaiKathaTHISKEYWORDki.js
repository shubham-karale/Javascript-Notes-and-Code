/* Settting User name */
// WHAT IS BIND KEYWORD IN JS ?
// ANS = Bind keyword is used to bind the this keyword to the function.
// EXPLAIN THE BIND  KEYWORD IN DETAILED MANNER ?
// ANS = Bind keyword is used to bind the this keyword to the function. 
function setUserName(username)
{
    this.username = username;
}
// this will not call username beacuse it is just function reference despite paranthesis
/*
1) What the happen is that in the without call method with executing of the setUserName it remove the all the references and variables remove from the callstack so to hold the reference of the function we use the .call() methods
2) Despite bind method the username will not passed to the createUserName function b?ecause the this.username =
 username refernce to the current function scope
3) to make the this keyword work in createUserName you have to give your  own this keyword reference while in the function call of (ie means createUserName this reference) so we pass the this reference in the setUserName While calling
*/
function createUserName(username,email,password)
{
    setUserName(username)
    // setUserName.call(this,username);
    // this.username = username;
    this.email = email;
    this.password = password;
}

// setUserName("Rakshit");
console.log('Hello World');

const user1 = new createUserName("Rakshit","abc123@gmail.com","Bk5EID846^Z^");

console.log(user1);

// We Learn About Chap 3 5 Objects in these files
/*
    Creation Of Chap 3 5 Objects are two types 1) Object Literal 2) Object Constructor
    By Using Object Literal We can create only one object
    By Using Object Constructor We can create multiple objects
    Object Literal = 1) Chap 3 5 Objects created using object literal
                    Since these are singletons, a change to an object persists throughout the script.
                     A change in one instance will affect all the instances of the object.
                        This is because the object is not being copied, it is only a reference to the object.
  // 2) Chap 3 5 Objects created using object constructor = Chap 3 5 Objects created using object constructor
      Object defined with a function constructor lets you have multiple instances of that object.
       This means change made to one instance, will not affect other instances.

 */
/*
  How to use symbol as a key in the Objects?
  Ans = We can use symbol as a key in the Objects by using the square brackets.
    Example = const a = Symbol("a");
                [a]:"hello"
 */
let mysym = Symbol("abcd");
const userName = {
    name:"Monami",
    lastName:"Mahajan",
    age:24,
    city:"Mumbai",
    email:"monamimahajan200@gmail.com"
    // mysym:"hello",
    // [mysym]:"hello"
}
console.log(userName.mysym);
console.log(typeof userName.mysym);
console.log(userName[mysym]);
console.log(typeof userName[mysym]);
//How to access the Object
/*
      1) Dot Notation = userName.name
      2) Bracket Notation = userName["name"] It is beneficial when we have to access the property dynamically
 */
//How to change the value of the Object
userName.email = "monu20@gmail.com"
console.log(userName.email);

userName.greetings = function(){
    console.log("Hello World");
}

console.log(userName.greetings); // function return back
console.log(userName.greetings()); // Prints the output of the function
/*
  this keyword = It is used to access the property of the object
     reference to the current object
 */
userName.greetings2 = function()
{
    console.log(`Good Morning, ${this.name}, How're You doing Now`);
}
console.log(userName.greetings2());
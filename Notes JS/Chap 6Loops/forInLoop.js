// For in Loop
// The for in loop is used to loop through an object's properties.
/*
Syntax : for (variable in object) {
    // code block to be executed
}
Exmaple : for(const key in object){
    console.log(key);
}
 */

const myobj = {
    js: "Javascript",
    py: "Python",
    rb: "Ruby",
    java: "Java",
    c: "C",
    cpp: "C++",
    cs: "C#",
    kt: "Kotlin",
}
for (const key in myobj){   // myobj[key] = value
    console.log(`Key is ${key} and value is ${myobj[key]}`);
}

//for in loop is used to iterate over the object
// for in loop also used to iterate over the array
//but it diretly print the keys of the arrays

const arr = [1,2,3,4,5,6,7,8,9,10];
for(const key in arr){
    console.log(key); // key  = index
}
for (const key in arr){
    console.log(arr[key]); // arr[key] = value
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
  FOR IN LOOP CAN'T BE USED ON MAP AS MAP IS NOT ITERABLE
  const map = new Map(); // key value pair
map.set("MH","Mumbai");
map.set("GJ","Gandhinagar");
map.set("RJ","Jaipur");
map.set("MP","Bhopal");
map.set("UP","Lucknow");
map.set("UK","Dehradun");
map.set("HR","Chandigarh");
map.set("PB","Chandigarh");
map.set("MP","Bhopal");       // Map doesn't allow duplicate keys
for (const key in map){
    console.log(key);  // DOESN'T WORK / DOESN'T PRINT ANYTHING
}
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
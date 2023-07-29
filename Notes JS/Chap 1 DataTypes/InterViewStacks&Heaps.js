/*
  Stack Memory used for the primitive  Data Types
  Heap Memory used for the Non-Primitive  Data Types
  When Memory is allocated for the primitive data types it makes copy of the value
   and stores it in the stack memory
   When Memory is allocated for the Non-Primitive data types it makes copy of the reference
   Reference means if we change the reference it will change the value of the variables
   In Heap Memory we get refernce of original Values
 */
let name = "Shubham";
let new_name = name; // As in stack make the copy of the value it re assigns it
new_name = "Arnav"
console.log(name);
console.log(new_name);


// In Heap Memory we get refernce of original Values
let user1 = {
    name: "John",
    age: 30,
    city: "New York"
};
let user2 = user1;
user1.name = "Monami";
user1.age = 25;

console.log(user1);
console.log(user2);

// What happened above As in heap memory it make refernce of original value
// By Re assigning variable user1 we changed the original value of user2
// Means any changes in user2 directly affected to user1
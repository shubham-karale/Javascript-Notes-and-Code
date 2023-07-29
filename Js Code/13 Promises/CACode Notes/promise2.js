// Creating Promise without using Variables
new Promise((resolve, reject)=>{
    setTimeout(() =>{
        console.log("Promise is Running")
        resolve(69);
    },2000)
}).then(()=>{
    console.log("Promise is Resolved");
}).catch(()=>{
    console.log("Promise is Rejected");
})

//**************************************************************************************************************************************************************************************
// Path: Js Code\13 Promises\CACode Notes\promise3.js

let promise1 = new Promise(function (resolve, reject)
{
    setTimeout(function()
    {
        console.log("Promise is Running");
        resolve({name: "Saksham", email: "riya200@gmail.com"});
    },1000)

})

promise1.then(function(user){
    console.log(user);
})

const promise2 = new Promise(function(resolve, reject) {
      setTimeout(function ()
      {
          let error= true;
          if (!error) {
              resolve({username: "javascript", password: "123"})
          } else {
              reject('ERROR: JS went wrong')
          }
      }, 1000)
});

promise2.then(function(user)
{
    console.log(user);
    return user.username;
}).then(function(username)
{
    console.log(`Username is ${username}`);
}).catch(function(error)
{
    console.log(error);
}).finally(()=>{
    console.log("Finally is Executed: Promise is resolved or rejected")})

// finally = It is used to execute the code whether the promise is resolved or rejected.

//**************************************************************************************************************************************************************************************

let promise3 = new Promise(function(resolve, reject)
{
    setTimeout(function ()
    {
        let error= true;
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

 async function getPromiseData(){
    try{
        const user = await promise3;
        console.log(user);
    }catch(error){
        console.log(error + " DJ ERROR");
    }
 }
getPromiseData();// It will give the same output as promise2.js

//**************************************************************************************************************************************************************************************
// METHOD 1 USING ASYNC AWAIT FUNCTION
// async function getAllUserData()
// {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.table(data);
//     }
//     catch{
//         console.log("Error: Something went wrong");
//     }
// }
//
// getAllUserData();
// METHOD 2 USING THEN METHOD
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{return response.json()}).then((data)=>{
    console.log(data);
})
.catch((error)=>{console.log(error)})
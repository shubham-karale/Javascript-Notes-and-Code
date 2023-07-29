// ARROW FUNCTION EXAMPLES
/*
     1) Agar Object ke andar the function keyword leke function banate ho toh usme this keyword object ko point karta hai
     2) Alone this a global Object Hoga
     3) agar event ke andar this keyword use karte ho toh usko point karta hai jisne event ko receive kiya hai
   */
const obj  = {
    name: 'Billy',
    role: "JS Developer",
    experience:10,
    age:26,
    show: function(){
        console.log(`Inside Show Function  =  
        Name: ${this.name} Role: ${this.role} Experience: ${this.experience} Age: ${this.age}`);

        setTimeout(function(){
            console.log(`Inside SetTimeout Function  =  
            Name: ${this.name} Role: ${this.role} Experience: ${this.experience} Age: ${this.age}`);
            // Here this is not pointing to the object
        },2000)

        setTimeout(() => {
            console.log(`Inside Arrow Function  =  
            Name: ${this.name} Role: ${this.role} Experience: ${this.experience} Age: ${this.age}`);
            // Here this is pointing to the object
        })
    }
}

obj.show()
const obj = {
    username: "javascript",
    password: "123",
    login: function () {
        console.log(`UserName is ${this.username}`);  // It will give error because username is not defined. you have to
        // tell that which username you wanna access
        console.log(this); // It will give the whole object
    }
}
console.log(obj.login());//

// this keyword is used to access the object properties and methods.

//**************************************************************************************************************************************************************************************

/// Constructor Function

// Constructor Function is used to create the multiple objects with same properties and methods.

        function User(username, password)
        {
            this.username = username;
            this.password = password;

            return this // It will return the object
        }

        let vishal = new User("vishal", "123");
        let dj = new User("dj", "123");
        console.log(vishal);
        console.log(dj);
        // Importance of the new keyword
        let userOne = User("Riya", "123");
        let userTwo = User("Ramya", "456");

          console.log(userOne); //userTwo value Overrides the value of userOne

        /*
            What is the 'new' keyword?
            Ans = new keyword is constructor functions = new keyword create new context for the new objects
         */
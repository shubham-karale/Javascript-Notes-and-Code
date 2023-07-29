// Utility Fuctions
class User {
    name
    age
    static id = 1;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = User.id++;
    }
    static compareAge(user1,user2)
    {
        return user1.age-user2.age;
    }
}

let ram = new User("Ram", 25);
let mike = new User("Mike", 30);
let monika = new User(
    "Monika", 35
)
let userArr = [ram, mike,monika];
console.table(userArr.sort(User.compareAge));

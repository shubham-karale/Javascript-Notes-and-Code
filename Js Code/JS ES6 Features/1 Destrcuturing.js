// Destructurtion is a way to extract data from array or object and assign them to variables

let arr = [1,2,3,4,5,6,7];
let [a,b,c,d,e,f,g] = arr;
console.log(a,b,c,d,e,f,g);

//********************************************************************************************************************* */

// Swaooing of two numbers using destructuring

let num1=  95;
let num2 = 62;
[num1,num2] = [num2,num1];
console.log(num1,num2);

// Destructuring in nested arrays
let nums = [1,2,[3,4],5,6,7,8,9,10]
let [a1, ,b1] = nums;
console.log(a1,b1)  // 1 [3,4]

//Destrcuturing in nested arrays to handle the individual elements

let [a2, , [b2,c2]] = nums;
console.log(a2,b2,c2)  // 1 3 4


// Destructring in objects


let TajHotel = {
    name: "Taj Hotel",
    city: "Hyderabad",
    rating: 5,
    rooms: 200,
    roomsBooked: 150,
    roomsAvailable: 50
}

let {name,city,rating,rooms,roomsBooked,roomsAvailable} = TajHotel;
console.log(name,city,rating,rooms,roomsBooked,roomsAvailable);

// custom names for the variables
let {name:hotelName,city:hotelCity,rating:hotelRating,rooms:hotelRooms,roomsBooked:hotelRoomsBooked,roomsAvailable:hotelRoomsAvailable} = TajHotel;

console.log(hotelName,hotelCity,hotelRating,hotelRooms,hotelRoomsBooked,hotelRoomsAvailable);//Taj Hotel Hyderabad 5 200 150 50

// Destructuring in nested objects
// USA HOTELS

let USAHotels = {
    name: "USA Hotels",
    city: "New York",
    rating: 4,
    rooms: 100,
    roomsBooked: 50,
    roomsAvailable: 50,
    address: {
        street: "Wall Street",
        pincode: 10005,
        state: "New York",
        country: "USA",
        isAvailable: true
    }
}


// Filter Operation in Javascript
/*
    Filter Operation in Javascript
        The filter() method creates a new array with all elements
         that pass the test implemented by the provided function.
         Syntax : array.filter(function(currentValue, index, arr), thisValue)
 */
// Filter Function returns the Values unlike the forEach function
let num = [1,2,3,4,5,6,7,8,9,10];
let even = num.filter( (ele) => ele % 2 == 0)
console.log(even);

const odd = num.filter((ele) =>
{
    return ele % 2 != 0;  // When you write curly braces you have to write return keyword = Explicit Return
});

//Print the even numbers using for each loop
let ans = [];
num.forEach( (ele) =>{
    if(ele % 2 == 0){
        ans.push(ele);
    }
})

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Real Example of filter function on database user fetching Values of books of genre "Fiction"
const books = [{
    title: "The Alchemist",
    genere: "Fiction",
    rating: 4.5,
    publish:1990,
    edition: 1,
},{
    title: "Rich Dad Poor Dad",
    genere: "Self Help",
    rating: 4.8,
    publish:1997,
    edition: 1,
},{
    title: "The Monk who sold his Ferrari",
    genere: "Self Help",
    rating: 4.7,
    publish:1995,
    edition: 1,

},{
    title: "The Power of Subconscious Mind",
    genere: "Self Help",
    rating: 4.6,
    publish:1998,
    edition: 1,
},{
    title: "The Power of Now",
    genere: "Fiction",
    rating: 4.9,
    publish:1999,
    edition: 1,
},{
    title: "The Secret",
    genere: "Fiction",
    rating: 4.9,
    publish:2000,
    edition: 1,
},{
    title: "The 5 AM Club",
    genere: "Self Help",
    rating: 4.9,
    publish:2001,
    edition: 1,

},{
    title: "India",
    genre: "History",
    rating: 4.9,
    publish:2002,
    edition: 1,
},{
    title: "The Discovery of India",
    genre: "History",
    rating: 4.9,
    publish:2003,
    edition: 1,

},{
    title: "The Story of My Life",
    genre: "Autobiography",
    rating: 4.9,
    publish:2004,
    edition: 1,

},{
    title: "Wings of Fire",
    genre: "Autobiography",
    rating: 4.9,
    publish:2005,
    edition: 1,

}];

const fic_books = books.filter( (book) => book.genre ==='Autobiography');
console.log(fic_books)
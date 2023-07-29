// Array Methos

//Sort() = sort array
let strArray = ['i','a','b','c','d','e','f','g','h','j'];
console.log(strArray.sort()); // ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

let nums = [-1,-22,-33,8,-45,89,95,64,56,32,-26];
console.log(nums.sort()); // [-1, -22, -26, -33, -45, 32, 56, 64, 8, 89, 95] // not correct
//Why? Because sort() method sort the array by converting the elements into strings and then comparing their sequences of UTF-16 code units values.
//Solution for sort()
nums.sort((a,b)=>{
    // Called as Compare function in sort() method
    if(a<b)   // These is the compare function
    {
        return -1; //Keep the Order
    }
    if(a>b)
    {
        return 1; // Any Value greater than 0 = swap the elements
    }

})
console.log(nums); // [-45, -33, -26, -22, -1, 8, 32, 56, 64, 89, 95] // correct
// Ascending Order = a-b
let nums1 = [-1,-22,-33,8,-45,89,95,64,56,32,-26];
nums1.sort((a,b)=>{
    return a-b;
})
console.log(nums1); // [-45, -33, -26, -22, -1, 8, 32, 56, 64, 89, 95] // correct

// Descending Order = b-a
let nums2 = [-1,-22,-33,8,-45,89,95,64,56,32,-26];
nums2.sort((a,b)=>{
    return b-a;
})
console.log(nums2);


// chaining

let nums4 = [1,2,3,4,5,6,7,8,9,10];
let res =  nums4.slice(0,5).splice(2,3);
console.log(res);
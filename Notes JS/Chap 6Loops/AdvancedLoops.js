// Advanced 6 Chap 6Loops in Javascript
/*
    1) for of loop
          Syntax : for (variable of iterable) {
                    // code block to be executed
                    }
                    for(const element of array){
                        console.log(element);
                    }
                    for of loop is used to iterate over the array and objects
 */
const arr = [10,20,30,40,50];
for (const num of arr)
{
    console.log(num)
}
const str = "Shubham";
for(const strEle of str)
{
    if(strEle==='b')
    {
        continue;
    }
    if(strEle==='a') break;
    console.log(strEle.toUpperCase());
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
  B) Map in Javascript
           Map is a collection of elements where each element is stored as a key value pair
              Syntax : let map = new Map(); // Object
                          map.set(key,value);
                            map.get(key);
                            map.has(key);
                            map.delete(key);
                            map.clear();
                            map.size();
                            map.keys();
                            map.values();
                            map.entries();


//+++++++++++++++++++++++++++++++++MAP IS NOT ITERABLE+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

/*2) for in loop
 Syntax : for (variable in object) {
      // code block to be executed
           }

    for(const key in object){

        console.log(key);

    }

    for(const key in object){

        console.log(object[key])
            } */
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
console.log(map);

//Map using for of loop
for(const key of map)
{
    console.log(key); // print the all key and value in one arrays
}

// to avoid printing key and value in one array we use destructuring
// destructuring is used to unpack the values from the array or properties from the object
//for(const [key,value] of map)

for(const [key,value] of map){
    console.log(key,' :- ',value);
}

// Object can't be iterated using for of loop
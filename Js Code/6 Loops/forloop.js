//for loop
// Syntax : for(initialization;condition;increment/decrement)
// ctrl + d = duplicate
// ctrl + shift + l = select all the same words

for(let index = 0; index<= 10; index++)

{
    if(index==5) {
        console.log("Five"); // First will run these loop

    }
    console.log(index); // then these will print the value

}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(i + " "+j);
    }
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 for (let i = 0; i <= 10; i++) {
     console.log(`Outer Loop : ${i}`);
     for (let j = 0; j <= 5; j++) {
         console.log(i+ "x" +j+ "=" +i*j);
     }
 }

 let superhero = ["Ironman","Captain America","Thor","Hulk","Black Widow","Hawkeye"];
for (let i = 0; i < superhero.length; i++) {
    console.log(superhero[i]);
}
// suppose you don't add i++ so the only first values will run infinite times

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 // Break and continue
    // Break : It is used to break the loop
    // Continue : It is used to skip the current iteration

    for (let i = 0; i < 10; i++) {
        if(i==5){
            break; // loop will break at 5
        }
        console.log(i);
    }
    //continue
    for (let i = 0; i < 10; i++) {
        if(i==5){
            continue;  // 5 will be missing
        }
        console.log(i);
    }
console.log("Hello JS");
let score = "55";
console.log(typeof score);
// Convert String to Number
num_score = Number(score);
console.log(typeof num_score);


console.log(typeof score1);
let score_NAN = Number(score1);
console.log(typeof score_NAN);
console.log(score_NAN)



console.log((3+4) * 5 % 3);

console.log(null > 0); //op = false
console.log(null == 0); // op = false
console.log(null >= 0); // op = true

/*
 Why  1 and 2 are false but the 3rd statement are true?
  Ans = Reason is that null is a special value in JavaScript that represents nothingness.
     and it's nature when we use comparison operator it will convert null to 0.
     when we use equality operator it will not convert null to 0.
 */
/*
  === Denotes Strict check which means it not only check the value but also check data type of that Value
 */
num1 = "32";
num2 = 32;
console.log(num1 == num2); // op = true
console.log(num1===num2)
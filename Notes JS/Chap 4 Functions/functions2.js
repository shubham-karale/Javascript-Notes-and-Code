//REST Operator ... =
//All Values passes by REST Operator will be stored in an array
function calculateKartPrice(...items){
    return items;
}

console.log(calculateKartPrice(100,200,300,400,500,600,700,800,900,1000));

//What is the op of following code?
function calculateValue(val1,val2,val3,...items){
    return items;
}

console.log(calculateValue(100,200,300,400,500,600,700,800,900,1000));
//val1 = 100 val2 = 200 val3 = 300 [400,500,600,700,800,900,1000]


// Function in 5 Objects
const user = {
    userName: "Ramya Krishnan",
    price:2000,
    cashCredit:8000

}

function calculatePrice(anyobject)
{
    console.log(`The UserName is ${anyobject.userName} and the kart price is ${anyobject.price} 
    and the cash credit is ${anyobject.credit}`);
}
//credit is not defined so the value will be undefined
calculatePrice(user);
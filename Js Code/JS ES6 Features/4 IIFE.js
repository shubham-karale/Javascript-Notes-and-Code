// Example of IIFE

/*
   What is IIFE as per mdn docs
    IIFE = Immediately Invoked Function Expression
    It is a function that runs as soon as it is defined
    IIFE doesn't pollute global name space
    Syntax
    (function () {
        // statements
    })();
    or
    (function () {
        // statements
    }());
 */

let res = (function () {
    let orders = [];
    let addtoKart = function (product,quantity)
    {
        orders.push({product,quantity});
        console.log(`${quantity} ${product} added to the kart`);
    }
    return {
        orders,
        addtoKart
    }
}());

res.addtoKart("Apple",2);
res.addtoKart("Orange",3);
res.addtoKart("Banana",4);
res.addtoKart("Grapes",5);
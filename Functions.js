function greet(name) // here name is a placeholder 
{
   console.log(`hello ${name}`);
}
// greet("rohit") // here rohit is an argument 

// examples

/* eg1 make a function with the name of makecoffee and it takes one parameter "typeofcoffee" and returns a string "making coffee" when called with blackcoffee , store the result in a variable coffeeorder  */

function makecoffee(typeofcoffee){
    return `making ${typeofcoffee}.`;
}

var coffeeorder = makecoffee("black coffee")
// console.log(coffeeorder);


/* eg2 create a finction named 'orderCoffee' that takes one parameter, coffeetype . inside this function creat an another functon named confirmedOrder that returns a message "order confirmed for coffee". 
call confirmedOrder from within 'orderCoffee' and return the result */

function orderCoffee(coffeetype){
    function confirmedOrder(){
        return `order confirmed for ${coffeetype}`;
    }
    return confirmedOrder();
}

let orderconfirmation = orderCoffee("black coffee")

console.log(orderconfirmation);


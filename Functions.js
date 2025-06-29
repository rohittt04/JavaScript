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

// console.log(orderconfirmation);

// arrow functions

/* eg 3 write an arrow function 'calculate total' that takes two parameters : 'price' and 'quantity'. the function should return the total cost by multiplying the 'price' and 'quantity' 
store the result ina variable named 'totalcost' */

const calculatetotal = (price , quantity ) => {
     return price * quantity;
}
let totalcost = calculatetotal(300,5);
// console.log(totalcost);


// another type which is called implecit returns is :

const calculatetotal2 = (price , quantity ) =>  price * quantity;
let totalcost2 = calculatetotal2(3,44);
// console.log(totalcost2);



// Higher order functions 

/* eg 4 write an function named 'processCoffeeOrder' that takes another function, 'makeCoffee', as a parameter and calls it with the argument '"latee"'.  
return the result of makincoffee */


function makeCoffee(typeofcoffee){
    return `making ${typeofcoffee}`
   } 

function processCoffeeOrder(CoffeeFunction){
   return CoffeeFunction("latee")
}
let order = processCoffeeOrder(makeCoffee)
console.log(order);

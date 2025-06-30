// protypes in javascript

let dell = {
    screen : "HD"
}

let lenevo = {
    screen : "LED",
    __proto__ : dell
}

// console.log(`dell`, dell.__proto__); // to acces proto types "__proto",here the output will be "dell [Object: null prototype] {}"
// console.log(`lenevo`, lenevo.__proto__); // now we can also acces the dell but here the output  is "lenevo { screen: 'HD' }" because we are ejecting it manually , these are custom properties


// another example 

let car = {
    tyres : 4
};

let tesla= {
    drives : "AI"
};

Object.setPrototypeOf(tesla , car);

console.log(`tesla`, car); //the output will be tesla "{ tyres: 4 }"

console.log(`tesla`, tesla.tyres); // the output is "tesla 4"

// another good  way is y

console.log(`tesla`,Object.getPrototypeOf(tesla)); //the same output will be tesla "{ tyres: 4 }"

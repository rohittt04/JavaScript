// challenge 1 print the first element from array
let teaFlavours = ["green tea", "black tea", "oolong tea"]
const firsttea = teaFlavours[0]
// console.log(firsttea);


//challenge 2 
let cities = ["London", "tokyo", "paris", "new york"]
const favortecity = cities[2]
// console.log(favortecity)


// challenge 3 cahnging the last elemet from the array
let teatype = ["Herbal tea ", "white tea", "Masala chai"]
teatype[2] = "jasmin tea"
// console.log(teatype);


// challenge 4 adding element in array
let citiesvisited = ["Mumbai", "sydney"]
// citiesvisited[2] = "berlin" # Another method 
citiesvisited.push("berlin")
// console.log(citiesvisited);


// challene 5
let teaOrders = ["iced tea", "matcha", "earl gray"]
const lastOrder = teaOrders.pop()
// console.log(lastOrder)


// challenge 6 makig soft copy of an array
let populertea  = ["green tea", "black tea", "masala chai", "oolong tea"]
let softpopulertea = populertea
// console.log(populertea);
// console.log(softpopulertea);
// // example how it is a soft copy
// populertea.pop()
// console.log(populertea);
// console.log(softpopulertea);


// challenge 7 making an hard copy of an array

let topcities = ["berlin", "new york", "singapur"]
let hardcopycities = [...topcities]; // # here '...' creates a hard copy 
// let hardcopycities = topcities.slice() // # another method
topcities.pop()
// console.log(topcities);
// console.log(hardcopycities);


// challenge 8 merge array

let europiancities = ["paris", "rome"]
let asianiancities = ["Tokiyo", "bangkok"]
let worldcities = europiancities.concat(asianiancities)
// console.log(worldcities);

// challene 9 chek is element is in the list or not

let bucketlist = ["London", "Tokiyo", "newyork"]
let isInList = bucketlist.includes("London")
console.log(isInList);




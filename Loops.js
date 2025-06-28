// simple tasks 
// while loop
// example 1
let sum = 0;
let i = 1;
while (i <= 5) {
    sum = sum + i;
    i++;
}
// console.log(sum);


// example 2 store number in array from 5 to 1 
let countdown = [];
let j = 5;
while (j > 0) {
    countdown.push(j);
    j--;
}
// console.log(countdown);


// Do-While Loop

// example 3 take user input until user says stop
let teaCollection = [];
let tea;
// do {
//     tea = prompt(`Enter your favourate tea name (type "stop" to finish): `)
//     if (tea !== "stop")
//         teaCollection.push(tea)

// } while (tea !== "stop");

//example 4 make a array [2,4,6] now run a for loop that multiplies each element of array Number with 2 and store them into another array  multipliednumber 
let multipliedNumber = [];
let Number = [2, 4, 6]; 
for (let l = 0; l < Number.length; l++) {
    multipliedNumber.push(Number[l]*2);   
}
// console.log(multipliedNumber);

// example 5 write a "for loop" that lists all the cities in the array["Paris", "New York", "Tokiyo","London"] and stors each city in new array named "cityList"

let cities = ["Paris", "New York", "Tokiyo","London"];
let cityList =[];
for (let c = 0; c < cities.length; c++) {
    const myCity =cities[c];
    cityList.push(myCity);  
} 
console.log(cityList);


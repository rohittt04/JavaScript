// constructer function

function Car(name, color, model){
    this.name = name
    this.color = color;
    this.model = model;
}

// creating an Object / instance
let Mycar = new Car("tata", "black", 2022) 
console.log(Mycar);
// out put will be "Car { name: 'tata', color: 'black', model: 2022 }"

let myNewCar = new Car("totyota", "red", 2025)
console.log(myNewCar);
// out put will be "Car { name: 'totyota', color: 'red', model: 2025 }"

// constructer function

function Car(name, color, model){
    this.name = name;
    this.color = color;
    this.model = model;
}

// creating an Object / instance
let Mycar = new Car("tata", "black", 2022);
// console.log(Mycar);
// out put will be "Car { name: 'tata', color: 'black', model: 2022 }"

let myNewCar = new Car("totyota", "red", 2025);
// console.log(myNewCar);
// out put will be "Car { name: 'totyota', color: 'red', model: 2025 }"

// function in function / nested function

function Tea(type){
    this.type = type;
    this.describe = function () {
        return `here is your cup of ${this.type}`;
        
    }
}

let LemonTea = new Tea("lemon tea")
// console.log(LemonTea.describe());

// Prototypes 

function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
     return `${this.species} makes a sound`
}

let dog = new Animal("dog")
console.log(dog.sound());

let cat = new Animal("cat")
console.log(cat.sound());










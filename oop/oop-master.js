/* let Car = {
    model: 2020,
    color: "black",
    company: "tata",
    start: function () {
        return `${this.company} is started in year ${this.model}`
    },
};
 console.log(Car.start()); // this will throw "tata is started in year 2020" */

function Persion(name, age) {
    this.name = name;
    this.age = age;
}

let vivek = new Persion("vivek", 21)
/* console.log(vivek.age); // this will throw "21" here because i'm accesing it's age here */



// prototype and prototypal-chain

function Animal(type) {
    this.type = type;
}

Animal.prototype.speak = function () {
    return `${this.type} is makes a sound`

}

let dog = new Animal("dog")
// console.log(dog.speak());



// Class

class Vehical {
    constructor(model, make) {
        this.model = model;
        this.make = make;
    }

    start() {
        return `${this.model} has a model  ${this.make} `
    }
}

// inheritance 

class Car extends Vehical {
    drive() {
        return `${this.make} : this is an inharitance example. `;
    }
}

let myCar = new Car("toyota", "hylex")
// console.log(myCar.start());
// console.log(myCar.drive());


//Encapsulation

class BankAccount {
    #Balance = 0; // so frim this "#" no one can access it out side the class but we can access it inside the class

    deposit(amount) {
        this.#Balance += amount;
        return this.#Balance;
    }

    getBalance() {
        return `$ ${this.#Balance}`
    }
}

let account = new BankAccount()
// console.log(account.getBalance());

//Abstraction

class CoffeeMachine {
    start() {
        return `Starting the machine...`;
    }

    brewCoffee() {
        return `Your coffee is brewing...`
    }

    PressStartButton() {
        let msgone = this.start();
        let msgtwo = this.brewCoffee();

        return `${msgone} + ${msgtwo}`

    }
}

let myMachine = new CoffeeMachine();
//  console.log(myMachine.PressStartButton());



//Polymorephysm - same name but different attribute 

class birds {
    fly() {
        return `birds can fly...`;
    }
}

class panguine extends birds {
    fly() {
        return `panguins can not fly...`;
    }
}


let bird = new birds()
let myPanguine = new panguine()

// console.log(bird.fly());
// console.log(myPanguine.fly());
/* so here the out put is birds can fly... and  panguins can not fly... but we are using same attribute ? well that's what is called polymorephysm - in my words "same name different attribute " */


//static method

class Calculator {
    // so static can only called by class 
    static add(a, b) {
        return a + b;
    }
}


// let calc = new Calculator()
// console.log(calc.add(2,3));/* it will throw an error "TypeError: calc.add is not a function " */
//question so how we can acces it now ? 
// console.log(Calculator.add(2, 3)); /* yes we get "answer" */


// Getters and Setters

class Employee {
    #salary;
    constructor(name, salary) {

        if (salary < 0) {
            throw new Error("salary can not be in nagative");

        }
        this.name = name;
        this.#salary = salary
    }

    get salary() {
        return "you are not allowed to see salary";
    }

    set salary(value) {
        if (value < 0) {
            console.error("Invalid salary")
        } else {
            this._salary = value;
        }
    }
}

let emp = new Employee("rohit", 50000)
// console.log(emp.salary);
emp.salary = 60000;
console.log(emp.salary);


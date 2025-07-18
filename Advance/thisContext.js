const person = {
    name : "rohit",


greet() {
    console.log(`hi my name is ${this.name}`);
    
}
};

person.greet();

const greetFunction = person.greet; // the context is lost here 
greetFunction()

const bindGreet = person.greet.bind({name:"rohan"}) / // to grab context we have to bind it 
bindGreet()
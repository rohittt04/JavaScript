function SayHello() {
    console.log("hello!!");

}

setTimeout(() => {
    // SayHello();
}, 4000)

for (let index = 0; index < 10; index++) {
    // console.log(index);

}

// closures in js
function outer() {
    let counter = 4;
    return function () {
        counter++;
        return counter; // return is the closer here
    };
}

let increment = outer()
console.log(increment());

console.log("Hello World");

function showAlert() {
    alert("helloo cse22!");
}

// array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

// array with multiple data types
let mixedArray = [1, "Hello", true, { name: "Alice" }, [1, 2, 3]];  
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);
console.log(mixedArray.length);  

function greet() {
    console.log("Hello, World!");
}
greet();  // FIX 4

// normal function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));

function divide(a, b) {
    return a / b;
}
console.log(divide(10, 2));

// function expression
let add = function(a, b) {  
    return a + b;
};
console.log(add(5, 7));

// arrow function - no parameters
let sayHi = () => console.log("Hii");
sayHi();

// arrow function - single parameter
let square = x => x * x;
console.log(square(4));

// arrow function - with parameter
const greetUser = (name) => {
    console.log(`Hello, ${name}!`);  
};
greetUser("Alice");

// map on array
let newArray = [1, 2, 3, 4, 5];
let squaredArray = newArray.map((num) => num * num);
console.log(squaredArray);

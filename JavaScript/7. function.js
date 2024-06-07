// Function Declaration:

// 1.
function greet(name) {
    return "Hello, " + name + "!";
}

const message = greet("Emily");
console.log(message); // Output: Hello, Emily!


// 2. Function with Multiple Parameters:
function calculateArea(width, height) {
    return width * height;
}

const area = calculateArea(10, 5);
console.log("Area:", area); // Output: Area: 50



// Function Expression

// 1. Assigning to a variable
const greet = function (name) {
    return "Welcome, " + name;
};

const welcomeMessage = greet("Fred");
console.log(welcomeMessage); // Output: Welcome, Fred

// 2. Passing as an Argument:
function callAnotherFunction(func, name) {
    const message = func(name);
    console.log(message);
}

const greet = function (name) {
    return "Hi, " + name;
};

callAnotherFunction(greet, "George"); // Output: Hi, George


// Arrow Function:

// 1. Single Line with Implicit Return:
const greet = name => "Greetings, " + name;

const greeting = greet("Henry");
console.log(greeting); // Output: Greetings, Henry



// 2. Multiple Lines with Explicit Return:
const calculateVolume = (length, width, height) => {
    const volume = length * width * height;
    return volume;
};

const boxVolume = calculateVolume(5, 4, 3);
console.log("Volume:", boxVolume); // Output: Volume: 60

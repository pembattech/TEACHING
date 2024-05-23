// Variable hoisting with var:
// -------------------------------------------------------------------------------------------
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

// The variable x is hoisted to the top, so the code behaves as if it were written like this:
var x;
console.log(x); // Output: undefined
x = 5;
console.log(x); // Output: 5

// -------------------------------------------------------------------------------------------



// Variable hoisting with let and const:
console.log(y); // Error: Cannot access 'y' before initialization
let y = 10;

// With let and const, the variables are hoisted but not initialized. This creates a "temporal dead zone" from the start of the block until the declaration is encountered, where accessing the variable results in a ReferenceError.

// Function hoisting:

greet(); // Output: "Hello"
function greet() {
  console.log("Hello");
}



// Function declarations are hoisted entirely, meaning the function can be called before its declaration in the code.


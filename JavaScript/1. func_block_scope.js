// Variables declared with var are function-scoped
function myFunction() {
    var message = "Hello";
    console.log(message); // Works
}
console.log(message); // Error: message is not defined
myFunction() 

//   Variables declared with let and const are block-scoped:


console.log(greeting); // Error: greeting is not defined
console.log(name); // Error: name is not defined


//   Variable hoisting with var:
function myFunction() {
    // Function scope (var)
    var x = 10;

    if (true) {
        // Block scope (let)
        let y = 20;
        console.log(x); // Accessible (function scope)
        console.log(y); // Accessible (block scope)
    }

    console.log(x); // Accessible (function scope)
    console.log(y); // ReferenceError: y is not defined (block scope)
}

myFunction();

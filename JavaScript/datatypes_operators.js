// Primitive Data Types

// Numbers
let age = 30;
let pi = 3.14159;

// Strings
let name = "Alice";
let message = 'Hello, world!';

// Boolean
let isLoggedIn = true;
let isNightTime = false;

// Undefined
let uninitializedVar;

// Null
let emptyValue = null;

// Symbol
let uniqueSymbol = Symbol("description"); // Unique identifier
console.log(uniqueSymbol); // Output: Symbol(description) (unique value)

// BigInt
let bigIntNumber = 12345678901234567890n; // BigInt literal
console.log(typeof bigIntNumber); // Output: bigint


// Example of precision between number and bigint
// 9007199254740992 == 9007199254740993

// 9007199254740992n == 9007199254740993n


// ---------------------------------------------------------------------------

// Non-Primitive Data Types

// Object
let person = {
  firstName: "Bob",
  lastName: "Smith",
  age: 40
};

// Array
let fruits = ["apple", "banana", "orange"];

// Function
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Operators

// Arithmetic Operators
let sum = 10 + 5;
let difference = 20 - 7;
let product = 4 * 6;
let quotient = 12 / 3;
let remainder = 11 % 3;

// Comparison Operators
let isEqual = 10 === 10;
let isNotEqual = "hello" != "world";
let isGreaterThan = 7 > 5;
let isLessThanOrEqualTo = 4 <= 4;

// Logical Operators
let isMember = (age >= 18) && isLoggedIn; // AND
let hasAccess = isLoggedIn || isMember; // OR
let isNotAdmin = !isAdmin; // NOT

// Assignment Operators
let x = 5;
x += 3; // x becomes 8
x *= 2; // x becomes 16

// Increment/Decrement Operators
let count = 1;
count++; // Increments count to 2
let points = 10;
points--; // Decrements points to 9

// Postfix increment
let a = 10;
console.log(x++); // 10 (logs the current value of x, then increments)
console.log(x);   // 11 (x is now incremented)

// Prefix increment
let y = 10;
console.log(++y); // 11 (increments first, then logs the updated value)
console.log(y);   // 11 (y remains incremented)

// Postfix decrement
let m = 10;
console.log(m--); // 10 (logs the current value of m, then decrements)
console.log(m);   // 9  (m is now decremented)

// Prefix decrement
let n = 10;
console.log(--n); // 9  (decrements first, then logs the updated value)
console.log(n);   // 9  (n remains decremented)


// String Concatenation Operator
let firstName = "Alice";
let lastName = "Smith";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: Alice Smith

// Condition (Ternary) Operator
let customerAge = 70;
let discount = (customerAge >= 65) ? "10% Senior Discount" : "No Discount";
console.log(discount); // Output: "10% Senior Discount"


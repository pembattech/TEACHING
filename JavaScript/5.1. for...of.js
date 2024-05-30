const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number * 2); // Access the value directly
}

// Iterating over Strings (Characters):
const message = "Hello, world!";

for (const character of message) {
  console.log(character); // Iterates through each letter
}

// Working with Sets:
const fruits = new Set(["apple", "banana", "orange"]);

for (const fruit of fruits) {
  console.log(fruit); // No specific order guaranteed
}


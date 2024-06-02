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

/*
  Contrustor: a constructor is a special type of function used to create and initialize objects.
    It is typically used in conjunction with the new keyword to create instances of an object.
    Constructors are used to set up initial values for object properties and to perform any setup or
    initialization that the object requires.


  Instance: An instance is an individual object created from a constructor function or class.
    It represents a concrete realization of the blueprint defined by the constructor or class.
    Instances have properties and methods defined by the constructor or class and can maintain their
    own state.
*/


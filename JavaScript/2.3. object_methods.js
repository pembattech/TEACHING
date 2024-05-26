// Adding Properties to Objects:
// 1. Dot notation (object.property = value): Creates a new property or modifies an existing one.
const person = { name: "Alice" };
person.age = 30; // Adds the "age" property with value 30

// 2. Bracket notation (object['property'] = value): Similar to dot notation, but useful for creating properties with dynamic names (e.g., from user input).
const options = {};
options["color"] = "red"; // Adds the "color" property with value "red"

// Object.keys(): Returns an array of an object's own enumerable property name
var person = { name: "Alice", age: 30 };
var keys = Object.keys(person);
console.log(keys); // keys: ["name", "age"]

// Object.values(): Returns an array of an object's own enumerable property values.
var person = { name: "Alice", age: 30 };
var values = Object.values(person);
console.log(values); // values: ["Alice", 30]


// for...in loop: Iterates over the enumerable properties of an object.
var person = { name: "Alice", age: 30 };
for (var key in person) {
    console.log(key, person[key]); // Prints each key-value pair
}

// delete object.property: Removes the specified property from an object.
const person = { name: "Alice", age: 30 };
delete person.age; // Removes the "age" property

// For loop

// 1. Printing numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// 2. Iterating through an array
const fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// 3. Looping in reverse order:
for (let i = 10; i >= 1; i--) {
  console.log(i);
}


// 4. Skipping elements:
const num = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < num.length; i += 2) { // Increment by 2 to skip even elements
  console.log(num[i]);
}


// 5. Using a loop to modify an array:
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  numbers[i] *= 2; // Double each element
}

console.log(numbers); // Output: [2, 4, 6, 8, 10]


// 6. Nesting loops:
const rows = 3;
const columns = 4;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    console.log("Row", i + 1, "Column", j + 1);
  }
}


// 7. Using a loop with conditional statements:
const names = ["Alice", "Bob", "Charlie", "David"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Charlie") {
    console.log("Found Charlie at index", i);
    break; // Exit the loop once Charlie is found
  }
}


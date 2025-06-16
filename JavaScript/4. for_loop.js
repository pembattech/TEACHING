// For loop

// 1. Printing numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i); // 1 2 3 4 5
}


// 2. Iterating through an array
const fruits = ["apple", "banana", "orange"];

for (let i = 0; i < 3; i++) {
  console.log(fruits[i]); // apple banana orange
}


// 3. Looping in reverse order:
for (let i = 10; i >= 1; i--) {
  console.log(i);
}


// 4. Skipping elements:
const num = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < num.length; i += 2) { 
  console.log(num[i]);
}


// 5. Using a loop to modify an array:
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  numbers[i] *= 2; // Double each element
}

console.log(numbers); // Output: [2, 4, 6, 8, 10]


// 6. Using a loop with conditional statements:
const names = ["Alice", "Bob", "Charlie", "David"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Charlie") {
    console.log("Found Charlie at index", i);
    break; // Exit the loop once Charlie is found
  }
}


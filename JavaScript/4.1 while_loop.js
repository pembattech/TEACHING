// Counting down from 5
let count = 5;

while (count > 0) {
  console.log(count);
  count--;
}

console.log("Liftoff!");

// Getting a positive number from the user
let num;

while (num <= 0) {
  num = parseFloat(prompt("Enter a positive number:"));
  if (num <= 0) {
    console.error("Please enter a positive number.");
  }
}

console.log("You entered", num);

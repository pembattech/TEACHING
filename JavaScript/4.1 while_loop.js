// 1. Counting down from 5
let count = 5;

while (count > 0) {
  console.log(count);
  count--;
}

console.log("Liftoff!");


// 2. Limit Login Attempts 
let password = "";
const correctPassword = "secret";

let attempts = 0;
while (password !== correctPassword && attempts < 3) {
  password = "wrong";
  console.log("Incorrect password. Try again.");
  attempts++;
}
console.log("Loop ended. Attempts:", attempts);

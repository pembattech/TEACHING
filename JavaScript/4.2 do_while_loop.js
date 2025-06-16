//1. Guessing a number
let guess = 0;
let target = 7;

do {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
} while (guess !== target);

console.log("You guessed it right!");

//2. Rolling a dice until getting a 6
let roll = 0;

do {
  roll = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
  console.log("You rolled a", roll);
} while (roll !== 6);

console.log("You rolled a 6!");

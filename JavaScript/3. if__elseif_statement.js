// if statement

// 1. Checking Product Availability and Price:
let product = "laptop";
let stock = 5;
let price = 800;

if (product === "laptop") {
  if (stock > 0) {
    console.log("Laptops are in stock! Price:", price);
  } else {
    console.log("Laptops are currently out of stock.");
  }
} else {
  console.log("Sorry, we don't sell", product);
}

// else if Statement

// 1. Discount Calculator:
let amount = 100;
let couponCode = "SUMMER20";

if (couponCode === "SUMMER20") {
  let discount = amount * 0.1; // 10% discount
  console.log("You've received a", discount, "discount!");
  console.log("Total payable:", amount - discouknt);
} else if (couponCode === "FALLSALE") {
  let discount = amount * 0.15; // 15% discount
  console.log("You've received a", discount, "discount!");
  console.log("Total payable:", amount - discount);
} else {
  console.log("Invalid coupon code. No discount applied.");
  console.log("Total payable:", amount);
}

// 2. Age Verification and Movie Rating System
let age = 17;
let movieRating = "PG-13";

if (age >= 18) {
  console.log("You are allowed to watch any movie rating.");
} else if (age >= 13 && movieRating === "PG-13") {
  console.log("You are allowed to watch this PG-13 movie.");
} else {
  console.log("You are not allowed to watch this movie. Parental guidance is recommended.");
}


// 3. Traffic Light Simulator:
let light = "red";

if (light === "red") {
  console.log("Stop!");
} else if (light === "yellow") {
  console.log("Caution! Light is about to change.");
} else if (light === "green") {
  console.log("Go!");
} else {
  console.log("Invalid traffic light color!");
}


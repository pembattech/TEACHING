// Color Classification with forEach()
const colors = ["red", "green", "blue"];

colors.forEach(function(color, index) {
    console.log("Color at index " + index + " is " + color);
});

// Conditional Processing:
const numbers3 = [1, 2, 3, 4, 5, 6];

numbers3.forEach(function(number) {
    if (number % 2 === 0) {
        console.log(number * 3); // Process only even numbers
    }
});

// Accumulating Values:
const items = [
    { price: 10 },
    { price: 5 },
    { price: 12 },
];

let totalPrice = 0;

items.forEach(function(item) {
    totalPrice += item.price;
});

console.log(totalPrice); // 27 (sum of all prices)


function processEvenNumbers(number) {
    if (number % 2 === 0) {
        console.log(number * 3); // Process only even numbers
    }
}

const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(processEvenNumbers);





// // Color Classification with forEach()
// const colors = ["red", "green", "blue"];

// colors.forEach((color, index) => {
//     console.log(`Color at index ${index} is ${color}`);
// });

// // Conditional Processing:
// const numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach((number) => {
//     if (number % 2 === 0) {
//         console.log(number * 3); // Process only even numbers
//     }
// });

// // Accumulating Values:
// const items = [
//     { price: 10 },
//     { price: 5 },
//     { price: 12 },
// ];

// let totalPrice = 0;

// items.forEach((item) => {
//     totalPrice += item.price;
// });

// console.log(totalPrice); // 27 (sum of all prices)

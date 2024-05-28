// push(): Appends one or more elements to the end of an array and returns the new length.
const fruits = ["apple", "banana"];
fruits.push("orange"); // fruits: ["apple", "banana", "orange"]

// unshift(): Inserts elements at the beginning of an array and returns the new length.
const numbers1 = [2, 3, 4];
numbers1.unshift(1); // numbers: [1, 2, 3, 4]

// splice() (for adding and inserting): Inserts new elements at a specified index within the existing array and can optionally remove elements.
const colors1 = ["red", "green"];
colors1.splice(1, 0, "blue"); // colors: ["red", "blue", "green"] (inserts "blue" at index 1)

// concat(): Combines multiple arrays into a single new array.
const colors2 = ["red", "green"];
const fruits2 = ["apple", "banana"];
const num2 = [1,2,3]
const combined = fruits2.concat(colors2); // Output: ["red", "green", "apple", "banana"]
const combined1 = colors2.concat(fruits2, num2); // Output: ["red", "green", "apple", "banana", 1, 2, 3]

// Deleting Elements from Arrays:
// 1. pop(): Removes the last element from an array and returns it.
const fruits3 = ["apple", "banana", "orange"];
const removedFruit3 = fruits3.pop(); // removedFruit: "orange"; fruits: ["apple", "banana"]

// shift(): Removes the first element from an array and returns it.
const numbers3 = [1, 2, 3];
const removedNumber3 = numbers3.shift(); // removedNumber: 1; numbers: [2, 3]

// splice() (for deleting): Removes elements from a specified index within the array (can optionally insert new elements).
const colors3 = ["red", "green", "blue"];
colors3.splice(1, 1); // colors: ["red", "blue"] (removes element at index 1)

// Remove everything from index 1 onwards
fruits.splice(1);
console.log(fruits); // Output: ["apple"]

// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it's not present.
const fruits7 = ["apple", "banana", "orange"];
const orangeIndex3 = fruits7.indexOf("orange"); // orangeIndex: 2

// lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it's not present. Useful for finding duplicate elements.
const fruits4 = ["apple", "banana", "orange", "banana"];
const lastBananaIndex4 = fruits4.lastIndexOf("banana"); // lastBananaIndex: 3

// join(): Converts all elements of an array into a string, separated by a specified separator (default is comma).
const colors4 = ["red", "green", "blue"];
const colorString4 = colors4.join(" "); // colorString: "red, green, blue"

// sort(): Sorts the elements of an array in place according to a comparison function (optional).
const numbers5 = [3, 1, 4, 2];
numbers5.sort(); // numbers: [1, 2, 3, 4] (sorts in ascending order by default)

// reverse(): Reverses the order of the elements in an array in place.
const numbers6 = [1, 2, 3, 4];
numbers6.reverse(); // numbers: [4, 3, 2, 1]


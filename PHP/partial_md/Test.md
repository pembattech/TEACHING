How to Use Associative Arrays in PHP
So far we’ve used arrays with an incremental, numeric index: 0, 1, 2…

You can also use arrays with named indexes (keys), and we call them associative arrays:

$list = ['first' => 'a', 'second' => 'b'];

$list['first'] //'a'
$list['second'] //'b'
We have some functions that are especially useful for associative arrays:

array_key_exists() to check if a key exists in the array
array_keys() to get all the keys from the array
array_values() to get all the values from the array
asort() to sort an associative array by value
arsort() to sort an associative array in descending order by value
ksort() to sort an associative array by key
krsort() to sort an associative array in descending order by key



Sure, here is a presentation on Arrays with map(), filter(), and reduce()

Slide 1
Conquering Arrays with map(), filter(), and reduce()

Image of
Speaker Notes In this presentation, we'll delve into the world of arrays in PHP and explore three powerful functions: map(), filter(), and reduce(). These functions streamline working with arrays, making common operations more efficient and readable. We'll uncover their functionalities, practical applications, and how they can elevate your code. By the end, you'll be equipped to handle arrays with greater ease and confidence.

Slide 2
What are Arrays?

Image of
Arrays are ordered collections of items.
Each item in an array has a unique index (position), starting from 0.
Arrays can store various data types: strings, numbers, booleans, objects, even other arrays (nested arrays).
Speaker Notes Arrays are fundamental data structures in PHP. They allow you to group and manage related data under one variable name. Each element within the array has an index, acting as its identifier within the collection. Arrays offer flexibility by accommodating diverse data types, making them a versatile tool for storing and manipulating information.

Slide 3
map() Function

The map() function applies a callback function to each element of an array.
The callback function takes the current element, its index (optional), and the entire array (optional) as arguments.
map() creates a new array with the transformed elements returned by the callback function.
Speaker Notes The map() function is a powerful tool for transforming elements within an array. It iterates through each element, applies a user-defined callback function, and generates a new array containing the results of those transformations. The callback function has access to the current element, its index, and the entire array, providing flexibility in how you modify the data.

Slide 4
map() Example: Doubling Numbers

PHP
$numbers = [1, 2, 3, 4, 5];

$doubledNumbers = array_map(function($number) {
return $number \* 2;
}, $numbers);

print_r($doubledNumbers); // Output: Array ( [0] => 2 [1] => 4 [2] => 6 [3] => 8 [4] => 10 )
Speaker Notes This example demonstrates how map() can be used to double the values in an array. The callback function simply multiplies each element by 2. The resulting $doubledNumbers array contains the doubled values. map() creates a new array without modifying the original $numbers array.

Slide 5
filter() Function

Image of
The filter() function creates a new array containing elements from the original array that pass a specified test.
The callback function takes the current element, its index (optional), and the entire array (optional) as arguments.
filter() returns only the elements for which the callback function returns true.
Speaker Notes The filter() function is a selective tool. It iterates through the array and creates a new array containing only the elements that satisfy a particular condition defined within the callback function. The callback function receives the current element, its index, and the entire array, allowing you to filter based on various criteria.

Slide 6
filter() Example: Finding Even Numbers

PHP
$numbers = [1, 2, 3, 4, 5, 6];

$evenNumbers = array_filter($numbers, function($number) {
return $number % 2 === 0;
});

print_r($evenNumbers); // Output: Array ( [0]

Sure, here's the continuation of the slide on filtering even numbers and an additional slide on reduce():

Slide 6 (Continued)

filter() Example: Finding Even Numbers

PHP

$numbers = [1, 2, 3, 4, 5, 6];

$evenNumbers = array_filter($numbers, function($number) {

return $number % 2 === 0;

});

print_r($evenNumbers); // Output: Array ( [0] => 2 [1] => 4 [2] => 6 )

Speaker Notes

In this example, the callback function checks if the current $number is even using the modulo operator (%). If the remainder is 0 (even), the function returns true, and the element is included in the filtered $evenNumbers array. This showcases how filter() can be used to create a new array based on specific criteria.

Slide 7

reduce() Function

The reduce() function applies a callback function against an accumulator and each element in an array to reduce it to a single value.

The callback function takes four arguments: the accumulator, the current element, the current index (optional), and the entire array (optional).

The accumulator is initialized with a starting value or the first element of the array.

reduce() iterates through the array, applying the callback function to accumulate a single result based on the accumulator and current element.

Speaker Notes

The reduce() function is a powerful tool for condensing an array into a single value. It iterates through the array, applying a user-defined callback function. The callback function operates on the current element and an accumulator variable, accumulating the result into a single value. This can be used for various calculations, like summing elements, finding a minimum or maximum value, or creating a custom data structure.

Slide 8 (Optional)

reduce() Example: Summing Numbers

PHP

$numbers = [1, 2, 3, 4, 5];

$sum = array_reduce($numbers, function($accumulator, $number) {

return $accumulator + $number;

}, 0); // Initial value for accumulator (optional)

echo "The sum of the numbers is: $sum"; // Output: The sum of the numbers is: 15

Speaker Notes

This example demonstrates using reduce() to calculate the sum of the elements in the $numbers array. The callback function adds the current $number to the $accumulator (initially 0) and returns the updated sum. With each iteration, reduce() accumulates the sum in the accumulator variable, resulting in the final total.

By understanding these functions, you can efficiently manipulate and extract meaningful information from your arrays in PHP.

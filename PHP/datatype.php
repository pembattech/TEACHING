<?php

// Arithmetic Operators
$x = 10;
$y = 5;

$sum = $x + $y;
$difference = $x - $y;
$product = $x * $y;
$division = $x / $y;  // Returns float (5)
$remainder = $x % $y;  // Remainder after division (0)
$power = $x ** $y;     // Exponentiation (10^5 = 100000)

echo "Sum: $sum<br>";
echo "Difference: $difference<br>";
echo "Product: $product<br>";
echo "Division: $division<br>";
echo "Remainder: $remainder<br>";
echo "Power: $power<br><br>";


// Assignment Operators
$age = 25;
$age += 1;  // Shorthand for $age = $age + 1;
$height = 1.75;

echo "Age: $age<br>";
echo "Height: $height<br><br>";


// Comparison Operators
$a = 10;
$b = 20;

$isEqual = ($a == $b);
$isGreater = ($a > $b);
$isLessThan = ($a < $b);

echo "Is a equal to b? $isEqual<br>";  // False
echo "Is a greater than b? $isGreater<br>";  // False
echo "Is a less than b? $isLessThan<br><br>";


// Logical Operators
$isStudent = true;
$hasGoodGrades = false;

$eligibleForScholarship = $isStudent && $hasGoodGrades;  // AND (false)
$canGraduate = $isStudent || $hasGoodGrades;            // OR (true)

echo "Eligible for Scholarship? $eligibleForScholarship<br>";
echo "Can Graduate? $canGraduate<br><br>";


// Increment/Decrement Operators
$count1 = 0;
$count1++;  // Shorthand for $count = $count + 1;
$number1 = 10;
$number1--;  // Shorthand for $number = $number - 1;

echo "Count: $count1<br>";
echo "Number: $number1<br><br>";


$count = 0;
$number = 10;

// Postfix increment/decrement
$result = $count;  // Assign current value before increment
$count++;
print("Postfix Increment: count = $result, $count<br>");  // Output: count = 0, 1

$result = $number;  // Assign current value before decrement
$number--;
print("Postfix Decrement: number = $result, $number<br><br>");  // Output: number = 10, 9


// Prefix increment/decrement
$result = ++$count;  // Increment and assign the new value
print("Prefix Increment: count = $result, $count<br>");  // Output: count = 1, 1

$result = --$number;  // Decrement and assign the new value
print("Prefix Decrement: number = $result, $number<br>");  // Output: number = 9, 9


// String Operators
$firstName = "John";
$lastName = "Doe";

$fullName = $firstName . " " . $lastName;

echo "Full Name: $fullName<br><br>";




// Array Operators
$fruits = ["apple", "banana", "orange"];

$fruits[] = "mango";  // Add element to the end

echo "Fruits: ";
print_r($fruits);
echo "<br><br>";


// Conditional (Ternary) Operator
$grade = 85;
$message = ($grade >= 90) ? "Excellent!" : "Good job.";

echo "Grade Message: $message";

?>



<?php
// Create an array of fruits
$fruits = ["apple", "banana", "cherry"];

// Access elements by index
$first_fruit = $fruits[0]; // "apple"
$last_fruit = $fruits[2];  // "cherry"

echo $first_fruit;
echo $last_fruit;

?>
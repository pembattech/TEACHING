

Certainly! Here are more examples of functions in PHP with explanations and outputs:

**1. Function to greet with a name:**

```php
function greet($name) {
  return "Hello, $name! How are you?";
}

$message = greet("John");
echo $message; // Output: Hello, John! How are you?
```

This function takes a name as an argument (`$name`) and returns a greeting message incorporating that name. The returned message is then assigned to a variable and echoed.

**2. Function to calculate area of a rectangle:**

```php
function calculateArea($length, $width) {
  $area = $length * $width;
  return $area;
}

$rectangleArea = calculateArea(5, 4);
echo "The area of the rectangle is: $rectangleArea"; // Output: The area of the rectangle is: 20
```

This function takes two arguments, `$length` and `$width`, representing the dimensions of a rectangle. It calculates the area using multiplication and returns the calculated value. The returned area is then stored in a variable and displayed.

**3. Function to check if a number is even:**

```php
function isEven($number) {
  return $number % 2 == 0;
}

$number = 10;
if (isEven($number)) {
  echo "$number is an even number.";
} else {
  echo "$number is an odd number.";
} // Output: 10 is an even number.
```

This function takes a number as an argument (`$number`) and checks if it's even using the modulo operator (`%`). It returns `true` if the number is even and `false` otherwise. The function is used within an `if` statement to determine whether the number is even or odd and display the corresponding message.

**4. Function to format a full name:**

```php
function formatFullName($firstName, $lastName) {
  return ucfirst($firstName) . " " . ucfirst($lastName);
}

$fullName = formatFullName("jane", "doe");
echo "Formatted name: $fullName"; // Output: Formatted name: Jane Doe
```

This function takes two arguments, `$firstName` and `$lastName`, representing a person's name. It uses `ucfirst` to capitalize the first letter of each word and returns the formatted full name. The returned name is then stored in a variable and displayed.

These examples showcase various functionalities achievable with functions in PHP. Remember, you can create functions to perform a wide range of tasks, making your code more organized and reusable.

function sendEmail($to) {
	return true;
}

$success = sendEmail('test@test.com');

if ($success) {
  echo 'email sent successfully';
} else {
  echo 'error sending the email';
}



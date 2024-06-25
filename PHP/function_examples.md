# Examples of named functions in PHP

**1. Function to greet with a name:**

```php
function greet($name) {
  return "Hello, $name! How are you?";
}

$message = greet("John");
echo $message; // Output: Hello, John! How are you?
```


**2. Function to calculate area of a rectangle:**

```php
function calculateArea($length, $width) {
  $area = $length * $width;
  return $area;
}

$rectangleArea = calculateArea(5, 4);
echo "The area of the rectangle is: $rectangleArea"; // Output: The area of the rectangle is: 20
```


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


**4. Function to format a full name:**

```php
function formatFullName($firstName, $lastName) {
  return ucfirst($firstName) . " " . ucfirst($lastName);
}

$fullName = formatFullName("jane", "doe");
echo "Formatted name: $fullName"; // Output: Formatted name: Jane Doe
```

**Note:** It uses `ucfirst` to capitalize the first letter of each word and returns the formatted full name.

**5. Function to send a mail.**

```php
function sendEmail($to) {
	return true;
}

$success = sendEmail('test@test.com');

if ($success) {
  echo 'email sent successfully';
} else {
  echo 'error sending the email';
}
```

# Examples of anonymous functions in PHP

1. **Filtering an Array:**

```php
$products = [
  ["name" => "Shirt", "price" => 20],
  ["name" => "Hat", "price" => 15],
  ["name" => "Jeans", "price" => 50],
];

$expensiveProducts = array_filter($products, function($product) {
  return $product["price"] > 25;
});

print_r($expensiveProducts); // Output: Array ( [2] => Array ( [name] => Jeans [price] => 50 ) )
```


2. **Calculating with Multiple Parameters:**

```php
$add = function($x, $y) {
  return $x + $y;
};

$result = $add(7, 3);
echo "Sum: $result"; // Output: Sum: 10
```



3. **Conditional Logic:**

```php
$age = 18;

$accessGranted = function($age) {
  return $age >= 18 ? "Access granted" : "Access denied";
};

echo $accessGranted($age); // Output: Access granted
```
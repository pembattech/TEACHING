**1. Simple if statement:**

```php
$age = 25;

if ($age >= 18) {
  echo "You are eligible to vote.";
} else {
  echo "You are not eligible to vote.";
}
```

**Output:**

```
You are eligible to vote.
```

**2. if statement with else if:**

```php
$grade = 85;

if ($grade >= 90) {
  echo "Excellent! You got an A.";
} elseif ($grade >= 80) {
  echo "Great job! You got a B.";
} else {
  echo "Keep studying! You got a C or below.";
}
```

**Output:**

```
Great job! You got a B.
```

**3. Checking data type:**

```php
$item = "apple";

if (is_string($item)) {
  echo "The variable \$item contains a string.";
} else {
  echo "The variable \$item does not contain a string.";
}
```

**Output:**

```
The variable $item contains a string.
```

**4. Checking empty variable:**

```php
$username = "";

if (empty($username)) {
  echo "Please enter your username.";
} else {
  echo "Hello, " . $username . "!";
}
```

**Output:**

```
Please enter your username.
```

## switch statements in PHP:

**1. Checking day of the week:**

```php
$day = "Tuesday";

switch ($day) {
  case "Saturday":
    echo "It's the weekend!";
    break;
  case "Sunday":
    echo "Enjoy your Sunday!";
    break;
  default:
    echo "It's a weekday. Back to work.";
}
```

**Output:**

```
It's a weekday. Back to work.
```



**2. Checking letter grade:**

```php
$grade = 88;

switch (true) { // Using boolean expression for flexibility
  case ($grade >= 90):
    echo "Excellent! You got an A.";
    break;
  case ($grade >= 80):
    echo "Great job! You got a B.";
    break;
  default:
    echo "Keep studying!";
}
```

**Output:**

```
Great job! You got a B.
```

**3. Checking for multiple values in a case:**

```php
$userRole = "admin";

switch ($userRole) {
  case "admin":
  case "editor":
    echo "You have editing permissions.";
    break;
  case "user":
    echo "You can view content.";
    break;
  default:
    echo "Invalid user role.";
}
```

**Output:**

```
You have editing permissions.
```

**Explanation:**

* This example demonstrates checking for multiple values in a single case.
* The `admin` and `editor` cases have the same code block because they share the same permission.


## Simpler Loop Examples in PHP:

Here are some basic loop examples in PHP with explanations and outputs:

**1. for loop (printing numbers 1 to 5):**

```php
for ($i = 1; $i <= 5; $i++) {
  echo $i . " ";
}
```

**Output:**

```
1 2 3 4 5 
```

**Explanation:**

* This `for` loop iterates 5 times.
* The counter `$i` starts at 1 and increments by 1 in each iteration.
* The loop continues as long as `$i` is less than or equal to 5 (`<=`).
* Inside the loop, the current value of `$i` is printed with a space.

**2. while loop (repeating a message):**

```php
$count = 0;

while ($count < 3) {
  echo "Hello World!" . PHP_EOL;
  $count++;
}
```

**Output:**

```
Hello World!
Hello World!
Hello World!
```

**Explanation:**

* This `while` loop executes the code block 3 times.
* The loop continues as long as `$count` is less than 3 (`<`).
* Inside the loop, "Hello World!" is printed followed by a newline.
* `$count` is incremented by 1 using the post-increment operator (`$count++`) after each iteration.
* Once `$count` becomes 3, the loop terminates because the condition is no longer true.

**3. foreach loop (iterating over a simple array):**

```php
$colors = ["red", "green", "blue"];

foreach ($colors as $color) {
  echo $color . " ";
}
```

**Output:**

```
red green blue 
```

**Explanation:**

* This `foreach` loop iterates over the `$colors` array.
* In each iteration, it assigns the current element (color) to the `$color` variable.
* Inside the loop, the current color is printed with a space.

These simplified examples demonstrate the basic structure and purpose of each loop type. Remember, you can adapt these examples to your specific needs and incorporate more complex logic within the loops.



## do...while loop examples:

The `do...while` loop is a variation of the `while` loop that guarantees the code block inside the loop executes at least once, even if the initial condition is false. Here are two examples:

**1. Guessing game:**

```php
$secretNumber = 7;
$guess = 0;

do {
  echo "Guess a number between 1 and 10: ";
  $guess = intval(fgets(STDIN)); // Read user input and convert to integer

  if ($guess == $secretNumber) {
    echo "Congratulations! You guessed the number." . PHP_EOL;
  } else {
    echo "Try again!" . PHP_EOL;
  }
} while ($guess != $secretNumber);
```

**Explanation:**

* This code simulates a guessing game.
* The loop ensures the user gets at least one chance to guess, even if their initial guess is wrong.
* Inside the loop, the user is prompted for a guess, which is stored in the `$guess` variable.
* The `if` statement checks if the guess matches the `$secretNumber`.
* If the guess is correct, a congratulatory message is displayed, and the loop terminates.
* If the guess is wrong, an "Try again!" message is displayed, and the loop continues.
* The loop repeats as long as `$guess` is not equal to `$secretNumber`.

**2. Password validation:**

```php
$password = "";

do {
  echo "Enter a password (minimum 8 characters): ";
  $password = rtrim(fgets(STDIN)); // Read user input and remove trailing newline

} while (strlen($password) < 8);

echo "Your password is set." . PHP_EOL;
```

**Explanation:**

* This code ensures the user enters a password with at least 8 characters.
* The loop keeps prompting the user until they enter a valid password.
* Inside the loop, the user is prompted for a password, which is stored in the `$password` variable.
* The `strlen` function calculates the length of the password string.
* The loop continues as long as the password length is less than 8 characters (`<`).
* Once the user enters a password with at least 8 characters, the loop terminates, and a success message is displayed.

Remember, the `do...while` loop is useful when you need to ensure a code block executes at least once, regardless of the initial condition. It's particularly helpful for situations where user input or external factors might initially lead to a false condition. 




As discussed earlier, `break` and `continue` statements in PHP act as jump statements within loops. Here's a breakdown of their functionalities with example code:

**1. break:**

This statement exits the entire loop it's within. Once encountered, the loop completely terminates, and execution jumps to the statement following the loop.

```php
for ($i = 0; $i < 10; $i++) {
  if ($i == 5) {
    break; // Exit the loop when $i reaches 5
  }
  echo $i . " ";
}
```

**Output:**

```
0 1 2 3 4 
```

The loop stops iterating after printing numbers from 0 to 4 because `break` is encountered at `$i == 5`.

**2. continue:**

This statement skips the remaining code in the current iteration of the loop. When encountered, the current loop iteration is terminated prematurely, and the loop jumps back to the beginning to evaluate the loop condition for the next iteration.

```php
for ($i = 0; $i < 10; $i++) {
  if ($i % 2 == 0) {
    continue; // Skip even numbers
  }
  echo $i . " ";
}
```

**Output:**

```
1 3 5 7 9 
```

The loop skips even numbered iterations (`$i % 2 == 0`) due to `continue`, resulting in only odd numbers being printed.

**Key Points:**

* Remember, these statements can only be used within loops. Using them outside of loops will result in a syntax error.
* `break` exits the entire loop, while `continue` skips the current iteration and moves to the next.
* Understanding their behavior as jump statements helps clarify how they modify the loop's execution flow.

**Additional Considerations:**

Both `break` and `continue` can optionally take arguments to specify the number of enclosing loops to break out of or continue from (useful for nested loops). However, this functionality is not commonly used in modern PHP code. It's generally recommended to keep your loops clear and concise, and avoid overly nested structures where such arguments might be necessary.






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



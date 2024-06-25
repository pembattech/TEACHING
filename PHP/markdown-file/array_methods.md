

**1. `is_array()`**

```php
<?php
$name = "Alice";
$fruits = ["apple", "banana", "orange"];

if (is_array($name)) {
  echo "Variable \$name is an array.\n";
} else {
  echo "Variable \$name is not an array.\n";
}

if (is_array($fruits)) {
  echo "Variable \$fruits is an array.\n";
} else {
  echo "Variable \$fruits is not an array.\n";
}
?>
```

**Output:**

```
Variable $name is not an array.
Variable $fruits is an array.
```

**2. `array_unique()`**

```php
<?php
$numbers = [1, 2, 3, 2, 4, 1];
$unique_numbers = array_unique($numbers);

echo "Original array: \n";
print_r($numbers);

echo "\nUnique values: \n";
print_r($unique_numbers);
?>
```

**Output:**
```
Original array: 
Array
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 2
    [4] => 4
    [5] => 1
)

Unique values: 
Array
(
    [0] => 1
    [1] => 2
    [2] => 3
    [4] => 4
)
```

**3. `array_search()`**

```php
<?php
$colors = ["red", "green", "blue", "yellow"];
$key = array_search("green", $colors);

if ($key !== false) {
  echo "The value \"green\" is found at index $key.\n";
} else {
  echo "The value \"green\" is not found in the array.\n";
}
?>
```

**Output:**

```
The value "green" is found at index 1.
```

**4. `array_reverse()`**

```php
<?php
$letters = ["a", "b", "c", "d"];

echo "Original array: \n";
print_r($letters);

$reversed_letters = array_reverse($letters);

echo "\nReversed array: \n";
print_r($reversed_letters);
?>
```

**Output:**

```
Original array: 
Array
(
    [0] => a
    [1] => b
    [2] => c
    [3] => d
)

Reversed array: 
Array
(
    [0] => d
    [1] => c
    [2] => b
    [3] => a
)
```

**5. `array_reduce()`**

```php
<?php
$numbers = [1, 2, 3, 4, 5];

// Calculate the sum of all elements
$sum = array_reduce($numbers, function ($carry, $item) {
  return $carry + $item;
}, 0);  // Initial value (optional)

echo "The sum of the numbers is: $sum\n";
?>
```

**Output:**

```
The sum of the numbers is: 15
```

**6. `array_map()`**

```php
<?php
$numbers = [1, 2, 3];

// Square each element
$squared_numbers = array_map(function ($item) {
  return $item * $item;
}, $numbers);

echo "Original array: \n";
print_r($numbers);

echo "\nSquared array: \n";
print_r($squared_numbers);
```

**Output:**

```
Original array: 
Array
(
    [0] => 1
    [1] => 2
    [2] => 3
)

Squared array: 
Array
(
    [0] => 1
    [1] => 4
    [2] => 9
)
```

**7. `array_filter()`**


**8. `max()`**

```php
<?php
$numbers = [10, 5, 18, 2];

$largest_number = max($numbers);

echo "The largest number in the array is: $largest_number\n";
```

**Output:**

```
The largest number in the array is: 18
```

**9. `min()`**

```php
<?php
$numbers = [10, 5, 18, 2];

$smallest_number = min($numbers);

echo "The smallest number in the array is: $smallest_number\n";
```

**Output:**

```
The smallest number in the array is: 2
```

**10. `array_rand()`**

```php
<?php
$fruits = ["apple", "banana", "orange", "mango"];

$random_fruit = $fruits[array_rand($fruits)];

echo "A random fruit from the array is: $random_fruit\n";
```

**Output:**

**(The output will vary as `array_rand()` returns a random index each time)**

```
A random fruit from the array is: apple  // (or any other fruit from the array)
```

**11. `array_count_values()`**

```php
<?php
$words = ["hello", "world", "hello", "welcome"];

$word_counts = array_count_values($words);

echo "Word counts: \n";
print_r($word_counts);
```

**Output:**

```
Word counts: 
Array
(
    [hello] => 2
    [world] => 1
    [welcome] => 1
)
```

**12. `implode()`**

```php
<?php
$colors = ["red", "green", "blue"];

$color_string = implode(", ", $colors);

echo "Colors as a string: $color_string\n";
```

**Output:**

```
Colors as a string: red, green, blue
```

**13. `array_pop()`**

```php
<?php
$animals = ["dog", "cat", "bird"];

$removed_animal = array_pop($animals);

echo "Removed animal: $removed_animal\n";
echo "\nRemaining animals: \n";
print_r($animals);
```

**Output:**

```
Removed animal: bird
Remaining animals: 
Array
(
    [0] => dog
    [1] => cat
)
```

**14. `array_shift()`**

```php
<?php
$numbers = [10, 20, 30];

$removed_number = array_shift($numbers);

echo "Removed number: $removed_number\n";
echo "\nRemaining numbers: \n";
print_r($numbers);
```

**Output:**

```
Removed number: 10
Remaining numbers: 
Array
(
    [0] => 20
    [1] => 30
)
```

**15. `sort()`**

```php
<?php
$names = ["Alice", "Bob", "Charlie"];

sort($names);

echo "Sorted names: \n";
print_r($names);
```

**Output:**

```
Sorted names: 
Array
(
    [0] => Alice
    [1] => Bob
    [2] => Charlie
)
```

**16. `rsort()`**

```php
<?php
$numbers = [10, 20, 30];

rsort($numbers);

echo "Numbers sorted in descending order: \n";
print_r($numbers);
```

**Output:**

```
Numbers sorted in descending order: 
Array
(
    [0] => 30
    [1] => 20
    [2] => 10
)
```

**17. `array_walk()`**

```php
<?php
$numbers = [1, 2, 3];

function double_value(&$value) {
  $value *= 2;
}

array_walk($numbers, "double_value");

echo "Doubles of the original numbers: \n";
print_r($numbers);
```

**Output:**

```
Doubles of the original numbers: 
Array
(
    [0] => 2



I'd be glad to provide additional explanations for the remaining array functions you mentioned:

**18. `in_array()`**

- **Purpose:** Checks if a value exists in an array.
- **Syntax:** `bool in_array(mixed $needle, array $haystack, bool $strict = false) : bool`
- **Parameters:**
  - `$needle`: The value to search for.
  - `$haystack`: The array to search within.
  - `$strict` (optional): Whether to use strict type comparison (default: `false`).
- **Return Value:**
  - `true` if the value is found in the array, `false` otherwise.

**Example:**

```php
<?php
$fruits = ["apple", "banana", "orange"];

if (in_array("mango", $fruits)) {
  echo "Mango is found in the array.\n";
} else {
  echo "Mango is not found in the array.\n";
}

if (in_array("apple", $fruits, true)) { // Using strict comparison
  echo "Apple is found (strict comparison).\n";
}
```

**Output:**

```
Mango is not found in the array.
Apple is found (strict comparison).
```

**19. `array_search()`**

- **Purpose:** Finds the index of the first occurrence of a value in an array.
- **Syntax:** `mixed array_search(mixed $needle, array $haystack, bool $strict = false) : mixed`
- **Parameters:** (same as `in_array()`)
- **Return Value:**
  - The index of the first matching value, or `false` if not found.

**Example:** ( مشابه به مثال بالا، mashābeh be misāl-e bālā - similar to the previous example)

```php
$fruits = ["apple", "banana", "orange"];

$apple_index = array_search("apple", $fruits);

if ($apple_index !== false) {
  echo "Apple is found at index $apple_index.\n";
} else {
  echo "Apple is not found in the array.\n";
}
```

**Output:**

```
Apple is found at index 0.
```

**20. `array_key_exists()`**

- **Purpose:** Checks if a specific key exists in an associative array.
- **Syntax:** `bool array_key_exists(mixed $key, array $array) : bool`
- **Parameters:**
  - `$key`: The key to check for.
  - `$array`: The associative array to search within.
- **Return Value:**
  - `true` if the key exists, `false` otherwise.

**Example:**

```php
$users = [
  "john" => "Doe",
  "jane" => "Smith"
];

if (array_key_exists("john", $users)) {
  echo "The key \"john\" exists in the array.\n";
} else {
  echo "The key \"john\" does not exist in the array.\n";
}
```

**Output:**

```
The key "john" exists in the array.
```

I hope this comprehensive explanation clarifies the functionality of these additional array functions in PHP!

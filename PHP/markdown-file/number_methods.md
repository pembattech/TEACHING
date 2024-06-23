## Built-in Functions for Numbers in PHP

**1. `round(number, precision)`:** Rounds a number to the nearest integer. Positive values above 0.5 round up, while values below 0.5 round down. You can optionally specify the `precision` (number of decimal places) for rounding.

  ```php
  <?php
  $num1 = 3.14159;
  $rounded1 = round($num1);
  $rounded2 = round($num1, 2);

  echo "Original number: $num1 \n";
  echo "Rounded to nearest integer: $rounded1 \n";  // Output: 3
  echo "Rounded to 2 decimal places: $rounded2 \n"; // Output: 3.14
  ?>
  ```

**2 .`ceil(number)`:** Rounds a number up to the nearest integer. This function always rounds away from zero.

```php
<?php
$num2 = 2.5;
$ceiling = ceil($num2);

echo "Original number: $num2 \n";
echo "Rounded up to nearest integer: $ceiling \n"; // Output: 3
?>
```

**3. `floor(number)`:** Rounds a number down to the nearest integer. This function always rounds towards zero.

```php
<?php
$num3 = -1.8;
$floored = floor($num3);

echo "Original number: $num3 \n";
echo "Rounded down to nearest integer: $floored \n"; // Output: -2
?>
```

**4. `rand(min, max)`:** Generates a random integer between the specified `min` (inclusive) and `max` (exclusive) values. If no arguments are provided, it generates a pseudo-random number between 0 and the largest possible value for an integer on your system.

```php
<?php
$rand_num = rand(1, 10);

echo "Random number between 1 and 10 (exclusive): $rand_num \n";
// Output will vary on each run (e.g., 3, 7, 9)
?>
```

**5. `min(number1, number2, ...)`:** Returns the lowest value from a list of numbers provided as arguments.

```php
<?php
$numbers = array(5, -2, 8, 1);
$min_value = min($numbers);

echo "Minimum value in the array: $min_value \n"; // Output: -2
?>
```

**6. `max(number1, number2, ...)`:** Returns the highest value from a list of numbers provided as arguments.

```php
<?php
$numbers = array(5, -2, 8, 1);
$max_value = max($numbers);

echo "Maximum value in the array: $max_value \n"; // Output: 8
?>
```
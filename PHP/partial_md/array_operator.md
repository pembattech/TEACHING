**1. Assigning a Complete Array:**

```php
<?php
$fruits = array("apple", "banana", "orange");

// Assigning the entire array to another variable
$copiedFruits = $fruits;

echo "Original fruits: ";
print_r($fruits);  // Output: Array ( [0] => apple [1] => banana [2] => orange )

echo "Copied fruits: ";
print_r($copiedFruits);  // Output: Array ( [0] => apple [1] => banana [2] => orange )

// Changes made to $copiedFruits will also affect $fruits
$copiedFruits[1] = "mango";

echo "Original fruits after modification: ";
print_r($fruits);  // Output: Array ( [0] => apple [1] => mango [2] => orange )
?>
```

**2. Spread Operator (`...`) for Unpacking Elements:**

```php
<?php
$colors = ["red", "green", "blue"];

// Using spread operator to create a new array with additional elements
$expandedColors = ["yellow", ...$colors, "purple"];

echo "Expanded colors: ";
print_r($expandedColors);  // Output: Array ( [0] => yellow [1] => red [2] => green [3] => blue [4] => purple )
?>
```

**3. Advanced Operations with `array_merge()` and `array_diff()`:**

```php
<?php
$numbers1 = array(1, 2, 4);
$numbers2 = array(2, 3, 5);

// Merging arrays (duplicates are kept)
$mergedNumbers = array_merge($numbers1, $numbers2);

echo "Merged numbers: ";
print_r($mergedNumbers);  // Output: Array ( [0] => 1 [1] => 2 [2] => 4 [3] => 2 [4] => 3 [5] => 5 )

// Finding the difference (elements in $numbers1 but not in $numbers2)
$difference = array_diff($numbers1, $numbers2);

echo "Difference: ";
print_r($difference);  // Output: Array ( [0] => 1 [1] => 4 )
?>
```

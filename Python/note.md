
# 🐍 Python Beginner Course

---

### ✅ Introduction to Python

**What is Python?**

* A popular, beginner-friendly high level programming language.
* Used in web, data science, AI, automation.

**Install Python:**

* Download from [python.org](https://www.python.org).
* Use an editor: IDLE (built-in), VS Code, or PyCharm.

**Your first program:**

```python
print("Hello, World!")
```

### The `print()` Function

Displays output on the screen. It is one of the most basic and commonly used functions in Python.

🎯 **Exercise:**

* Try printing your name.


### ✅ Variables & Data Types

**Variables:** A variable is a name used to store data.

```python
name = "Hom"
age = 25
height = 5.9
is_student = True
```

**Basic Data Types:**

* `int`: integers → `10`
* `float`: decimals → `3.14`
* `str`: strings → `"hello"`
* `bool`: `True` / `False`

**Input & Output:**

```python
name = input("What is your name? ")
print("Hello, " + name)
```

> Note: `input()` returns a string by default.

🎯 **Exercise:**

* Ask user’s age and print `You are 20 years old`.

---


### 📝 Comments in Python
Comments are notes inside your code that Python does NOT run.
They help you understand what your code does.


## ✍️ How to write comments

**🔹 `Single-line comment`**

Use `#` in front of your comment.

```python
# This is a comment
print("Hello")  # This is also a comment
```

Everything after `#` is ignored by Python.

---

**🔹 `Multi-line comments`**

Python does not have special multi-line comments.
We just write many single-line comments.

```python
# This is a comment
# spread over multiple lines
# to explain more details
```

---

**🔹 `Triple quotes trick`**

We can use triple quotes `"""` or `'''` to write long notes.
These are actually multi-line strings, not true comments, but they are ignored if not used.

```python
"""
This is a multi-line string
often used like a comment.
"""
```

---


### ✅ Operators

## 🧮 1. Arithmetic Operators

Used to perform mathematical operations.

| Operator | Description         | Example            |
| -------- | ------------------- | ------------------ |
| `+`      | Addition            | `3 + 2` → `5`      |
| `-`      | Subtraction         | `5 - 2` → `3`      |
| `*`      | Multiplication      | `4 * 3` → `12`     |
| `/`      | Division (float)    | `10 / 3` → `3.333` |
| `//`     | Floor division      | `10 // 3` → `3`    |
| `%`      | Modulus (remainder) | `10 % 3` → `1`     |
| `**`     | Exponentiation      | `2 ** 3` → `8`     |

```python
a = 10
b = 3
print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.33
print(a // b) # 3
print(a % b)  # 1
print(a ** b) # 1000
```

---

## 📝 2. Assignment Operators

Used to assign values to variables.

| Operator | Example   | Same as      |
| -------- | --------- | ------------ |
| `=`      | `a = 5`   | `a = 5`      |
| `+=`     | `a += 3`  | `a = a + 3`  |
| `-=`     | `a -= 2`  | `a = a - 2`  |
| `*=`     | `a *= 4`  | `a = a * 4`  |
| `/=`     | `a /= 2`  | `a = a / 2`  |
| `//=`    | `a //= 2` | `a = a // 2` |
| `%=`     | `a %= 3`  | `a = a % 3`  |
| `**=`    | `a **= 2` | `a = a ** 2` |

```python
a = 5
a += 3  # 8
a *= 2  # 16
a -= 4  # 12
print(a)
```

---

## ⚖️ 3. Comparison Operators

Compare two values and return `True` or `False`.

| Operator | Description         | Example           |
| -------- | ------------------- | ----------------- |
| `==`     | Equal to            | `5 == 5` → `True` |
| `!=`     | Not equal to        | `5 != 3` → `True` |
| `>`      | Greater than        | `5 > 3` → `True`  |
| `<`      | Less than           | `5 < 8` → `True`  |
| `>=`     | Greater or equal to | `5 >= 5` → `True` |
| `<=`     | Less or equal to    | `3 <= 4` → `True` |

```python
print(5 == 5)  # True
print(5 != 3)  # True
print(5 > 3)   # True
print(5 < 3)   # False
print(5 >= 5)  # True
print(4 <= 4)  # True
```

---

## 🔗 4. Logical Operators

Used to combine conditional statements.

| Operator | Description                  | Example                      |
| -------- | ---------------------------- | ---------------------------- |
| `and`    | True if both are True        | `(5 > 3 and 2 < 4)` → `True` |
| `or`     | True if at least one is True | `(5 < 3 or 2 < 4)` → `True`  |
| `not`    | Reverses result              | `not(5 > 3)` → `False`       |

```python
x = 5
print(x > 3 and x < 10)  # True
print(x > 6 or x < 10)   # True
print(not(x > 6))        # True
```

---

## 🆔 5. Identity Operators

Check if two variables point to the same object in memory.

| Operator | Example      | Explanation                             |
| -------- | ------------ | --------------------------------------- |
| `is`     | `x is y`     | True if x and y are the same object     |
| `is not` | `x is not y` | True if x and y are not the same object |

```python
x = [1, 2, 3]
y = x
z = [1, 2, 3]

print(x is y)     # True (same object)
print(x is z)     # False (different objects, same content)
print(x is not z) # True
```

---

## 🔍 6. Membership Operators

Check if a value is present in a sequence (list, tuple, string, etc).

| Operator | Example                     | Explanation |
| -------- | --------------------------- | ----------- |
| `in`     | `"a" in "apple"` → `True`   |             |
| `not in` | `4 not in [1,2,3]` → `True` |             |

```python
print("a" in "apple")     # True
print(4 in [1, 2, 3, 4])  # True
print(5 not in [1, 2, 3]) # True
```

---

<!-- ## ⚙️ 7. Bitwise Operators

Operate on binary (bits).

| Operator | Description | Example         |     |         |
| -------- | ----------- | --------------- | --- | ------- |
| `&`      | AND         | `5 & 3` → `1`   |     |         |
| \`       | \`          | OR              | \`5 | 3`→`7\` |
| `^`      | XOR         | `5 ^ 3` → `6`   |     |         |
| `~`      | NOT         | `~5` → `-6`     |     |         |
| `<<`     | Left Shift  | `5 << 1` → `10` |     |         |
| `>>`     | Right Shift | `5 >> 1` → `2`  |     |         |

```python
a = 5    # 0101
b = 3    # 0011
print(a & b)  # 1 (0001)
print(a | b)  # 7 (0111)
print(a ^ b)  # 6 (0110)
print(~a)     # -6
print(a << 1) # 10
print(a >> 1) # 2
```

--- -->


🎯 **Exercise:**

* Write code that checks if a number is greater than 10.

---

### ✅ Methods


## 🔤 Common String Methods

```python
text = "  Hello, World!  "

print(text.lower())    # "  hello, world!  "
print(text.upper())    # "  HELLO, WORLD!  "
print(text.strip())    # "Hello, World!"    (removes leading & trailing spaces)
print(text.replace("World", "Python"))  # "  Hello, Python!  "
print(text.split(",")) # ['  Hello', ' World!  ']  (splits by comma)
```

---

## 🔢 Common Number Functions

```python
num = 3.75

print(round(num))     # 4       (rounds to nearest integer)
print(abs(-7))       # 7       (absolute value)
print(int(4.99))     # 4       (convert float to int, truncates)
print(float(10))     # 10.0    (convert int to float)
print(pow(2, 3))     # 8       (2 to the power of 3)
```

---

## 🔄 Type Conversions Between Strings and Numbers

```python
# String to int
num_str = "42"
num_int = int(num_str)
print(num_int + 8)    # 50

# String to float
float_str = "3.14"
num_float = float(float_str)
print(num_float * 2)  # 6.28

# Number to string
num = 100
num_str = str(num)
print("The number is " + num_str)  # concatenation works with strings only
```

---

🎯 **Exercise:**

**1. String Methods**

* Take a user input string with extra spaces.
* Print the string in lowercase.
* Remove the extra spaces and print the cleaned string.
* Replace all occurrences of `"python"` with `"Java"` (case insensitive).

**2. Number Functions**

* Ask the user for a floating-point number.
* Print the rounded value.
* Print the absolute value of the negative of that number.
* Print the number raised to the power of 3.

**3. Type Conversions**

* Ask the user to enter a number as a string.
* Convert it to an integer and add 10, then print the result.
* Convert it to a float and multiply by 2.5, then print the result.
* Convert the integer back to string and concatenate it with `" is the new number"` and print.

---

## 🔄 Control Structures

---

### ✅ **If Statements**

```python
age = int(input("Enter your age: "))
if age >= 18:
    print("You are an adult")
elif age >= 13:
    print("You are a teenager")
else:
    print("You are a child")
```

🎯 **Exercise:**

**1. Check if a number is positive, negative, or zero**
   🔍 *Hint: Use `if`, `elif`, and `else` to compare the number to 0.*

**2. Check if a number is even or odd**
   🔍 *Hint: Use the modulus operator (`%`). If `number % 2 == 0`, it's even.*

**3. Check if a number is divisible by both 3 and 5**
   🔍 *Hint: Use `if number % 3 == 0 and number % 5 == 0`.*

---

## ✅ Loops

### While loop:

```python
i = 1
while i <= 5:
    print(i)
    i += 1

# Output:
# 1
# 2
# 3
# 4
# 5
```

### **For loop:**

```python
for i in range(1, 6):
    print(i)

# Output:
# 1
# 2
# 3
# 4
# 5
```

🎯 **Loop Exercises with Hints:**


**1. Print numbers from 10 to 1**
   🔍 *Hint: Use `range(start, stop, step)` with a negative step.*

**2. Print all even numbers between 1 and 20**
   🔍 *Hint: Use a loop with `if number % 2 == 0` to check for evenness.*

**3. Calculate the sum of numbers from 1 to 100**
   🔍 *Hint: Use a loop and a variable like `total` to keep track of the running sum.*

**4. Print the multiplication table of 7**
   🔍 *Hint: Loop from 1 to 10 and multiply each by 7.*

---

### 🚀 Jump Statements

Used to control the flow of loops.

**🔹 `break`**

Stops the loop:

```python
for i in range(1, 10):
    if i == 5:
        break
    print(i)

# Output:
# 1
# 2
# 3
# 4
```

**🔹 `continue`**

Skips to the next loop iteration:

```python
for i in range(1, 6):
    if i == 3:
        continue
    print(i)

# Output:
# 1
# 2
# 4
# 5
```

**🔹 `pass`**

Does nothing (used as placeholder):

```python
for i in range(3):
    if i == 1:
        pass
    print("i =", i)

# Output:
# i = 0
# i = 1
# i = 2
```

---

🎯 **Jump Statement Exercises with Hints:**

**1. Print numbers from 1 to 10, skipping multiples of 3 using `continue`**
   🔍 *Hint: Inside the loop, use `if number % 3 == 0: continue`.*

**2. Print numbers from 1 to 10, but stop when you reach 6 using `break`**
   🔍 *Hint: Use `if number == 6: break` to exit early.*

**3. Use `pass` inside a loop that checks even or odd numbers**
   🔍 *Hint: Use `if number % 2 != 0: pass` as a placeholder for odd numbers.*


---

## Chapter 8: Lists, Tuples, and Dictionaries

### Lists

A **list** is an ordered collection of items that can be of different data types. Lists are **mutable**, meaning you can change, add, or remove elements after creation.

#### Creating a List

```python
fruits = ["apple", "banana", "cherry"]
print(fruits)  # Output: ['apple', 'banana', 'cherry']
```

#### Accessing Elements

Lists use zero-based indexing:

```python
print(fruits[0])  # Output: apple
print(fruits[2])  # Output: cherry
```

#### Modifying Lists

You can change elements by assigning new values:

```python
fruits[1] = "blueberry"
print(fruits)  # Output: ['apple', 'blueberry', 'cherry']
```

#### Adding Elements

```python
fruits.append("orange")
print(fruits)  # Output: ['apple', 'blueberry', 'cherry', 'orange']
```

#### Removing Elements

```python
fruits.remove("apple")
print(fruits)  # Output: ['blueberry', 'cherry', 'orange']
```

#### List Slicing

Extract parts of a list using slicing:

```python
print(fruits[1:3])  # Output: ['cherry', 'orange']
```

#### Example: Loop through a list

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

**Common List Methods:**

* `append(item)` – Add item to the end
* `insert(index, item)` – Insert item at index
* `remove(item)` – Remove first occurrence of item
* `pop()` – Remove and return last item
* `sort()` – Sort the list
* `reverse()` – Reverse the list order
* `count(item)` – Count occurrences of item
* `clear()` – Remove all items

---

### Tuples

A **tuple** is similar to a list but **immutable** — its contents cannot be changed once created. Tuples are useful for storing fixed data.

#### Creating a Tuple

```python
point = (10, 20)
print(point)  # Output: (10, 20)
```

#### Accessing Elements

Tuples use zero-based indexing:

```python
print(point[0])  # Output: 10
print(point[1])  # Output: 20
```


#### Example: Loop through a tuple

```python
point = (10, 20, 30)
for coordinate in point:
    print(coordinate)
```

#### Common Tuple Methods:

* `count(item)` – Count occurrences of item
* `index(item)` – Return first index of item

> Note: Tuples have fewer methods because they are immutable.

#### Why Use Tuples?

* For data that should not change (e.g., coordinates, configuration values)
* Tuples can be dictionary keys because they are hashable

---

### Dictionaries

A **dictionary** stores data as **key-value pairs**. It is mutable and ordered (from Python 3.7+).

#### Creating a Dictionary

```python
student = {"name": "Nima", "age": 18, "courses": ["Math", "Science"]}
print(student)
# Output: {'name': 'Nima', 'age': 18, 'courses': ['Math', 'Science']}
```

#### Accessing Values

Access values by their keys:

```python
print(student["name"])    # Output: Nima
print(student["age"])     # Output: 18
```

#### Adding or Updating Items

```python
student["age"] = 19          # Update age
student["grade"] = "A"       # Add new key-value pair
print(student)
```

#### Removing Items

```python
del student["grade"]
print(student)
```

#### Dictionary Methods

* `keys()` — returns all keys
* `values()` — returns all values
* `items()` — returns key-value pairs as tuples

```python
print(student.keys())    # dict_keys(['name', 'age', 'courses'])
print(student.values())  # dict_values(['Nima', 19, ['Math', 'Science']])
print(student.items())   # dict_items([('name', 'Nima'), ('age', 19), ('courses', ['Math', 'Science'])])
```


#### Example: Loop through a dictionary

```python
student = {"name": "Nima", "age": 18, "grade": "A"}
for key in student:
    print(key, ":", student[key])
```

Or to loop over key-value pairs:

```python
for key, value in student.items():
    print(key, "->", value)
```

#### Common Dictionary Methods:

* `keys()` – Return all keys
* `values()` – Return all values
* `items()` – Return all key-value pairs
* `get(key)` – Return value for key, or None if key not found
* `pop(key)` – Remove key and return its value
* `clear()` – Remove all items


---

### Summary

| Data Structure | Mutable | Ordered | Syntax Example                 | Typical Use Case                    |
| -------------- | ------- | ------- | ------------------------------ | ----------------------------------- |
| List           | Yes     | Yes     | `fruits = ["apple", "banana"]` | Collection of items that may change |
| Tuple          | No      | Yes     | `point = (10, 20)`             | Fixed data, like coordinates        |
| Dictionary     | Yes     | Yes     | `student = {"name": "Nima"}`   | Key-value mapping, like records     |

---

🎯 **Exercises for List:**

1. Create a list of your favorite fruits.
2. Add a new fruit to the list.
3. Remove a fruit from the list.
4. Print the list after each operation.
5. Slice the list to get the first two fruits.

🎯 **Exercises for Tuples:**
1. Create a tuple representing your birth date `(year, month, day)`.
2. Access and print each element separately.
3. Try to change an element and observe what happens.

🎯 **Exercises for Dictionary:**
1. Create a dictionary to store a student's name, age, and subjects.
2. Add a new key-value pair for the student's grade.
3. Update the student's age.
4. Remove the grade key.
5. Print all keys and values separately.


---

### Sets:

* Unordered collections of unique items.

```python
s = {1, 2, 3, 3, 2}
print(s)  # {1, 2, 3}

s.add(4)
s.remove(2)
print(s)

s2 = {3, 4, 5}
print(s.union(s2))       # {1, 3, 4, 5}
print(s.intersection(s2))# {3, 4}
print(s.difference(s2))  # {1}
```

---

🎯 **Exercise:**

* Make a set of numbers `{1,2,3,4}`.
* Add `5` and remove `2`.
* Make another set `{3,4,5,6}` and print their intersection.

---


## 📅 Functions, Files, Modules

### ✅ Functions
Functions help you reuse code and organize your program.

```python
def greet(name):
    print("Hello, " + name)

greet("Hom")
```


**Function with return value:**

```python
def square(x):
    return x * x

result = square(5)
print("Square is:", result)
```

**Function to find the maximum of two numbers, then print if it’s greater than 100.**

```python
def max_of_two(a, b):
    if (a > b):
        return a
    else:
        return b

largest = max_of_two(150, 80)
if largest > 100:
    print("The largest number is over 100.")
else:
    print("The largest number is 100 or less.")
```

---

🎯 **Exercise:**

* Write function to add two numbers.
* Write a function to get the length of a word, then use that length to print if it’s a long word (length > 5) or not.
* Write a function that returns the first character of a string, then use it to check if it’s a vowel.

---

### ✅ Day 11: File Handling

```python
# write
with open("data.txt", "w") as f:
    f.write("Hello World!")

# read
with open("data.txt", "r") as f:
    print(f.read())
```

---

---

### ✅ Day 12: Modules

```python
import math
print(math.sqrt(16))  # Square root of 16
```

```python
import random
print(random.randint(1, 10))  # Random integer between 1 and 10
```

```python
import random

fruits = ["apple", "banana", "cherry", "orange", "mango"]
random_fruit = random.choice(fruits)
print("Random fruit:", random_fruit)
```

```python
import datetime

# Get current date and time
now = datetime.datetime.now()
print("Current date and time:", now)

# Get just the current date
today = datetime.date.today()
print("Today's date:", today)

# Create a specific date
my_birthday = datetime.date(1990, 7, 15)
print("My birthday:", my_birthday)

# Format date as string
formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")
print("Formatted date and time:", formatted_date)

# Calculate difference between dates
delta = today - my_birthday
print("Days since my birthday:", delta.days)
```

---



🎯 **Exercise:**

* Generate random number between 1 and 100.
* Create a list of 5 numbers and print a random number from that list.

---

### ✅ Day 13: Mini Project

* **Guess the number game:**

```python
import random
number = random.randint(1, 100)
guess = 0
while guess != number:
    guess = int(input("Guess number: "))
    if guess < number:
        print("Too low!")
    elif guess > number:
        print("Too high!")
    else:
        print("Correct!")
```

---

# 🚀 Congratulations!


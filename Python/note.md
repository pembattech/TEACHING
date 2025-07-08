
# 🐍 Python Beginner Course

---

<!-- ## 📅 Week 1: Getting Started -->

### ✅ Day 1: Introduction to Python

**What is Python?**

* A popular, beginner-friendly programming language.
* Used in web, data science, AI, automation.

**Install Python:**

* Download from [python.org](https://www.python.org).
* Use an editor: IDLE (built-in), VS Code, or PyCharm.

**Your first program:**

```python
print("Hello, World!")
```

🎯 **Exercise:**

* Try printing your name.

```python
print("My name is Hom")
```

---

### ✅ Day 2: Variables & Data Types

**Variables:** store data.

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

🎯 **Exercise:**

* Ask user’s age and print `You are 20 years old`.

---

### ✅ Day 3: Operators and Methods

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

## ⚙️ 7. Bitwise Operators

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

---


🎯 **Exercise:**

* Write code that checks if a number is greater than 10.

---


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

Awesome! Here are some **practice exercises** to help you master string methods, number functions, and type conversions:

---

# 📝 Practice Exercises: String Methods, Number Functions & Type Conversions

### 1. String Methods

* Take a user input string with extra spaces.
* Print the string in lowercase.
* Remove the extra spaces and print the cleaned string.
* Replace all occurrences of `"python"` with `"Java"` (case insensitive).

### 2. Number Functions

* Ask the user for a floating-point number.
* Print the rounded value.
* Print the absolute value of the negative of that number.
* Print the number raised to the power of 3.

### 3. Type Conversions

* Ask the user to enter a number as a string.
* Convert it to an integer and add 10, then print the result.
* Convert it to a float and multiply by 2.5, then print the result.
* Convert the integer back to string and concatenate it with `" is the new number"` and print.

---



---


## 📅 Week 2: Control Structures

### ✅ Day 4: If Statements

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

* Write program to check if number is positive, negative, or zero.

---

### ✅ Day 5: Loops

**While loop:**

```python
i = 1
while i <= 5:
    print(i)
    i += 1
```

**For loop:**

```python
for i in range(1, 6):
    print(i)
```

🎯 **Exercise:**

* Print numbers from 10 to 1 using a loop.

---

### ✅ Day 6: Practice Day

* Sum of first N numbers.

```python
n = int(input("Enter n: "))
total = 0
for i in range(1, n+1):
    total += i
print("Sum:", total)
```

* Simple factorial:

```python
fact = 1
for i in range(1, n+1):
    fact *= i
print("Factorial:", fact)
```

---

## 📅 Week 3: Data Structures

---

### ✅ Day 7: Lists

**Lists are ordered, mutable collections.**

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # apple
```

**Common methods:**

```python
fruits.append("orange")      # add at end
fruits.insert(1, "kiwi")     # insert at index 1
fruits.remove("banana")      # remove by value
fruits.pop()                 # remove last item
fruits.sort()                # sort alphabetically
fruits.reverse()             # reverse order
print(len(fruits))           # length of list
```

**Iterating through list:**

```python
for fruit in fruits:
    print(fruit)
```

---

🎯 **Exercise:**

* Make a list of 5 numbers.
* Print the sum, maximum, and minimum.
* Sort the list and print it.

```python
numbers = [10, 5, 8, 3, 6]
print("Sum:", sum(numbers))
print("Max:", max(numbers))
print("Min:", min(numbers))
numbers.sort()
print("Sorted:", numbers)
```

---

### ✅ Day 8: Tuples & Sets

---

**Tuples:**

* Ordered, immutable collections (cannot be changed after creation).

```python
t = (1, 2, 3)
print(t[0])
print(len(t))
print(t.count(2))
print(t.index(3))
```

---

**Sets:**

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

### ✅ Day 9: Dictionaries

**Dictionaries:**

* Store data in key-value pairs.

```python
person = {"name": "Hom", "age": 25}
print(person["name"])
person["age"] = 26
person["city"] = "Kathmandu"
```

**Common methods:**

```python
print(person.keys())    # dict_keys(['name', 'age', 'city'])
print(person.values())  # dict_values(['Hom', 26, 'Kathmandu'])
print(person.items())   # dict_items([('name', 'Hom'), ...])
```

**Loop through dictionary:**

```python
for key, value in person.items():
    print(key, ":", value)
```

---

🎯 **Exercise:**

* Make a dictionary with country-capital pairs:

  * `Nepal: Kathmandu`, `India: Delhi`, `China: Beijing`
* Print the capital of Nepal.
* Print all countries (keys) and capitals (values).

---


## 📅 Week 4: Functions, Files, Modules

### ✅ Day 10: Functions
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

---

🎯 **Exercise:**

* Write function to add two numbers.

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

✅ You now know:

* Python syntax
* Variables, loops, conditions
* Lists, dicts, functions, files

---

🎯 **Want more?**
I can also prepare:
✅ A printable PDF summary
✅ Homework worksheets with answers
✅ Short mini projects (like calculator, contact book, quiz app)

Tell me what you’d like next! 🚀

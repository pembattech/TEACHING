
**Example 1: Checking Data Types**

```python
# Define variables with different data types
age = 30  # Integer
pi = 3.14159  # Float
name = "Alice"  # String
is_adult = True  # Boolean

# Check the data types using type() function
print(f"Age: {age} (type: {type(age)})")
print(f"Pi: {pi} (type: {type(pi)})")
print(f"Name: {name} (type: {type(name)})")
print(f"Is Adult: {is_adult} (type: {type(is_adult)})")
```

**Output:**

```
Age: 30 (type: <class 'int'>)
Pi: 3.14159 (type: <class 'float'>)
Name: Alice (type: <class 'str'>)
Is Adult: True (type: <class 'bool'>)
```

**Example 2: Data Type Conversion**

```python
# Convert a string to an integer (be cautious of data loss)
user_age_string = input("Enter your age: ")
user_age_int = int(user_age_string)  # Conversion
print(f"Your age (as integer): {user_age_int}")

# Convert a float to a string
price = 19.99
price_string = str(price)
print(f"Price (as string): {price_string}")
```

**Output:**

```
Enter your age: 25
Your age (as integer): 25
Price (as string): 19.99
```


**Example 3: Working with Lists and Dictionaries**

```python
# Create a shopping list (list)
shopping_list = ["apples", "bread", "milk", 2]  # Can contain mixed data types

# Access and modify elements in the list
print(shopping_list[1])  # Access second element (bread)
shopping_list.append("eggs")  # Add an element (eggs)

# Create a dictionary to store student information
student = {"name": "Bob", "age": 22, "course": "Computer Science"}

# Access and update values in the dictionary
print(student["name"])  # Access the name (Bob)
student["age"] = 23  # Update the age

# Print the entire dictionary
print(student)
```

**Output:**

```
bread
['apples', 'bread', 'milk', 2, 'eggs']
Bob
{'name': 'Bob', 'age': 23, 'course': 'Computer Science'}
```

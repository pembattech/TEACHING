**1. User Input:**

```python
# Get user's name as input
name = input("What is your name? ")

# Get user's favorite number as an integer (using type conversion)
favorite_number = int(input("What is your favorite number? "))

print(f"Hello, {name}! Your favorite number is {favorite_number}.")
```


**2. Loops (For Loop):**

```python
# Print numbers from 1 to 5
for i in range(1, 6):
  print(i)
```



**3. Lists and String Manipulation:**

```python
# Create a list of fruits
fruits = ["apple", "banana", "orange"]

# Access the second element in the list
second_fruit = fruits[1]

# Add an element to the list
fruits.append("mango")

# Print the entire list
print(fruits)

# Join list elements into a string
fruit_string = ", ".join(fruits)
print(f"My favorite fruits are: {fruit_string}")
```


**4. Functions:**

```python
def greet(name):
  """Prints a greeting message with the provided name."""
  print(f"Hello, {name}!")

greet("Bob")  # Calling the function with an argument

# Function returning a value
def calculate_area(length, width):
  """Calculates the area of a rectangle."""
  return length * width

area = calculate_area(5, 3)
print(f"The area of the rectangle is: {area}")
```



## Playing with the datetime library in Python

Here's an example that demonstrates some functionalities of the `datetime` library:

```python
from datetime import datetime, timedelta

# Get the current date and time
now = datetime.now()
print(f"Current date and time: {now}")

# Access specific components of the datetime object
year = now.year
month = now.month
day = now.day
hour = now.hour
minute = now.minute
second = now.second

print(f"Year: {year}, Month: {month}, Day: {day}")
print(f"Time: {hour}:{minute}:{second}")

# Format the datetime object using strftime
formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")  # Year-Month-Day Hour:Minute:Second
print(f"Formatted date and time: {formatted_date}")

# Calculate a date in the future (adding days)
future_date = now + timedelta(days=7)  # Add 7 days to the current date
print(f"Date 7 days from now: {future_date}")

# Calculate the difference between two dates
past_date = datetime(2024, 6, 1)  # Create a specific date object
time_difference = now - past_date
print(f"Time difference between now and June 1st, 2024: {time_difference}")  # timedelta object

# Access individual components from the timedelta object
days_difference = time_difference.days
print(f"Difference in days: {days_difference}")
```



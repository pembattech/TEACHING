# 📚 Mini Project: Simple Contact Book

✅ Features:

* Add new contacts (name, phone)
* View all contacts
* Search contact by name
* Exit program


```python
# Simple Contact Book
contacts = {}

def add_contact():
    name = input("Enter contact name: ")
    phone = input("Enter phone number: ")
    contacts[name] = phone
    print(f"Contact {name} added.")

def view_contacts():
    if not contacts:
        print("No contacts found.")
    else:
        for name, phone in contacts.items():
            print(f"{name}: {phone}")

def search_contact():
    name = input("Enter name to search: ")
    if name in contacts:
        print(f"{name}'s number is {contacts[name]}")
    else:
        print(f"No contact found for {name}.")

def main():
    while True:
        print("\n==== Contact Book ====")
        print("1. Add contact")
        print("2. View contacts")
        print("3. Search contact")
        print("4. Exit")
        choice = input("Choose an option (1-4): ")

        if choice == "1":
            add_contact()
        elif choice == "2":
            view_contacts()
        elif choice == "3":
            search_contact()
        elif choice == "4":
            print("Goodbye!")
            break
        else:
            print("Invalid option. Try again.")

main()
```

---
## 🎯 **More mini projects?**


### 🧮 **1. Calculator (Add, Subtract, Multiply, Divide)**

#### 🔑 *Hints*:

* Use `input()` to get numbers and operator from the user.
* Use functions like `add(a, b)`, `subtract(a, b)`, etc.
* Use `if-elif` to determine which operation to perform.
* Use a loop to allow multiple calculations until the user exits.

#### 💡 *Features to Add*:

* Support decimal numbers using `float()`.
* Add modulus (`%`) and exponent (`**`) support.
* Option to exit or clear.

#### 📌 Code

<details>
<summary>🔽 Click here to view Calculator code</summary>

```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    return a / b if b != 0 else "❌ Error: Cannot divide by zero"

def modulus(a, b):
    return a % b

def exponent(a, b):
    return a ** b

print("🧮 Welcome to the Python Calculator")

while True:
    print("\nChoose Operation:")
    print("1. Add (+)")
    print("2. Subtract (-)")
    print("3. Multiply (*)")
    print("4. Divide (/)")
    print("5. Modulus (%)")
    print("6. Exponent (**)")
    print("7. Exit")

    choice = input("Enter your choice (1-7): ")

    if choice == '7':
        print("👋 Exiting Calculator. Goodbye!")
        break

    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
    except ValueError:
        print("❌ Invalid input! Please enter numbers only.")
        continue

    if choice == '1':
        print(f"Result: {add(num1, num2)}")
    elif choice == '2':
        print(f"Result: {subtract(num1, num2)}")
    elif choice == '3':
        print(f"Result: {multiply(num1, num2)}")
    elif choice == '4':
        print(f"Result: {divide(num1, num2)}")
    elif choice == '5':
        print(f"Result: {modulus(num1, num2)}")
    elif choice == '6':
        print(f"Result: {exponent(num1, num2)}")
    else:
        print("❌ Invalid choice! Please enter a number between 1 and 7.")
```
</details>

---

### 📋 **2. To-Do List (Saved in a File)**

#### 🔑 *Hints*:

* Store tasks in a list.
* Save and read tasks using `open()` with a `.txt` file.
* Use `append()` to add tasks and `remove()` or indexing to delete.
* Use a looped menu (`while True`) with options: Add, View, Remove, Exit.

#### 💡 *Features to Add*:

* Timestamp when task is added (`import datetime`).
* Mark tasks as done (e.g., "\[x]").
* Save tasks in a JSON format for structured data.
* Sort tasks by priority or date.

```python
with open("tasks.txt", "a") as f:
    f.write("Buy groceries\n")
```

---

### ❓ **3. Quiz Game with Score Tracking**


#### 🔑 *Hints to Write the Code*

1. **Use a list of dictionaries to store questions and answers**:

   * Each dictionary has keys: `"question"` and `"answer"`.
   * Example: `{"question": "What is 5 * 6?", "answer": "30"}`

2. **Import the `random` module**:

   * Use `random.shuffle(list)` to randomize the question order.

3. **Use a `for` loop to go through each question**:

   * Loop through the shuffled `questions` list.
   * Use `input()` to get the user's answer.

4. **Compare answers in a case-insensitive way**:

   * Use `.strip().lower()` for both user input and correct answer to avoid mismatch due to extra spaces or letter case.

5. **Track the score using a variable**:

   * Start with `score = 0`.
   * Increase the score if the answer is correct.

6. **Use `print()` for feedback**:

   * Show "Correct!" or "Wrong!" after each question.
   * Display final score at the end using `print(f"...")`.

#### 💡 *Features to Quiz Game*:

| Feature                            | Description                                                              |
| ---------------------------------- | ------------------------------------------------------------------------ |
| ✅ Randomized Questions             | Uses `random.shuffle()` to ask questions in a different order each time. |
| ✅ Score Tracking                   | Keeps track of how many answers the user got right.                      |
| ✅ Case-Insensitive Answer Checking | Uses `.lower()` and `.strip()` to handle user input variations.          |
| ✅ Instant Feedback                 | Tells the user if their answer is correct or not immediately.            |
| ✅ Final Score Display              | Shows the total score at the end of the quiz.                            |
| ✅ Easy to Extend                   | New questions can be added easily by appending to the `questions` list.  |


#### 📋 Quiz Questions
```python

questions = [
    {"question": "What is the capital of Nepal?", "answer": "Kathmandu"},
    {"question": "Which planet is known as the Red Planet?", "answer": "Mars"},
    {"question": "What is 5 * 6?", "answer": "30"},
    {"question": "What is the national bird of Nepal?", "answer": "Daphne"},
    {"question": "Who wrote the Ramayana?", "answer": "Valmiki"},
    {"question": "What is the chemical symbol for water?", "answer": "H2O"},
    {"question": "In which continent is the Sahara Desert located?", "answer": "Africa"},
    {"question": "Who is known as the Father of Computers?", "answer": "Charles Babbage"},
    {"question": "What is the largest mammal in the world?", "answer": "Blue Whale"},
    {"question": "Which country gifted the Statue of Liberty to the USA?", "answer": "France"}
]

```


#### 📌 Code

<details>
<summary>🔽 Click to view Python Quiz Code</summary>

```python
import random

questions = [
    {"question": "What is the capital of Nepal?", "answer": "Kathmandu"},
    {"question": "Which planet is known as the Red Planet?", "answer": "Mars"},
    {"question": "What is 5 * 6?", "answer": "30"},
    {"question": "What is the national bird of Nepal?", "answer": "Daphne"},
    {"question": "Who wrote the Ramayana?", "answer": "Valmiki"}
]

# Shuffle the list to make the question order random
random.shuffle(questions)

score = 0

print("\n🎮 Welcome to the Quiz Game! 🎮\n")

for q in questions:
    user_answer = input(q["question"] + " ")
    if user_answer.strip().lower() == q["answer"].lower():
        print("✅ Correct!\n")
        score += 1
    else:
        print(f"❌ Wrong! Correct answer is: {q['answer']}\n")

print(f"🏁 Final Score: {score}/{len(questions)}")
```

</details>

---
### 5. **Currency Converter**

#### 🔑 Hints:

* Use fixed exchange rates or free APIs.
* Take amount and currency type input.
* Calculate and display converted amount.
* Use functions for conversion logic.

#### 💡 Features:

* Support multiple currencies.
* Allow conversion in both directions.
* Fetch live rates using APIs (optional).
* Input validation.

---

### 6. **Password Generator**

#### 🔑 Hints:

* Use `random` and `string` modules.
* Allow user to choose length and character types.
* Combine letters, digits, and symbols randomly.

#### 💡 Features:

* Generate strong passwords.
* Option to save passwords to a file.
* Copy password to clipboard (with `pyperclip`).
* Avoid ambiguous characters.

---

### 7. **Number Guessing Game**

#### 🔑 Hints:

* Generate a random number.
* Use loops to get user guesses.
* Give hints like "too high" or "too low".
* Count number of attempts.

#### 💡 Features:

* Set difficulty levels.
* Limit number of attempts.
* Save high scores.
* Play again option.

---

### 8. **Simple Contact Book**

#### 🔑 Hints:

* Store contacts in a file or dictionary.
* Allow add, view, search, delete contacts.
* Use loops and conditionals for menu.
* Save and load data from file.

#### 💡 Features:

* Search by name or number.
* Edit existing contacts.
* Import/export contacts.
* Use JSON for structured data.

---

### 9. **Rock, Paper, Scissors Game**

#### 🔑 Hints:

* Use `random.choice` for computer.
* Get user input and validate.
* Compare choices to decide winner.
* Use loops to play multiple rounds.

#### 💡 Features:

* Track score for player and computer.
* Add "best of" rounds.
* User-friendly messages.
* Add variations like Rock-Paper-Scissors-Lizard-Spock.

---

### 10. **Weather App (CLI)**

#### 🔑 Hints:

* Use weather APIs like OpenWeatherMap.
* Fetch data with `requests`.
* Parse JSON response.
* Display temperature, conditions, etc.

#### 💡 Features:

* Search by city or zip code.
* Show forecasts.
* Cache recent searches.
* Handle errors gracefully.

---

### 11. **Markdown to HTML Converter**

#### 🔑 Hints:

* Use Python’s `markdown` library.
* Read `.md` files and convert to `.html`.
* Save output file.
* Handle links, headings, lists.

#### 💡 Features:

* Command line tool.
* Option to convert multiple files.
* Add CSS styling support.
* Watch folder for changes.

---

### 12. **Timer / Stopwatch**

#### 🔑 Hints:

* Use `time` module.
* Start, stop, reset functionality.
* Show elapsed time.
* Loop to update display.

#### 💡 Features:

* Count up and countdown timers.
* Sound alarm on finish.
* Save logs of time sessions.
* GUI with Tkinter (optional).

---

### 13. **File Organizer**

#### 🔑 Hints:

* Use `os` and `shutil` modules.
* Organize files by extension into folders.
* Loop through directory files.
* Move files to corresponding folders.

#### 💡 Features:

* Option to organize specific folder.
* Handle duplicates.
* Undo last organization.
* Scheduled run (cron jobs or task scheduler).

---

### 14. **Expense Tracker**

#### 🔑 Hints:

* Use a CSV or JSON file for storing expenses.
* Input expense details: amount, category, date.
* View summary by category or date.
* Use dictionaries and file I/O.

#### 💡 Features:

* Add, edit, delete expenses.
* Generate monthly reports.
* Visual charts with matplotlib (optional).
* Password protect data (optional).

---

### 🐍 **The `os` Module**


#### 📦 **1. What is the `os` module?**

The `os` module in Python provides a way to interact with the operating system’s functionalities—such as working with files and directories—using Python code.
It is great for scripting tasks, automation, and system-level work.


```python
import os
```


### 📁 **2. Commonly Used `os` Functions**

#### ✅ **Get current working directory**

```python
import os

print(os.getcwd())  # Shows the current working directory
```


#### 📂 **List files in a directory**

```python
print(os.listdir())  # Lists files and folders in the current directory
```

Or specify a path:

```python
print(os.listdir("/path/to/directory"))
```


#### 📁 **Create a new directory**

```python
os.mkdir("new_folder")  # Creates a single folder
```

Or recursively:

```python
os.makedirs("folder/subfolder")  # Creates nested directories
```


#### ❌ **Remove a directory**

```python
os.rmdir("new_folder")  # Removes an empty folder
```


#### 🔄 **Change current working directory**

```python
os.chdir("path/to/folder")
```


#### 📃 **Rename a file**

```python
os.rename("old.txt", "new.txt")
```


### 🌍 **3. Environment Variables**

```python
print(os.environ)  # Get all environment variables
print(os.environ.get("PATH"))  # Get a specific one
```

---

### 📌 **4. Path Utilities (with `os.path`)**

```python
import os

print(os.path.exists("file.txt"))  # Check if a file exists
print(os.path.isfile("file.txt"))  # Check if it's a file
print(os.path.isdir("folder"))     # Check if it's a folder
```

### 🧑💻 **5. Get the Current Username**

```python
import os

username = os.getlogin()  # Gets the name of the logged-in user
print("Current user:", username)
```

> ⚠️ Note: `os.getlogin()` may raise an error in some environments like IDEs or remote sessions. Use `getpass` as a fallback:

```python
import getpass

username = getpass.getuser()
print("Current user:", username)
```

---

### 🖥️ **6. Get Operating System Info**

#### Basic platform info using `os.name`:

```python
print("OS name:", os.name)  # 'posix', 'nt', or 'java'
```

#### Detailed system info using `platform` module:

```python
import platform

print("System:", platform.system())      # e.g., Windows, Linux, Darwin
print("Release:", platform.release())    # OS version
print("Version:", platform.version())    # Detailed version info
```

---

### 🌍 **7. Get Environment Variables**

```python
print(os.environ)  # Dictionary of all env variables
print(os.environ.get("HOME"))  # Get a specific one
```

---

### 🔧 **8. Path Utilities**

```python
print(os.path.exists("file.txt"))  # Check if file exists
print(os.path.isfile("file.txt"))  # Check if it's a file
print(os.path.isdir("folder"))     # Check if it's a directory
```

---

### 🧪 **9. Mini Project: OS Info Summary**

```python
import os
import platform
import getpass

print("=== System Information ===")
print("User:", getpass.getuser())
print("OS Name:", os.name)
print("System:", platform.system())
print("Release:", platform.release())
print("Version:", platform.version())
print("Current Directory:", os.getcwd())
```

---

🎯 **Exercises for OS module:**

1. Create a folder called "demo", navigate into it, and print the new working directory.



## 🐍 **Python Lesson: The `os` Module**

---

### 🎯 **Objective**

By the end of this lesson, students will be able to:

* Use Python's `os` module to interact with the operating system.
* Perform file, directory, and environment operations.
* Get OS-level information like platform and username.

---

### 📦 **1. What is the `os` module?**

Python’s built-in `os` module allows you to interact with the operating system in a platform-independent way.

```python
import os
```

---

### 📁 **2. Common File & Directory Operations**

| Function              | Description                   |
| --------------------- | ----------------------------- |
| `os.getcwd()`         | Get current working directory |
| `os.listdir(path)`    | List files in a directory     |
| `os.mkdir('name')`    | Create a directory            |
| `os.makedirs('path')` | Create nested directories     |
| `os.chdir('path')`    | Change working directory      |
| `os.rmdir('name')`    | Remove an empty directory     |
| `os.rename(old, new)` | Rename a file or directory    |

---



### 📚 **8. Summary**

* Use `os` to interact with files, folders, and the system.
* Use `os.getlogin()` or `getpass.getuser()` to get the current user.
* Use the `platform` module for detailed OS info.
* Combine both for scripts that adapt to different environments.

---

Would you like this lesson exported as a **PDF handout**, a **Jupyter Notebook**, or a **slide deck**?



Great! Let's move on to **Selenium**—a powerful tool used in Python for automating web browsers.

---

## 🌐 **Python Lesson: Introduction to Selenium**

---

### 🎯 **Objective**

By the end of this lesson, students will be able to:

* Understand what Selenium is used for.
* Install and set up Selenium in Python.
* Automate a web browser to open a website, fill forms, and click buttons.

---

### 🧾 **1. What is Selenium?**

**Selenium** is a Python library used for automating web browser interaction. It allows you to:

* Open websites
* Click buttons
* Fill out forms
* Scrape data
* Test web applications

> 🧠 Think of it as a robot that controls your browser.

---

### 💻 **2. Installing Selenium**

Use pip to install Selenium:

```bash
pip install selenium
```

You’ll also need a **WebDriver** for your browser:

* Chrome → [Download ChromeDriver](https://sites.google.com/chromium.org/driver/)
* Firefox → [Download GeckoDriver](https://github.com/mozilla/geckodriver/releases)

Put the WebDriver in your PATH or specify its path in your script.

---

### 🚀 **3. First Script: Open a Website**

```python
from selenium import webdriver

driver = webdriver.Chrome()  # Launches Chrome
driver.get("https://www.google.com")  # Opens Google
```

Make sure `chromedriver` is accessible or provide the full path:

```python
driver = webdriver.Chrome(executable_path="C:/path/to/chromedriver.exe")
```

---

### ✏️ **4. Interacting with Web Elements**

#### Search on Google:

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.get("https://www.google.com")

search_box = driver.find_element(By.NAME, "q")  # Locate search box
search_box.send_keys("Selenium Python")         # Type search text
search_box.send_keys(Keys.RETURN)               # Press Enter
```

---

### 🔍 **5. Locating Elements**

| Method            | Example                                         |
| ----------------- | ----------------------------------------------- |
| `By.ID`           | `find_element(By.ID, "username")`               |
| `By.NAME`         | `find_element(By.NAME, "q")`                    |
| `By.CLASS_NAME`   | `find_element(By.CLASS_NAME, "btn")`            |
| `By.TAG_NAME`     | `find_element(By.TAG_NAME, "input")`            |
| `By.CSS_SELECTOR` | `find_element(By.CSS_SELECTOR, "div.box")`      |
| `By.XPATH`        | `find_element(By.XPATH, "//input[@id='name']")` |

---

### ✅ **6. Best Practices**

* Always close the browser when done:

```python
driver.quit()
```

* Use `WebDriverWait` for dynamic pages:

```python
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

wait = WebDriverWait(driver, 10)
element = wait.until(EC.presence_of_element_located((By.ID, "some_id")))
```

---

### 🧪 **7. Mini Project: Search and Scrape Titles from Google**

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.get("https://www.google.com")

search_box = driver.find_element(By.NAME, "q")
search_box.send_keys("OpenAI ChatGPT")
search_box.send_keys(Keys.RETURN)

results = driver.find_elements(By.TAG_NAME, "h3")
for title in results:
    print(title.text)

driver.quit()
```

---

### 📚 **8. Summary**

* Selenium automates browser tasks with Python.
* It works by controlling a real browser through a WebDriver.
* It’s used in testing, scraping, and automation workflows.

---

Would you like to:

* Add form filling or login automation examples?
* Use Selenium with headless mode (no browser window)?
* Get this as a Jupyter Notebook or lesson PDF?


import sqlite3

conn = sqlite3.connect('grades.db')
cursor = conn.cursor()

cursor.execute('''
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        grade INTEGER
    )
''')

students = [("Alice", 88), ("Bob", 77), ("Charlie", 93)]
cursor.executemany("INSERT INTO students (name, grade) VALUES (?, ?)", students)

cursor.execute("SELECT name, grade FROM students WHERE grade > 80")
high_achievers = cursor.fetchall()

print("High-achieving students:")
for name, grade in high_achievers:
    print(f"{name}: {grade}")

conn.commit()
conn.close()


Awesome choice! Let's walk through **speech recognition in Python**—an exciting topic for voice-controlled apps, accessibility tools, and audio transcription.

---

## 🎤 **Python Lesson: Speech Recognition**

---

### 🎯 **Learning Objectives**

By the end of this lesson, students will be able to:

* Understand how speech recognition works in Python.
* Use the `speech_recognition` library to convert spoken words into text.
* Handle real-time microphone input or audio file transcription.

---

### 📦 **1. Installing Required Package**

Install the `speechrecognition` package (and `pyaudio` for mic input):

```bash
pip install SpeechRecognition
pip install pyaudio
```

> ⚠️ **Note:** On some systems, installing `pyaudio` might require additional setup (like `portaudio` on macOS/Linux). If it's hard to install, you can use audio files instead of a microphone.

---

### 📘 **2. Basic Setup**

```python
import speech_recognition as sr

recognizer = sr.Recognizer()
```

---

### 🎙️ **3. Speech to Text Using Microphone**

```python
import speech_recognition as sr

recognizer = sr.Recognizer()

with sr.Microphone() as source:
    print("Say something...")
    audio = recognizer.listen(source)

try:
    text = recognizer.recognize_google(audio)
    print("You said:", text)
except sr.UnknownValueError:
    print("Could not understand audio")
except sr.RequestError:
    print("Request to Google Speech API failed")
```

> ✅ Uses **Google Web Speech API** (free, online).

---

### 🔊 **4. Speech to Text from an Audio File**

Supported formats: `.wav`, `.aiff`, `.flac` (not MP3 directly).

```python
with sr.AudioFile("example.wav") as source:
    audio = recognizer.record(source)

text = recognizer.recognize_google(audio)
print("Transcription:", text)
```

---

### 🧠 **5. Other Recognizers (Offline/Cloud)**

* `recognize_google()` – free & online.
* `recognize_sphinx()` – offline but needs `pocketsphinx`.
* `recognize_ibm()`, `recognize_bing()`, etc. – cloud services with API keys.

---

### 🧪 **6. Mini Project: Voice Command App**

```python
import speech_recognition as sr

def listen_and_respond():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        audio = recognizer.listen(source)

    try:
        command = recognizer.recognize_google(audio)
        print(f"You said: {command}")
        if "hello" in command.lower():
            print("Hi there!")
        elif "weather" in command.lower():
            print("I can't check the weather yet, but I'm learning.")
    except Exception as e:
        print("Error:", e)

listen_and_respond()
```

---

### 🧯 **7. Troubleshooting Tips**

| Issue                   | Solution                                                            |
| ----------------------- | ------------------------------------------------------------------- |
| `pyaudio` won't install | Use `pipwin install pyaudio` (Windows) or install `portaudio` first |
| No input detected       | Check mic permissions or test with audio files                      |
| Inaccurate results      | Use `recognizer.adjust_for_ambient_noise(source)` before listening  |

---

### 📚 **8. Summary**

* `speech_recognition` makes it easy to transcribe audio in Python.
* Use `Microphone` for real-time input or `AudioFile` for pre-recorded audio.
* Google Speech API is easy and free for light usage.
* Combine with `pyttsx3` for voice assistants or `flask` for web-based tools.

---

Would you like to:

* Add **text-to-speech (TTS)** for a full voice assistant?
* Use **offline recognition** with PocketSphinx?
* Build a **GUI app** (with Tkinter or PyQt)?

Let me know how far you'd like to go!


Sure! Let's create a **simple chatbot in Python** using basic logic (no external AI or internet connection). This will help you understand the **foundations** of chatbot behavior like:

* Recognizing user input
* Responding with pre-defined messages
* Looping conversation

---

## 🤖 **Basic Python Chatbot**

### ✅ Features:

* Text-based interaction
* Pattern matching with `if` statements
* Runs in the terminal

---

### 🧾 **Step-by-Step Code**

```python
# Simple Python Chatbot

print("🤖 Chatbot: Hello! I'm Chatbot. Type 'bye' to exit.")

while True:
    user_input = input("You: ").lower()

    if user_input == 'hello':
        print("🤖 Chatbot: Hi there! How can I help you?")
    elif user_input == 'how are you':
        print("🤖 Chatbot: I'm just code, but I'm doing great! 😄")
    elif user_input == 'what is your name':
        print("🤖 Chatbot: I'm a simple Python chatbot.")
    elif user_input == 'bye':
        print("🤖 Chatbot: Goodbye! Have a great day!")
        break
    else:
        print("🤖 Chatbot: I didn't understand that. Try asking something else.")
```

---

### 🧪 Example Output:

```
🤖 Chatbot: Hello! I'm Chatbot. Type 'bye' to exit.
You: hello
🤖 Chatbot: Hi there! How can I help you?
You: what is your name
🤖 Chatbot: I'm a simple Python chatbot.
You: bye
🤖 Chatbot: Goodbye! Have a great day!
```

---

### 🧠 Want to Go Further?

You could enhance it with:

* **`re` (regex)** for pattern recognition
* **NLTK** or **spaCy** for language understanding
* **Speech integration** (using `speech_recognition` and `pyttsx3`)
* **GUI** (with Tkinter)
* **Machine learning models** (like GPT via API)

---

Would you like me to:

* Turn this into a **GUI chatbot**?
* Make it **voice-enabled**?
* Show how to connect it to **ChatGPT API**?

Let me know your goals!


Absolutely! Here's a clear and structured explanation of **`pip`**, ideal for teaching or learning the basics of Python package management.

---

## 📦 **Python Lesson: Understanding `pip`**

---

### 🎯 **Learning Objectives**

By the end of this lesson, students will be able to:

* Understand what `pip` is and why it's used.
* Install, uninstall, and manage Python packages using `pip`.
* Troubleshoot common `pip` issues.

---

### 📘 **1. What is `pip`?**

**`pip`** stands for **“Pip Installs Packages”**. It is the **default package manager** for Python.

> 🧠 It lets you install, upgrade, and remove **third-party libraries** that aren't part of the standard Python library.

---

### 🧰 **2. Basic pip Commands**

#### ✅ **Install a Package**

```bash
pip install package_name
```

**Example:**

```bash
pip install requests
```

#### 📤 **Uninstall a Package**

```bash
pip uninstall package_name
```

**Example:**

```bash
pip uninstall numpy
```

#### 📈 **Upgrade a Package**

```bash
pip install --upgrade package_name
```

**Example:**

```bash
pip install --upgrade flask
```

#### 📋 **List Installed Packages**

```bash
pip list
```

#### 🔍 **Check Info About a Package**

```bash
pip show package_name
```

---

### 📂 **3. Install from a Requirements File**

This is commonly used in projects to install all dependencies at once.

```bash
pip install -r requirements.txt
```

`requirements.txt` looks like:

```
flask==2.2.0
requests>=2.28.0
```

---

### 🔧 **4. Where pip Installs Packages**

By default, pip installs packages into the **site-packages** directory inside your Python environment.

You can check the install location with:

```bash
pip show package_name
```

---

### 🧪 **5. Virtual Environments + pip (Best Practice)**

For projects, it's best to use a **virtual environment** so that packages don’t interfere across projects:

```bash
python -m venv env
source env/bin/activate  # On Mac/Linux
env\Scripts\activate     # On Windows
pip install flask
```

---

### 🧯 **6. Troubleshooting pip**

| Problem                  | Solution                                             |
| ------------------------ | ---------------------------------------------------- |
| `pip: command not found` | Use `python -m pip install ...`                      |
| Permission denied        | Use `--user` or install inside a virtual environment |
| Proxy issues             | Use `--proxy` option                                 |
| SSL errors               | Upgrade pip: `python -m pip install --upgrade pip`   |

---

### 📚 **7. Summary**

* `pip` is used to manage Python packages.
* You can install, remove, and upgrade libraries.
* Always use virtual environments when working on projects.
* `requirements.txt` helps share dependencies easily.

---

Would you like a cheat sheet, PDF, or a beginner-friendly worksheet to go with this lesson?
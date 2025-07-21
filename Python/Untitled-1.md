## 🎤 **Python Lesson: Speech Recognition**

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


---

## 🤖 **Basic Python Chatbot**

### ✅ Features:

* Text-based interaction
* Pattern matching with `if` statements
* Runs in the terminal

---

### 🤖 **ChatBot Code**

```python

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

### 🧠 We Can Go Further With!

* **`re` (regex)** for pattern recognition
* **NLTK** or **spaCy** for language understanding
* **Speech integration** (using `speech_recognition` and `pyttsx3`)
* **GUI** (with Tkinter)
* **Machine learning models** (like GPT via API)

---


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


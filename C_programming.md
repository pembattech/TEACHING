## C Programming: A Detailed Guide with Examples

C is a powerful, general-purpose programming language known for its efficiency and flexibility. It's widely used for system programming, embedded systems, and as a foundation for other languages.

### Printing "Hello, World!" in C

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

### Explanation:
* **`#include <stdio.h>`:** This line includes the standard input/output library, which provides functions like `printf` for printing to the console.
* **`int main()`:** This is the main function where the program execution begins. The `int` return type indicates that the function returns an integer value.
* **`printf("Hello, World!\n");`:** This line prints the message "Hello, World!" to the console. The `\n` at the end adds a newline character.
* **`return 0;`:** This line indicates successful program termination and returns the value 0 to the operating system.

### Program Structure

A C program typically consists of:

* **Header files:**
  * Include necessary libraries using `#include`.
  * Example: `#include <stdio.h>` for input/output operations.
* **Preprocessor directives:**
  * Instructions for the preprocessor before compilation.
  * Example: `#define PI 3.14159` defines a constant.

* **Functions:**
  * Self-contained blocks of code that perform specific tasks.
  * Example:
  ```c
  int add(int a, int b) {
      return a + b;
  }
  ```
* **Main function:**
  * The entry point of the program.
  * Example:
  ```c
  int main() {
      // code here
      return 0;
  }
  ```
* **Comments:**
  * Explanatory text ignored by the compiler.
  * Single-line: `// This is a comment`
  * Multi-line: `/* This is a multi-line comment */`

### Basic Syntax

* **Keywords:** Reserved words with predefined meanings (e.g., `int`, `float`, `if`, `else`, `for`).
* **Identifiers:** Names given to variables, functions, etc. (e.g., `age`, `main`).
* **Data types:** Define the type of data a variable can hold:
    * **Primary Data Types**
        * `int`: integer (e.g., `int age = 25;`)
        * `float`: floating-point number (e.g., `float height = 1.75;`)
        * `double`: double-precision floating-point number (e.g., `double pi = 3.14159265;`)
        * `char`: character (e.g., `char initial = 'A';`)
        * `void`: no value (used for functions without return values)
    * **Derived Data Types**
        * `Arrays`: A collection of elements of the same data type.
        * `Structures`: A user-defined data type that groups variables of different data types under a single name.
        * `Union`: A special data typex that allows storing different data types in the same memory location.
        * `Pointer`: A variable that holds the memory address of another variable.
        * `Enum`: User-defined data type that consists of a set of named constants.
    
* **Variables:** Named storage locations for data.
  * Declaration: `data_type variable_name;`
  * Initialization: `data_type variable_name = value;`
* **Operators:** Symbols for performing operations:
  * Arithmetic: `+`, `-`, `*`, `/`, `%` (e.g., `result = num1 + num2;`)
  * Relational: `==`, `!=`, `<`, `>`, `<=`, `>=` (e.g., `if (age >= 18) ...`)
  * Logical: `&&`, `||`, `!` (e.g., `if (condition1 && condition2) ...`)
  * Assignment: `=` (e.g., `x = 5;`)
  * Increment/Decrement: `++`, `--` (e.g., `count++;`)
* **Expressions:** Combinations of variables, constants, and operators (e.g., `x + y * 2`).
* **Statements:** Instructions to be executed (e.g., `printf("Hello, world!");`).

### Control Flow

* **Conditional statements:**
  * `if`, `else if`, `else`:
  ```c
  if (condition) {
      // code if condition is true
  } else if (another_condition) {
      // code if another_condition is true
  } else {
      // code if no conditions are true
  }
  ```
* **Looping statements:**
  * `for`:
  ```c
  for (initialization; condition; increment) {
      // code to be executed
  }
  ```
  * `while`:
  ```c
  while (condition) {
      // code to be executed
  }
  ```
  * `do-while`:
  ```c
  do {
      // code to be executed
  } while (condition);
  ```
* **Switch statement:**
  ```c
  switch (expression) {
      case value1:
          // code for value1
          break;
      case value2:
          // code for value2
          break;
      default:
          // code for other values
  }
  ```
* **Break and continue:**
  * `break`: exits a loop prematurely.
  * `continue`: skips the current iteration of a loop.

### Functions

* Defined using `return_type function_name(parameters)` syntax.
* Example:
  ```c
  int add(int a, int b) {
      return a + b;
  }
  ```
* Called using `function_name(arguments)`.

### Arrays

* Collections of elements of the same data type.
* Example:
  ```c
  int numbers[5] = {1, 2, 3, 4, 5};
  ```
* Accessed using indices (e.g., `numbers[2]`).

### Pointers

* Variables that store memory addresses.
* Example:
  ```c
  int x = 10;
  int *ptr = &x; // ptr stores the address of x
  ```
* Used for dynamic memory allocation, passing arguments by reference, and accessing array elements efficiently.

### Structures

* User-defined data types that group related variables.
* Example:
  ```c
  struct Student {
      char name[50];
      int age;
      float marks;
  };
  ```
* Access members using dot (`.`) operator.

### Input/Output

* `stdio.h` header file provides functions for input/output.
* `printf` for formatted output (e.g., `printf("Hello, %s!", name);`).
* `scanf` for formatted input (e.g., `scanf("%d", &age);`).

### getch() in C
**`getch()`** is a non-standard function in C primarily used for console-based input. It's defined in the `conio.h` header file, which is commonly used on Windows platforms.

* **Functionality:**
    * **Reads a single character** from the keyboard.
    * **Does not echo** the character to the console.
    * **Waits for input** before proceeding.

* **Example of using getch:**
    ```c
    #include <stdio.h>
    #include <conio.h>

    int main() {
        printf("Hello, World!\n");

        getch();
    }
    ```

# Examples:
### Conditional Statements

```c
#include <stdio.h>

int main() {
    int num;

    printf("Enter a number: ");
    scanf("%d", &num);

    if (num > 0) {
        printf("%d is positive\n", num);
    } else if (num < 0) {
        printf("%d is negative\n", num);
    } else {
        printf("%d is zero\n", num);
    }

    return 0;
}
```

### Loops
```c
#include <stdio.h>

int main() {
    // For loop
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\n");

    // While loop
    int count = 1;
    while (count <= 5) {
        printf("%d ", count);
        count++;
    }
    printf("\n");

    // Do-while loop
    int j = 1;
    do {
        printf("%d ", j);
        j++;
    } while (j <= 5);
    printf("\n");

    return 0;
}
```

### Arrays
```c
#include <stdio.h>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};

    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");

    return 0;
}
```

### Functions
```c
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int num1 = 15, num2 = 25;
    int result = add(num1, num2);

    printf("Sum of %d and %d is %d\n", num1, num2, result);

    return 0;
}
```

## Examples Derived Data Types in C


### 1. Arrays

An array is a collection of elements of the same data type, stored in contiguous memory locations.

```c
#include <stdio.h>

int main() {
    int numbers[5] = {2, 4, 6, 8, 10};
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");
    return 0;
}
```

### 2. Structures

A structure is a user-defined data type that groups variables of different data types under a single name.

```c
#include <stdio.h>

struct Student {
    char name[50];
    int roll_no;
    float marks;
};

int main() {
    struct Student s1 = {"Alice", 123, 95.5};
    printf("Name: %s\n", s1.name);
    printf("Roll No: %d\n", s1.roll_no);
    printf("Marks: %.2f\n", s1.marks);
    return 0;
}
```

### 3. Pointers
A pointer is a variable that holds the memory address of another variable.

```c
#include <stdio.h>

int main() {
    int x = 10;
    int *ptr = &x; // Pointer to x

    printf("Value of x: %d\n", x);
    printf("Address of x: %p\n", &x);
    printf("Value of ptr: %p\n", ptr);
    printf("Value at ptr: %d\n", *ptr);
    return 0;
}
```


## Different Examples of Arrays in C

### 1.  Array of Structures
```c
#include <stdio.h>

struct Student {
    int roll_no;
    char name[20];
};

int main() {
    struct Student students[3] = {{1, "Alice"}, {2, "Bob"}, {3, "Charlie"}};
    
    for (int i = 0; i < 3; i++) {
        printf("Student %d: %s (Roll No: %d)\n", i+1, students[i].name, students[i].roll_no);
    }
    
    return 0;
}
```

### 2. Multidimensional Array
```c
#include <stdio.h>

int main() {
    int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    
    // Accessing elements
    printf("Element at row 1, column 2: %d\n", matrix[0][1]);
    
    return 0;
}
```

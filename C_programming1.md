### Sum & Average of 3 Numbers

```c
#include <stdio.h>

int main() {
    int num1, num2, num3;
    float sum, average;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &num1, &num2, &num3);

    sum = num1 + num2 + num3;
    average = sum / 3;

    printf("Sum: %.2f\n", sum);
    printf("Average: %.2f\n", average);

    return 0;
}
```

**Output:**
```
Enter three numbers: 4 5 6
Sum: 15.00
Average: 5.00
```

### Odd or Even

```c
#include <stdio.h>

int main() {
    int num;

    printf("Enter a number: ");
    scanf("%d", &num);

    if (num % 2 == 0)
        printf("%d is even.\n", num);
    else
        printf("%d is odd.\n", num);

    return 0;
}
```

**Output:**
```
Enter a number: 4
4 is even.
```

### Prime Number

```c
#include <stdio.h>

int main() {
    int num, i, isPrime = 1;

    printf("Enter a number: ");
    scanf("%d", &num);

    if (num <= 1) isPrime = 0;

    for (i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            isPrime = 0;
            break;
        }
    }

    if (isPrime)
        printf("%d is a prime number.\n", num);
    else
        printf("%d is not a prime number.\n", num);

    return 0;
}
```

**Output:**
```
Enter a number: 7
7 is a prime number.
```

### Fibonacci Series

```c
#include <stdio.h>

int main() {
    int n, t1 = 0, t2 = 1, nextTerm;

    printf("Enter the number of terms: ");
    scanf("%d", &n);

    printf("Fibonacci Series: ");

    for (int i = 1; i <= n; ++i) {
        printf("%d ", t1);
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }

    return 0;
}
```

**Output:**
```
Enter the number of terms: 5
Fibonacci Series: 0 1 1 2 3
```

### Find Largest among Three Numbers

```c
#include <stdio.h>

int main() {
    int num1, num2, num3;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &num1, &num2, &num3);

    if (num1 >= num2 && num1 >= num3)
        printf("%d is the largest number.\n", num1);
    else if (num2 >= num1 && num2 >= num3)
        printf("%d is the largest number.\n", num2);
    else
        printf("%d is the largest number.\n", num3);

    return 0;
}
```

**Output:**
```
Enter three numbers: 4 5 6
6 is the largest number.
```

### Program to Find Grade of Student

```c
#include <stdio.h>

int main() {
    int marks;

    printf("Enter the marks: ");
    scanf("%d", &marks);

    if (marks >= 90)
        printf("Grade A\n");
    else if (marks >= 80)
        printf("Grade B\n");
    else if (marks >= 70)
        printf("Grade C\n");
    else if (marks >= 60)
        printf("Grade D\n");
    else
        printf("Grade F\n");

    return 0;
}
```

**Output:**
```
Enter the marks: 85
Grade B
```


### Character is Vowel or Consonant

```c
#include <stdio.h>

int main() {
    char c;
    int isVowel;

    printf("Enter an alphabet: ");
    scanf("%c", &c);

    isVowel = (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||
               c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U');

    if (isVowel)
        printf("%c is a vowel.\n", c);
    else
        printf("%c is a consonant.\n", c);

    return 0;
}
```

**Output:**
```
Enter an alphabet: a
a is a vowel.
```

### Find Reverse of a Number

```c
#include <stdio.h>

int main() {
    int num, reversed = 0, remainder;

    printf("Enter an integer: ");
    scanf("%d", &num);

    while (num != 0) {
        remainder = num % 10;
        reversed = reversed * 10 + remainder;
        num /= 10;
    }

    printf("Reversed number: %d\n", reversed);

    return 0;
}
```

**Output:**
```
Enter an integer: 123
Reversed number: 321
```

### Sum of N Natural Numbers

```c
#include <stdio.h>

int main() {
    int n, sum = 0;

    printf("Enter a positive integer: ");
    scanf("%d", &n);

    for (int i = 1; i <= n; ++i) {
        sum += i;
    }

    printf("Sum of the first %d natural numbers: %d\n", n, sum);

    return 0;
}
```

**Output:**
```
Enter a positive integer: 5
Sum of the first 5 natural numbers: 15
```

### Sum of Squares of N Natural Numbers

```c
#include <stdio.h>

int main() {
    int n, sum = 0;

    printf("Enter a positive integer: ");
    scanf("%d", &n);

    for (int i = 1; i <= n; ++i) {
        sum += i * i;
    }

    printf("Sum of squares of the first %d natural numbers: %d\n", n, sum);

    return 0;
}
```

**Output:**
```
Enter a positive integer: 3
Sum of squares of the first 3 natural numbers: 14
```

### Find and Display Fibonacci Series

(Already covered above)

### C Program for Palindrome Number

```c
#include <stdio.h>

int main() {
    int num, reversed = 0, remainder, original;

    printf("Enter an integer: ");
    scanf("%d", &num);

    original = num;

    while (num != 0) {
        remainder = num % 10;
        reversed = reversed * 10 + remainder;
        num /= 10;
    }

    if (original == reversed)
        printf("%d is a palindrome.\n", original);
    else
        printf("%d is not a palindrome.\n", original);

    return 0;
}
```

**Output:**
```
Enter an integer: 121
121 is a palindrome.
```

### Convert Celsius to Fahrenheit

```c
#include <stdio.h>

int main() {
    float celsius, fahrenheit;

    printf("Enter temperature in Celsius: ");
    scanf("%f", &celsius);

    fahrenheit = (celsius * 9 / 5) + 32;

    printf("%.2f Celsius = %.2f Fahrenheit\n", celsius, fahrenheit);

    return 0;
}
```

**Output:**
```
Enter temperature in Celsius: 37
37.00 Celsius = 98.60 Fahrenheit
```

### Convert Fahrenheit to Celsius

```c
#include <stdio.h>

int main() {
    float fahrenheit, celsius;

    printf("Enter temperature in Fahrenheit: ");
    scanf("%f", &fahrenheit);

    celsius = (fahrenheit - 32) * 5 / 9;

    printf("%.2f Fahrenheit = %.2f Celsius\n", fahrenheit, celsius);

    return 0;
}
```

**Output:**
```
Enter temperature in Fahrenheit: 98.6
98.60 Fahrenheit = 37.00 Celsius
```

### Pyramid Star Pattern

```c
#include <stdio.h>

int main() {
    int rows, i, j, space;

    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    for (i = 1; i <= rows; i++) {
        for (space = 1; space <= rows - i; space++)
            printf("  ");
        for (j = 1; j <= 2 * i - 1; j++)
            printf("* ");
        printf("\n");
    }

    return 0;
}
```

**Output:**
```
Enter the number of rows: 5
        * 
      * * * 
    * * * * * 
  * * * * * * * 
* * * * * * * * *
```

### Different Swapping Programs

```c
#include <stdio.h>

//

 Swapping using a temporary variable
void swap_temp(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Swapping without using a temporary variable
void swap_no_temp(int *a, int *b) {
    *a = *a + *b;
    *b = *a - *b;
    *a = *a - *b;
}

int main() {
    int x = 5, y = 10;

    printf("Before swapping: x = %d, y = %d\n", x, y);
    swap_temp(&x, &y);
    printf("After swapping using temp variable: x = %d, y = %d\n", x, y);
    
    swap_no_temp(&x, &y);
    printf("After swapping without temp variable: x = %d, y = %d\n", x, y);

    return 0;
}
```

**Output:**
```
Before swapping: x = 5, y = 10
After swapping using temp variable: x = 10, y = 5
After swapping without temp variable: x = 5, y = 10
```

### Reverse a String

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[100], temp;
    int i, j;

    printf("Enter a string: ");
    gets(str);

    j = strlen(str) - 1;

    for (i = 0; i < j; i++, j--) {
        temp = str[i];
        str[i] = str[j];
        str[j] = temp;
    }

    printf("Reversed string: %s\n", str);

    return 0;
}
```

**Output:**
```
Enter a string: hello
Reversed string: olleh
```

### Palindrome String

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[100], rev[100];
    int len, i, j;

    printf("Enter a string: ");
    gets(str);

    len = strlen(str);
    j = len - 1;

    for (i = 0; i < len; i++) {
        rev[i] = str[j];
        j--;
    }
    rev[i] = '\0';

    if (strcmp(str, rev) == 0)
        printf("%s is a palindrome.\n", str);
    else
        printf("%s is not a palindrome.\n", str);

    return 0;
}
```

**Output:**
```
Enter a string: radar
radar is a palindrome.
```
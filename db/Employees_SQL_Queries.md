```sql
CREATE TABLE Employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    department VARCHAR(50),
    salary DECIMAL(10, 2),
    join_year INT,
    gender VARCHAR(10)
);
```

* `id` is an integer and primary key.
* `name` is a variable-length string up to 100 characters, required.
* `department` is a string up to 50 chars.
* `salary` is a decimal number with 2 decimal places.
* `join_year` is an integer.
* `gender` is a string (e.g., 'Male', 'Female', etc.).


| id  | Name           | Department | Salary   | Join Year | Gender |
|------|----------------|------------|----------|-----------|--------|
| 1    | Alice Johnson  | HR         | 55,000.00| 2018      | Female |
| 2    | Bob Anderson   | IT         | 72,000.00| 2021      | Male   |
| 3    | Carol Smith    | Finance    | 48,000.00| 2019      | Female |
| 4    | David Wilson   | IT         | 65,000.00| 2020      | Male   |
| 5    | Eva Thompson   | Marketing  | 47,000.00| 2017      | Female |
| 6    | Franklin Davis | HR         | 53,000.00| 2022      | Male   |
| 7    | Grace Lee      | IT         | 68,000.00| 2023      | Female |
| 8    | Hank Miller    | Finance    | 60,000.00| 2016      | Male   |
| 9    | Ivy Nelson     | Marketing  | 45,000.00| 2021      | Female |
| 10   | Jason Wilson   | IT         | 72,000.00| 2019      | Male   |


<details><summary>Insert code (<strong>DON'T WRITE</strong>)</summary>


```sql
INSERT INTO Employees (id, name, department, salary, join_year, gender) VALUES
(1, 'Alice Johnson', 'HR', 55000.00, 2018, 'Female'),
(2, 'Bob Anderson', 'IT', 72000.00, 2021, 'Male'),
(3, 'Carol Smith', 'Finance', 48000.00, 2019, 'Female'),
(4, 'David Wilson', 'IT', 65000.00, 2020, 'Male'),
(5, 'Eva Thompson', 'Marketing', 47000.00, 2017, 'Female'),
(6, 'Franklin Davis', 'HR', 53000.00, 2022, 'Male'),
(7, 'Grace Lee', 'IT', 68000.00, 2023, 'Female'),
(8, 'Hank Miller', 'Finance', 60000.00, 2016, 'Male'),
(9, 'Ivy Nelson', 'Marketing', 45000.00, 2021, 'Female'),
(10, 'Jason Wilson', 'IT', 72000.00, 2019, 'Male');
```
</details>
---
<details><summary>Show all records from the Employees table</summary>

```sql
SELECT * FROM Employees;
```

</details>


<details><summary>Select only the names and salaries of all employees</summary>

```sql
SELECT name, salary FROM Employees;
```

</details>

<details><summary>List all employees who work in the 'HR' department</summary>

```sql
SELECT * FROM Employees WHERE department = 'HR';
```

</details>

<details><summary>Show all employees who earn more than 50,000</summary>

```sql
SELECT * FROM Employees WHERE salary > 50000;
```

</details>

<details><summary>List employees who joined after 2020</summary>

```sql
SELECT * FROM Employees WHERE join_year > 2020;
```

</details>

---

### 🔹 Filtering with Conditions

<details><summary>Find all male employees in the 'IT' department</summary>

```sql
SELECT * FROM Employees WHERE gender = 'Male' AND department = 'IT';
```

</details>

<details><summary>Get all employees whose salary is between 40,000 and 70,000</summary>

```sql
SELECT * FROM Employees WHERE salary BETWEEN 40000 AND 70000;
```

</details>

<details><summary>List employees whose name starts with 'A'</summary>

```sql
SELECT * FROM Employees WHERE name LIKE 'A%';
```

</details>

<details><summary>Show employees not in the 'Finance' department</summary>

```sql
SELECT * FROM Employees WHERE department != 'Finance';
```

</details>

<details><summary>Get employees who joined in 2019 or 2020</summary>

```sql
SELECT * FROM Employees WHERE join_year IN (2019, 2020);
```

</details>

---

### 🔹 Sorting

<details><summary>List all employees ordered by salary in descending order</summary>

```sql
SELECT * FROM Employees ORDER BY salary DESC;
```

</details>

<details><summary>Show employees sorted by department (A–Z) and salary (high to low)</summary>

```sql
SELECT * FROM Employees ORDER BY department ASC, salary DESC;
```

</details>

---

### 🔹 Aggregations

<details><summary>Count the number of employees</summary>

```sql
SELECT COUNT(*) AS total_employees FROM Employees;
```

</details>

<details><summary>Find the average salary of all employees</summary>

```sql
SELECT AVG(salary) AS average_salary FROM Employees;
```

</details>

<details><summary>Find the highest and lowest salary in the company</summary>

```sql
SELECT MAX(salary) AS highest_salary, MIN(salary) AS lowest_salary FROM Employees;
```

</details>

---

### 🔹 Grouping

<details><summary>Count how many employees work in each department</summary>

```sql
SELECT department, COUNT(*) AS employee_count
FROM Employees
GROUP BY department;
```

</details>

<details><summary>Find average salary per department</summary>

```sql
SELECT department, AVG(salary) AS avg_salary
FROM Employees
GROUP BY department;
```

</details>

<details><summary>Show total salary paid to employees per department</summary>

```sql
SELECT department, SUM(salary) AS total_salary
FROM Employees
GROUP BY department;
```

</details>

<details><summary>Count number of employees per join year</summary>

```sql
SELECT join_year, COUNT(*) AS employee_count
FROM Employees
GROUP BY join_year;
```

</details>

<details><summary>List departments with more than 5 employees</summary>

```sql
SELECT department, COUNT(*) AS employee_count
FROM Employees
GROUP BY department
HAVING COUNT(*) > 5;
```

</details>

---

### 🔹 Advanced Filtering & Analysis

<details><summary>Find departments where the average salary is greater than 60,000</summary>

```sql
SELECT department, AVG(salary) AS avg_salary
FROM Employees
GROUP BY department
HAVING AVG(salary) > 60000;
```

</details>

<details><summary>List employees whose salary is above the company average</summary>

```sql
SELECT * FROM Employees
WHERE salary > (SELECT AVG(salary) FROM Employees);
```

</details>

<details><summary>Show the top 3 highest-paid employees</summary>

```sql
SELECT * FROM Employees
ORDER BY salary DESC
LIMIT 3;
```

</details>

<details><summary>Get employees who have the same salary as someone else</summary>

```sql
SELECT * FROM Employees
WHERE salary IN (
    SELECT salary
    FROM Employees
    GROUP BY salary
    HAVING COUNT(*) > 1
);
```

</details>

<details><summary>Show employees whose name contains 'son'</summary>

```sql
SELECT * FROM Employees
WHERE name LIKE '%son%';
```

</details>

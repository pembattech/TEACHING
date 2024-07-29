Here's an example demonstrating CRUD operations with a Python connection to a SQLite database using the `sqlite3` library:

```python
import sqlite3

# Define database path
database_path = "my_database.db"


def create_table():
  connection = sqlite3.connect(database_path)
  cursor = connection.cursor()

  cursor.execute("""CREATE TABLE IF NOT EXISTS tasks (
                      id INTEGER PRIMARY KEY AUTOINCREMENT,
                      title TEXT NOT NULL,
                      completed BOOLEAN DEFAULT FALSE
                  )""")

  connection.commit()
  connection.close()


def insert_task(title):
  connection = sqlite3.connect(database_path)
  cursor = connection.cursor()

  cursor.execute("INSERT INTO tasks (title) VALUES (?)", (title,))

  connection.commit()
  connection.close()


def get_all_tasks():
  connection = sqlite3.connect(database_path)
  cursor = connection.cursor()

  cursor.execute("SELECT * FROM tasks")
  tasks = cursor.fetchall()

  connection.close()
  return tasks


def update_task(task_id, title, completed):
  connection = sqlite3.connect(database_path)
  cursor = connection.cursor()

  cursor.execute("""UPDATE tasks SET title = ?, completed = ? WHERE id = ?""", (title, completed, task_id))

  connection.commit()
  connection.close()


def delete_task(task_id):
  connection = sqlite3.connect(database_path)
  cursor = connection.cursor()

  cursor.execute("DELETE FROM tasks WHERE id = ?", (task_id,))

  connection.commit()
  connection.close()


create_table()  # Create the table if it doesn't exist

insert_task("Learn Python")
insert_task("Finish this tutorial")

tasks = get_all_tasks()
print("All tasks:")
for task in tasks:
  print(f"- {task[1]} (completed: {task[2]})")

update_task(1, "Master Python", True)

tasks = get_all_tasks()
print("\nTasks after update:")
for task in tasks:
  print(f"- {task[1]} (completed: {task[2]})")

delete_task(2)

tasks = get_all_tasks()
print("\nTasks after deletion:")
for task in tasks:
  print(f"- {task[1]} (completed: {task[2]})")
```

This example defines functions for each CRUD operation:

* `create_table`: Creates the `tasks` table if it doesn't exist.
* `insert_task`: Inserts a new task with a title into the table.
* `get_all_tasks`: Retrieves all tasks from the table.
* `update_task`: Updates an existing task based on its ID.
* `delete_task`: Deletes a task from the table based on its ID.

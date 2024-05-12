"""
### 1. Conditional Statements:

#### `if`, `elif`, `else`:
- Allows execution of different blocks of code based on conditions.
  
  ```python
  x = 10
  if x > 0:
      print("Positive")
  elif x == 0:
      print("Zero")
  else:
      print("Negative")
  ```

### 2. Looping Statements:

#### `for` Loop:
- Iterates over a sequence (like lists, tuples, strings, or dictionaries).

  ```python
  for item in [1, 2, 3, 4]:
      print(item)
  ```

#### `while` Loop:
- Executes a block of code as long as a specified condition is `True`.

  ```python
  count = 0
  while count < 5:
      print(count)
      count += 1
  ```

### 3. Control Flow Keywords:

#### `break`:
- Exits the loop prematurely based on a condition.

  ```python
  for letter in 'Python':
      if letter == 'h':
          break
      print('Current Letter :', letter)
  ```

#### `continue`:
- Skips the current iteration of a loop and continues with the next iteration.

  ```python
  for letter in 'Python':
      if letter == 'h':
          continue
      print('Current Letter :', letter)
  ```

#### `pass`:
- Acts as a placeholder, used when a statement is required syntactically but you want to do nothing.

  ```python
  def my_function():
      pass  # Placeholder for future code implementation
  ```

### 4. Exception Handling:

#### `try`, `except`, `finally`:
- Allows handling of exceptions or errors in code.
  
  ```python
  try:
      result = 10 / 0
  except ZeroDivisionError:
      print("Error: Division by zero")
  finally:
      print("This block always executes")
  ```

These control structures in Python enable you to create dynamic, conditional, and iterative behavior within your code, allowing for more complex and versatile program flow and logic.

"""
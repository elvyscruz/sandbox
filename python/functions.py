"""

### Function Definition:
- **`def` Keyword**: Defines a function.
- **Syntax**:
  ```python
  def function_name(parameters):
      # Function body
      return value  # Optional
  ```

### Parameters and Arguments:
- **Parameters**: Variables listed in the function definition.
- **Arguments**: Actual values passed to a function when it's called.
- **Example**:
  ```python
  def greet(name):
      print("Hello,", name)
  
  greet("Alice")  # "Alice" is the argument
  ```

### Return Statement:
- **`return`**: Specifies the value returned by the function.
- **Multiple Returns**: Functions can return multiple values using tuples or other data structures.
- **Example**:
  ```python
  def add(a, b):
      return a + b
  
  result = add(2, 3)  # result = 5
  ```

### Scope of Variables:
- **Local Variables**: Defined within the function, limited to the function's scope.
- **Global Variables**: Accessible within the function if declared `global`.
- **Example**:
  ```python
  x = 10  # Global variable
  
  def my_function():
      y = 20  # Local variable
      global z
      z = 30  # Global variable inside function
  ```

### Default and Keyword Arguments:
- **Default Arguments**: Parameters with default values.
- **Keyword Arguments**: Passed with the parameter name.
- **Example**:
  ```python
  def greet(name="Guest", message="Hello"):
      print(message, name)
  
  greet()  # Output: Hello Guest
  greet(message="Hi")  # Output: Hi Guest
  ```

### Anonymous Functions (Lambda Functions):
- **`lambda`**: Creates small, anonymous functions.
- **Syntax**:
  ```python
  double = lambda x: x * 2
  ```

### Recursion:
- **Function calling itself**: Useful for solving problems where a solution depends on solutions to smaller instances of the same problem.
- **Example**:
  ```python
  def factorial(n):
      if n == 0 or n == 1:
          return 1
      else:
          return n * factorial(n-1)
  ```

Functions in Python are versatile and powerful tools for organizing code, promoting reusability, and encapsulating logic, enabling better code structure and maintainability.

"""
"""

### List Properties:

1. **Ordered**: Lists maintain the order of elements as they are inserted.

2. **Mutable**: Elements in a list can be changed after creation.

3. **Allows Duplicates**: Lists can contain duplicate elements.

### List Operations:

1. **Creating Lists**:
   - **Syntax**: Lists are created using square brackets `[]`.
   - **Example**:
     ```python
     my_list = [1, 2, 'apple', True]
     ```

2. **Accessing Elements**:
   - **Indexing**: Accessing individual elements using index numbers (starting from 0).
   - **Slicing**: Extracting a portion of a list using slicing notation (`start:stop:step`).

3. **List Methods**:
   - Various built-in methods for list manipulation:
     - `append()`, `extend()`, `insert()`: Adding elements to a list.
     - `remove()`, `pop()`, `clear()`: Removing elements from a list.
     - `index()`, `count()`: Searching and counting elements.
     - `sort()`, `reverse()`: Sorting and reversing elements.
  
4. **List Comprehension**:
   - Concise way to create lists based on existing lists or iterables.
   - **Example**:
     ```python
     squares = [x**2 for x in range(5)]  # [0, 1, 4, 9, 16]
     ```

5. **List Concatenation and Repetition**:
   - Combining lists using `+` operator or repeating elements using `*` operator.
   - **Example**:
     ```python
     list1 = [1, 2, 3]
     list2 = [4, 5, 6]
     concatenated = list1 + list2  # [1, 2, 3, 4, 5, 6]
     repeated = list1 * 3  # [1, 2, 3, 1, 2, 3, 1, 2, 3]
     ```

6. **List Properties and Functions**:
   - `len()`: Getting the length (number of elements) of a list.
   - `min()`, `max()`, `sum()`: Getting the minimum, maximum, and sum of elements in a list.

Lists are versatile data structures in Python, offering a wide range of operations for manipulation, iteration, and data storage. Understanding lists is fundamental for managing collections of elements efficiently within Python programs.
"""



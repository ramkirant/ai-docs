# Python Basics

Welcome to the Python Basics guide. Learn everything you need to know to get started with Python programming.

## Variables and Data Types

Variables are containers for storing data values. Python has various data types including: 

- **Integers**: Whole numbers like `5`, `-10`, `0`
- **Floats**: Decimal numbers like `3.14`, `-2.5`
- **Strings**: Text enclosed in quotes like `"Hello"` or `'World'`
- **Booleans**: Truth values `True` or `False`
- **Lists**: Ordered collections like `[1, 2, 3]`
- **Dictionaries**: Key-value pairs like `{"name": "John", "age": 30}`

Example:
```python
age = 25
price = 9.99
name = "Python"
is_active = True
```

## Loops

Python supports `for` and `while` loops for iteration.

### For Loops

Iterate over a sequence:

```python
for i in range(5):
    print(i)  # Prints 0, 1, 2, 3, 4

fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

### While Loops

Execute code while a condition is true:

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

## Lists

Ordered collections that allow multiple data types:

```python
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]

# Access elements by index
print(fruits[0])  # Output: apple

# Add elements
fruits.append("orange")

# Remove elements
fruits.remove("banana")
```

## Conditional Statements

Control flow using `if`, `elif`, and `else`:

```python
age = 18

if age >= 18:
    print("You are an adult")
elif age >= 13:
    print("You are a teenager")
else:
    print("You are a child")
```
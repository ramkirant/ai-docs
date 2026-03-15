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

## Functions

Functions are reusable blocks of code that perform specific tasks. Define them using the `def` keyword:

```python
def greet(name):
    return f"Hello, {name}!"

result = greet("Alice")
print(result)  # Output: Hello, Alice!
```

Functions can have multiple parameters and return values:

```python
def add(a, b):
    return a + b

sum_result = add(5, 3)
print(sum_result)  # Output: 8
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

## Lists and Dictionaries

### Lists

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

### Dictionaries

Store key-value pairs for easy lookup:

```python
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Access values
print(person["name"])  # Output: John

# Add or update
person["email"] = "john@example.com"

# Remove
del person["city"]
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

## Classes and Objects

Object-oriented programming allows you to create reusable blueprints:

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        return f"{self.name} says woof!"
    
    def get_age(self):
        return f"{self.name} is {self.age} years old"

# Create instances
dog1 = Dog("Buddy", 3)
print(dog1.bark())  # Output: Buddy says woof!
print(dog1.get_age())  # Output: Buddy is 3 years old
```

## Error Handling

Handle errors gracefully with try-except blocks:

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    print("This always executes")
```

## File Operations

Read and write files:

```python
# Write to file
with open("example.txt", "w") as file:
    file.write("Hello, World!")

# Read from file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
```

## Next Steps

Now that you've learned the basics, explore more advanced topics like:
- List comprehensions
- Decorators
- Generators
- Regular expressions
- Working with libraries and modules

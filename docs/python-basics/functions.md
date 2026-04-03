# Functions
## Basic function syntax
::: tip ▶Example: Basic function syntax
```python
def function_name(parameters)
    """docstring"""
    ## Function Body
    return 0
```
:::
## Default parameters
::: tip ▶Example: Default parameters
```python
def greet(name="Guest")
    print(f"Hello {name}")
```
If the caller don't pass the function argument, python will assign the default parameter to it. 
:::
## Function arguments
### Arguments by position
#### Positional arguments
::: tip ▶Example: Positional arguments
```python
def add_numbers(num1, num2, num3):
    return num1+num2+num3
print(add_numbers(1,2,3))
```
Values to the arguments are assigned based on the position.
:::
#### Variable Positional arguments
::: tip ▶Example: Variable Positional arguments
```python
def print_numbers(*args)
    for val in args:
        print(val)

print_numbers(1,2,3,4,5,6,"Krish")
```
:::
### Arguments by Keyword
#### Keyword arguments
::: tip ▶Example: Keyword Arguments
```python
def add_numbers(num1, num2, num3):
    return num1+num2+num3
print(add_numbers(num1=1, num2=2, num3=3))
```
Values to the arguments are passed as key value pairs
:::
#### Variable keyword arguments
::: tip ▶Example: Variable Keyword arguments
```python
def print_details(**kwargs):
    for key,value in kwargs.items():
        print(f"{key}:{value}")
print_detail(name="Krish", age="32", country="India")
```
:::
### Positional and keyword arguments in a single call
::: tip ▶Example: Function with both positional and keyword arguments
```python
def print_detail1(*args, **kwargs):
    for num in args:
        print(num)

    for key,value in kwargs.items():
        print(f"{key}:{value}")

print_detail1(1,2,3,4,5,name="Krish", age="32", country="India")
```
We need to always mention positional arguments first followed by keyword arguments
:::
# Dictionaries

::: info Definition
Dictionaries are unordered collection of items. They store data in key-value pairs. Keys must be unique and immutable. Values are mutable.
:::

## Create a Dictionary
::: tip ▶Example: Create a Dictionary
```python
student={"name":"Krish","age":32,"grade":24}
print(student)
```
💡If the keys are not unique, It will replace the value of the older key.
:::

::: tip ▶Example: Create Empty Dictionary
```python
empty_dict={}
```
:::

## Accessing the elements of the Dictionary
::: tip ▶Example: Access dictionary elements
```python
student={"name":"Krish","age":32,"grade":24}

## Access using the keys
print(student["grade"])

## Access using the get() method
print(student.get("grade"))

```
💡If the key don't exist it would return None
:::

## Modifying the elements of the Dictionary
::: tip ▶Example: Modifying dictionary elements
```python
student={"name":"Krish","age":32,"grade":"A"}
student["age"]=33
```
:::

## Deleting an element from the Dictionary
::: tip ▶Example: Delete dictionary elements
```python
student={"name":"Krish","age":32,"grade":"A"}
del student["age"]
```
:::

## Dictionary methods
::: tip ▶Example: Dictionary methods
```python
student={"name":"Krish","age":32,"grade":"A"}

##Fetch all the keys of the dictionary
print(student.keys())

## Fetch all the values of the dictionary
print(student.values())

## Fetch all the items (key value pairs) of the dictionary
print(student.items())
```
💡The methods keys(), values() or items() can be used for iterating the dictionary. 
:::

## Shallow Copy
::: tip ▶Example: Shallow Copy ```dict.copy()```
```python
student={"name":"Krish","age":32,"grade":"A"}
student_copy = student.copy()
```
💡Shallow copy will create a copy of the existing dictionary. Modifying the original or copy will not impact the other. 
:::

## Dictionary Comprehension
::: tip ▶Example: Dictionary Comprehension
```python
squares={x:x**2 for x in range(5)}
print(squares)
```
```output
{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
```
Dictionary Comprehension is a concise way to create dictionaries. It consists of an expression pair (key: value) followed by a for statement inside curly braces {}.
:::

### Conditional Dictionary Comprehension
::: tip ▶Example: Conditional Dictionary Comprehension
```python
evens={x:x**2 for x in range(10) if x%2==0}
print(evens)
```
```output
{0: 0, 2: 4, 4: 16, 6: 36, 8: 64}
```
:::
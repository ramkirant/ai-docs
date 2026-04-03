# Lambda Functions
:::info Definition
Lambda functions are small anonymous functions defined using the lambda keyword. They can have any number of arguments but can have only one expression. They are commonly used for short operations or passed as arguments for higher order functions. 
:::
## Basic Lambda function
::: tip ▶Example: Basic Lambda function
```python
## Lambda function to add two numbers
addition = lambda a,b:a+b
print(addition(3,4))
```
:::
## Lambda function with conditionals
::: tip ▶Example: Lambda function with conditionals
```python
## Lambda function to find out if a number is even
even = lambda a:a%2==0
print(even(a))
```
:::
## Map function
::: tip ▶Example: Map function ```map```
```python
numbers=[1,2,3,4,5]
list(map(lambda x:x*x, numbers))
```
Map function will apply the lambda to all the items of a list
:::
### Map multiple iterables
::: tip ▶Example: Map multiple iterables
```python
list1=[1,2,3]
list2=[4,5,6]
list(map(lambda x,y=x+y), list1, list2)
```
```output
[5,6,9]
```
- We can perform operations on multiple lists using map function.
- If the lists have differing number of elements, the output will contain the number of elements as of the smaller list. 
- In the above example, consider list1 is [1,2,3,4], if we perform the map function, it will still have three elements in the output. 
:::
## Filter function
::: tip ▶Example: Filter function
```python
lst=[1,2,3,4,5,6,7,8,9,10]
list(filter(lambda x:x%2==0, lst))
```
```output
[2,4,6,8,10]
```
Filter function filters out items from a list (or any other iterable) based on a conditional lambda
:::
### Filter with multiple conditions
::: tip ▶Example: Filter with multiple conditions
```python
lst=[1,2,3,4,5,6,7,8,9,10]
list(filter(lambda x:x%2==0 and x>5, lst))
```
```output
[6,8,10]
```
:::
### Custom filter function
::: tip ▶Example: Description
```python
students=[
    {"name":"Krish1","age":18},
    {"name":"Krish2","age":32},
    {"name":"Krish3","age":35}
]

def age_greater_than_25(student):
    return student["age"]>25

list(filter(age_greater_than_25, students))
```
```output
[{'name': 'Krish2', 'age': 32}, {'name': 'Krish3', 'age': 35}]
```
:::
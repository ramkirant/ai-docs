# Tuples

::: info Definition
Tuples are ordered collection of items that are immutable. They are similar to lists, but their immutability makes them different. 
:::

## Create an Empty Tuple
::: tip ▶Example: Create a Tuple
```python
empty_tuple=()
```
:::

## Convert a list to a tuple
::: tip ▶Example: Convert a list to a tuple
```python
numbers_tpl=tuple([1,2,3,4,5])
mixed_tpl=(1,"Hello World", True)
```
💡Tuples can be of mixed data types
:::

## Accessing the elements of a tuple
::: tip ▶Example: Accessing Tuple Elements
```python
tpl=(1,2,3,4,5,6)
print(tpl[2])  ## This will fetch the third element from the left
print(tpl[-1]) ## This will fetch the first element from the right
```
:::

## Slicing of Tuples
::: tip ▶Example: Slicing of Tuples
```python
tpl=(1,2,3,4,5,6)
print(tpl[0:4])
```
:::

## Tuple Operations
::: tip ▶Example: Adding Tuples
```python
tpl1=(1,2,3,4)
tpl2=('a','b','c')
concatenated_tuple=tpl1+tpl2
```
💡Adding two tuples will concatenate them
:::
::: tip ▶Example: Multiplying tuples
```python
tpl=(1,2,3,4)
print(tpl*3)
```
```output
(1,2,3,4,1,2,3,4,1,2,3,4)
```
💡Multiplying a tuple will replicate the values of tuple by the number we multiplied. We cannot multiply two tuples. 
:::
## Tuple Methods
### Find the element count
::: tip ▶Example: Count the number of times an element is present in the tuple ```tuple.count()```
```python
tpl=(1,2,3,4,4,5)
print(tpl.count(4))
```
💡```tuple.count()``` method compares elements using the **equality operator**

💡For custom class objects, the count method calls the ```__eq__``` method.

   💡If the class don't have the ```__eq__``` method, python uses the default identity comparison (is)
   This means the objects are only considered equal if they are the exact same instance in memory
:::
### Find the element at an index
::: tip ▶Example: Find the element at an index ```tuple.index()```
```python
tpl=(1,2,3,4,4,5)
print(tpl.index(3))
```
:::
## Packing and unpacking a tuple
::: tip ▶Example: Packing a tuple
```python
packed_tpl=1,"Test",3
print(packed_tpl)
```
:::
::: tip ▶Example: Unpacking a tuple
```python
a,b,c=packed_tpl
```
:::
::: tip ▶Example: Unpacking with *
```python
tpl=(1,2,3,4,5)
first,*middle,last=tpl
```
In this example, the variable middle will be a tuple with all the values between first and last
:::
::: tip ▶Example: Nested tuple
```python
nested_tpl=(1,(2,3,4),5)
```
:::
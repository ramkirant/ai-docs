# Standard Libraries
## Arrays
::: tip ▶Example: Arrays
```python
import array
arr = array.array('i',[1,2,3,4])
print(arr)
```
- ```i``` refers to a type code. It means signed integers. 
- Type code ensures all the elements in the array are of the same type.
- Refer to [this](https://docs.python.org/3/library/array.html) documentation for the list of all the type codes. 
:::
## Math
::: tip ▶Example: Math
```python
import math
math.sqrt(16)
```
:::
## Random
::: tip ▶Example: Random
```python
import random
random.randint(1,10)
random.choice(['apple','banana','cherry'])
```
:::
## OS
::: tip ▶Example: Used for file and directory access
```python
import os
## Get the current working directory
print(os.getcwd())
```
:::

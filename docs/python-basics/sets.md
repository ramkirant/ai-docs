# Sets

::: info Definition
Sets are built-in data types in Python used to store collections of unique items. They are unordered, meaning the elements do not follow a specific order and they do not allow duplicate elements. Sets are useful for membership tests, eliminating duplicate entries, and performing mathematical set operations like union, intersection, difference and symmetric difference. 
:::

Data in the set need to be unique. If there are duplicates in the set, python would just ignore the duplicates and consider only the unique values. 

## Create a Set
::: tip ▶Example: Create a set
```python
my_set={1,2,3,4,5}
```
:::

::: tip ▶Example: Create an empty set
```python
my_empty_set= set()
```
:::

::: tip ▶Example: Cast a tuple to a set
```python
set_from_tuple=set([1,2,3,4,5])
```
:::

## Set Operations
### Add and Remove
::: tip ▶Example: Add an element to the set: ```set.add()```
```python
setz={1,2,3,4,5}
setz.add(6)
```
:::
::: tip ▶Example: Remove an element from the set with existence check: ```set.remove()```
```python
setz={1,2,3,4,5}
setz.remove(5)
```
⛔ Trying to remove an element that dont exist would result in **KeyError**
:::

::: tip ▶Example: Remove an element from the set without existence check: ```set.discard()```
```python
setz={1,2,3,4,5}
setz.discard(6)

```
💡 Use discard if you don't want to see the KeyError while removing non-existent elements.
:::
::: tip ▶Example: Pop an element from the set: ```set.pop()```
```python
setz={1,2,3,4,5}
removed_element=setz.pop()
```
set.pop() will remove the first element of the set. It follows FIRST IN, FIRST OUT
:::

::: tip ▶Example: Clear all the elements of the set: ```set.clear()```
```python
setz={1,2,3,4,5}
setz.clear()
```
:::

### Member existence check
::: tip ▶Example: Check whethen an element is present in the set: ```i in set```
```python
setz={1,2,3,4,5}
print(3 in setz) ## Returns True
print(7 in setz) ## Returns False
```
:::

### Mathematical operations
::: tip ▶Example: Union ```set1.union(set2)```
```python
set1={1,2,3,4,5,6}
set2={4,5,6,7,8,9}
union_set=set1.union(set2)
```
:::

::: tip ▶Example: Intersection ```set1.intersection(set2)```
```python
set1={1,2,3,4,5}
set2={4,5,6,7,8}
intersect_set=set1.intersection(set2)
```
:::

::: tip ▶Example: Difference: Remove the common element from first set: ```set1.difference(set2)```
```python
set1={1,2,3,4,5}
set2={4,5,6,7,8}
set1.difference(set2)
```
:::

::: tip ▶Example: Symmetric Difference: ```set1.symmetric_difference(set2)```
```python
set1={1,2,3,4,5}
set2={4,5,6,7,8}
set1.symmetric_difference(set2)
```
Symmetric difference removes the common elements of both the sets and combines the unique elements.
:::

### Other set operations
::: tip ▶Example: Subsets and Supersets
```python
set1={1,2,3}
set2={3,4,5}

## Is subset?
print(set1.issubset(set2))

## Is superset?
print(set1.issuperset(set2))
```
:::
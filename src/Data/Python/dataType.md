# Data types

Different data type in python are

| family   | type                    |
| -------- | ----------------------- |
| Numeric  | integer, float, complex |
| Text     | str                     |
| Boolean  | bool                    |
| Sequence | list, tuple             |
| Mapping  | dict                    |
| Set      | set                     |

---

## Numeric

**Integer**

- It is defined by int class.
- It can have all the values including positive number, negative number, and zero except for fractional value.
- There is no limit to how long an integer can be( the only limit is memory available).
- No limit to the precision.
- It can have octal, hexadecimal, and binary values.
- None zero integer starting with zero is an invalid integer.

```python
Example
num = 1234947495849854985495849584972747
hey = 240

```

**Float**

- Represented by float class.
- It is used to define fractional value in python.
- Use scientific notation to represent a float having a lot of digits.
- There is no limit to how long a float can be( the only limit is memory available).

```python
Example
num = 1234947495849854985495849584972747.8889979797
hi = 89.98
```

**Complex**

- It is represented by a complex class.
- It can be represented as a real + imaginary part.
- Imaginary part is appended with j or J.
- Just like any other number type, here also we can do arithmetic operations such as addition, multiplication, and etc.

```python
Example
im_really_complex = 4 + 5j
im_complex_2 = 9 + 8j
```

## Text

**String**

- It is a collection of a sequence of characters data or simply characters.
- It is represented by an str class.
- Anything enclosed between `'` (single quote), `"` (double quote), and `'''` (triple quote) is considered.
- We can use `'''` to write multiline text and python will print it as it is.
- We can use the `[]` slicing operator to access a string value.
- String is an immutable object.

```python
code

str1 = 'Hello this is one line string'
str2 = "Hello this is also a one line string"
str3 = ''' Hello this is a
 multi line
 text '''

 print(str1)
 print(str2)
 print(str3)
 print(str1[0])

output
  Hello this is one line string
  Hello this is also a one line string
  Hello this is a
  multi line
  text
  H

```

## Boolean

**bool**

- It is represented with bool class.
- It evaluates everything either to True or False ( True, False with capital T and F as mentioned in keywords and identifiers article).

```python
Code
print(bool(2))
print(bool(0))

output
 True
 False

```

## Sequence

**List**

- It is represented by list class.
- An ordered collection of similar or different data types placed inside a square bracket separated with a comma.
- Use slicing operator `[]` to access its value.
- Limit to how much it can store is dependent on the system memory.
- It supports self nesting.
- Use `list()` to convert a string, set, and other data types to a list. It can only have one argument.
- It's the same as other language array but with a bit of a twist.
- It can store duplicate value
- It is mutable
- It is iterable

```python
Code

list1 = ["hello", 1234, True, [1, 2, 3]]
print(list1[0])
print(list1[3][2])
print(list(list1[0]))
print(list1[0:3])

Output

 hello
 3
 ['h', 'e', 'l', 'l', 'o']
 ["hello", 1234, True]

```

**Tuple**

- It is represented by tuple class.
- It is similar to the list but instead of `[]` we use `()` (small bracket) or even without `()`.
- Unlike the list it is not mutable.
- It is much faster than a list.
- Use slicing operator `[]` to access its value.
- Use `tuple()` to convert a string, set, and other data types to list. It can only have one argument.
- It is iterable

```python
tuple1 = ( "hello", "hey", 12, 34, [1, 2, 4, 5])
tuple_without_small_bracket = "hello", 2, 3, "intresting", "fun"

```

## Set

**Set**

- It is defined by class set.
- Collection of unordered, unique data type enclosed between `{}` (curly bracket).
- It is iterable, mutable.
- It doesn't store duplicate data. Even if given it will only store one value and discard other duplicate values.
- set, list, dictionary objects aren't allowed in sets.

```python
set_one = {"hey", 1, 2, 5 + 3j, (1, 2, 3)}

```

## Mapping

**Dictionary**

- It is defined by dict class.
- It is a collection of unordered `key : value` pair separated by comma enclosed between `{}` (curly bracket).
- Keys are not mutable in dict so the list can't be a key in dict.
- Duplicate keys aren't allowed but the same value can be assigned to more than one key.
- In case a key appears more than once, last `key : value` pair is stored.
- Value can be accessed using `[]` slicing operator or `get()` function.
- It is iterable.

```python
Code
dict_1 = {1:2, 2:3, 4:5, "hello":"hey", "how_are_you_doing":"im_good_how_r_you"}
dict_2 = {"map":[1, 2, 3, 4]}
print(dict_1[1])
print(dict_2.get("map"))

Output
2
[1, 2, 3, 4]

```

---

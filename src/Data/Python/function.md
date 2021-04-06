# Function

## Definition

It is a self-contained, reusable, organized block of code to perform a specific task. It may be called a set of collection of instructions that performs a specific task.

There are pre-defined functions and user-defined functions. We will discuss more pre-defined functions in the next article. Here let's discuss user-defined functions.

Let's start by taking an example

```python
def function_name(parameters):
    "Document string"
     # function code

     return expression

```

**def** \
def is what we use to define a function in python. It is to let the compiler know that we are defining a function.

**function_name** \
It is the name of the function. The function name can be anything apart from keywords as discussed in the keywords and identifiers article. Most of the time we give a name based on what task a function is going to perform. Like if a function returns addition then we can name it `getSum` or `getAddition` or whatever suits the situation.

**Parameters** \
It can be said to be the initial data passed to a function to run a set of specific instructions on these data.

```python

def getSum(a, b) :
    print(a + b)

getSum(2, 3)

Output
5
```

- A function can have multiple parameters. A parameter can be assigned a default value. Just like any other language javascript or C++ default value should always start from the rightmost parameter.

```python

def getSum(a, b = 0):
    print (a + b)
# This is valid

def getSum(a = 0, b):
    print(a + b)
#this is invalid

```

- If the number of the parameter is unknown in function then we can use `*` followed by a name to get all the parameters.

```python
def unknownParameters( *params ):
    print(params)


unknownParameters("helo", "python", "is", "my", "name")

Output

('helo', 'python', 'is', 'my', 'name')
```

- If the number of the parameter is unknown and they are in the `key : value` pair then we can use `**` followed by a name to get all the parameters.

```python
def unknownParameters( **params ):
    print(params)


unknownParameters(intro="helo", name="python", ignoreMe="is", me="my", selfDirect="name")

Output
(intro:'helo', name:'python', ignoreMe:'is', me:'my', selfDirect:'name')
```

- Everything in python is an object. A variable used as an argument in a function call is passed a reference. If it is assigned a new value then it creates a new reference else if mutated then it changes the original value.

```python
def refCheck(param) :
    param = "hello"

test = "hey"
refCheck(test)
print(test)

Output
'hey'


def newRefCheck(param):
    param[0] = "hey"

test2 = ["hello", "hello1", 2, 5]
newRefCheck(test2)
print(test2)

Output
['hey', 'hello1', 2, 5]
```

**Document String** \
It is also called docstrings. As the name suggests it is used to describe what a function does and can be accessed by `function_name.__doc__`.

```python
def doc_string_example(params):
    'this is the description'
    return params

print(doc_string_example.__doc__)

Output
this is the description
```

**return**

- A function always returns something. If nothing is returned explicitly then it returns `None by default
- A return statement immediately terminates a function.
- `return` statement should always be used inside a function.
- Expression can only be used in the return statement.
- `return` statement can return multiple values separated by comma, and we can use `iterable unpacking` to get multiple returned values.

```python
def calculator(a, b):
    return a + b, a - b, a * b

sum1, sub1, multiply1 = calculator(4, 2)
print(sum1, sub1, multiply1)

Output
6 2 8

```

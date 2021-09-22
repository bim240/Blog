# String Methods

## Function vs Methods

Everything in python is an object. A method is called on the object whereas functions aren't.

| Method                                     | Description                                                                                                                                                                                                                                                                               |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| capitalize()                               | returns a new string with the only first letter capitalized and other letters in small.                                                                                                                                                                                                   |
| center(width, fillchar)                    | return a new centered string of specified length padded with fillchar.                                                                                                                                                                                                                    |
| casefold()                                 | returns a new string with all letters in lowercase but it is aggressive and strong.                                                                                                                                                                                                       |
| count(substring, start, end)               | returns the number of times a `substring` occurred in the string between `start` and `end`. `start, end` is optional parameter.                                                                                                                                                           |
| endswith(substring or tuple, start, end)   | returns `True` or `False` if a string ends with a given `substring` or if there is more than one substring to be checked then we can use a `tuple`. `start, end` is optional parameter.                                                                                                   |
| expandtabs(tabsize)                        | returns a new string where `\t` is replaced with whitespaces. Default tabsize is 8 whitespaces.                                                                                                                                                                                           |
| find(substring, start, end )               | returns the index of the first occurrence of `substring` between `start` and `end` else return -1. `start, end` is optional parameter.                                                                                                                                                    |
| index(substring, start, end )              | returns the index of the first occurrence of `substring` between `start` and `end`else raises an exception.`start, end` is optional parameter.                                                                                                                                            |
| isalnum()                                  | returns `True` if the string only consists of alphabets and numbers else returns `False`.                                                                                                                                                                                                 |
| isalpha()                                  | returns `True` if the string only consists of alphabets else returns `False`.                                                                                                                                                                                                             |
| isdecimal()                                | returns `True` if the string only consists of decimals else returns `False`.                                                                                                                                                                                                              |
| isdigit()                                  | returns `True` if the string only consist of digits else returns `False`.                                                                                                                                                                                                                 |
| isidentifier()                             | returns `True` if string is an identifier else returns `False`.                                                                                                                                                                                                                           |
| islower()                                  | returns `True` if the string only consists of lowercase alphabets else returns `False`.                                                                                                                                                                                                   |
| isnumeric()                                | returns `True` if the string only consists of numbers else returns `False`.                                                                                                                                                                                                               |
| isprintable()                              | returns `True` if the string only consist of printable characters else returns `False`.                                                                                                                                                                                                   |
| isspace()                                  | returns `True` if string consist of even a single space else returns `False`.                                                                                                                                                                                                             |
| istitle()                                  | returns `True` if the string is title cased else returns `False`.                                                                                                                                                                                                                         |
| isupper()                                  | returns `True` if the string only consists of uppercase characters else returns `False`.                                                                                                                                                                                                  |
| join(iterable)                             | returns a new string after joining all the elements of an iterable with the string upon which join method was called.                                                                                                                                                                     |
| ljust(width, fillchar)                     | returns a new string where the new string's length is equal to `width` and `fillchar` is appended to match the required length if passed else it is appended with white spaces. If width is less than the original string length then it returns a new string with the same characters.   |
| rjust(width, fillchar)                     | returns a new string where the new string's length is equal to `width` and `fillchar` is prepended to match the required length if passed else it is prepended with white spaces. If width is less than the original string length then it returns a new string with the same characters. |
| lower()                                    | returns a new string after converting all the uppercase characters into lowercase characters.                                                                                                                                                                                             |
| upper()                                    | returns a new string after converting all the lowercase characters into uppercase characters.                                                                                                                                                                                             |
| swapcase()                                 | returns a new string after converting all the lowercase characters into uppercase characters and all the uppercase characters into lowercase.                                                                                                                                             |
| lstrip(char)                               | returns a new string after removing `char` from starting if passed else removes white spaces from the beginning.                                                                                                                                                                          |
| rstrip(char)                               | returns a new string after removing `char` from the end if passed else removes trailing white spaces.                                                                                                                                                                                     |
| strip(char)                                | `strip(char)` basically is the combination of `rstrip()` and `lstrip().`                                                                                                                                                                                                                  |
| partition(separator)                       | returns a tuple containing the strings before, `separator` itself, and the string after the first occurrence of the `separator`. If `separator` is not found then it returns a tuple containing the original string and two empty strings. `separator` is not optional.                   |
| rpartition(separator)                      | returns a tuple containing the strings before, `separator` itself, and the string after the last occurrence of the `separator`. If `separator` is not found then it returns a tuple containing two empty strings and the original string . `separator` is not optional.                   |
| replace(old, new, times)                   | returns a new string with replacing `old` substring with `new` substring. `times` decide how many replacements are to be done, if not passed then all the `old` substring are replaced with the `new` substring.                                                                          |
| rfind(sub, start, end )                    | returns the last index of the occurrence of the `sub` between `start` and `end` index else return -1. `start` and `end` is optional.                                                                                                                                                      |
| rindex(sub, start, end )                   | returns the last index of the occurrence of the `sub` between `start` and `end` index else raises an exception. `start` and `end` is optional.                                                                                                                                            |
| split(separator, maxsplit)                 | returns a list containing the strings after breaking up the original string at the specified `separator` where `maxsplit` is the limit if mentioned.                                                                                                                                      |
| rsplit(separator, maxsplit)                | returns a list containing the strings after breaking up the original string at the specified `separator` from the right where `maxsplit` is the limit if specified.                                                                                                                       |
| startswith(substring or tuple, start, end) | returns True if the string begins with `substring` or with any element in tuple else returns False.                                                                                                                                                                                       |
| title()                                    | returns a new string after capitalizing the first letter of each word.                                                                                                                                                                                                                    |
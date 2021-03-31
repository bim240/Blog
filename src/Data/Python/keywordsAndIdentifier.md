# Keywords and Identifiers

## Keywords

Just like any other language out there, Python also has few reserved words which hold special meaning and are called Keywords.

**Pointers on Keywords**

- Keywords can't be used as a variable name, function name, or name of other entities.
- Keywords are case sensitive ( as python is also case sensitive).
- All the Keywords starts with small letter except for ` True, False, and None`.

As of Python 3.8, there are 35 Keywords.

| Keywords | Keywords | Keywords | Keywords |
| -------- | -------- | -------- | -------- |
| False    | class    | from     | or       |
| None     | continue | global   | pass     |
| True     | def      | if       | raise    |
| and      | del      | import   | return   |
| as       | elif     | in       | try      |
| assert   | else     | is       | while    |
| async    | except   | lambda   | with     |
| await    | finally  | nonlocal | yield    |
| break    | for      | not      |

---

## Identifiers

It's a name that can be used to differentiate between different entities such as variables, functions, objects, or other entities. To sum this up one can simply say it's a variable name.

**Rules for defining Identifiers**

- @, $, #, !, ., and % are not allowed in Identifiers name.
- Identifiers' names can't start with a digit. However, one or more digits can be used later in the Identifier's name.
- Keywords can't be Identifiers.
- There is no limit to how long an Identifier's name can be (the only limit is your pc).
- It can contain a-z, A-Z, 0-9, and \_ ( underscore ) but as discussed earlier it can't start with digits.

**Identifiers naming convention**

- The only class name should begin with a capital letter, the rest of all naming will begin with a small letter.
- An Identifier starting with \_ ( single underscore) means it is a private Identifier.
- An Identifier starting with \_\_ ( double underscore) means it is a strong private Identifier.
- An Identifier starting and ending with \_\_ ( double underscore ) means it is a language-defined special name.
- user and User are different Identifiers as python is case sensitive.

---

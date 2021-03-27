## Introduction to HTML & CSS

This article covers few basic concept of HTML and CSS. HTML is used for content writing and CSS is used for designing those content. Let’s take the human body as an example to understand it better. Now here skeleton is HTML and CSS part is how muscle cover our skeleton. Every person skeleton has 106 bones, let that person be from INDIA, CHINA, JAPAN, LONDON, U.S or any other part of the world. But their body texture, color, shape, height, etc differ because of the reason that their muscle covers their bodies differently. This is how HTML & CSS work. They complete each other.

Now let’s talk more about HTML. There are 3 ways to add things to our HTML page.

1. Element
2. Tag
3. Attributes

Elements being the building blocks of our website. Any Element defined between less than and greater than sign is a tag. Attributes provide information about tag. Attributes aren’t visible on the web page.

```html
Eg- <a href="https://altcampus.io/">AltCampus</a>
```

Here ‘a’ is an element, href is an attribute and <a> is a tag. <tagname> starts the tag</tagname> end the tag

Now let’s talk about how we are going to write our HTML file. Everything in HTML file will be under

```html
<html>
  your HTML code
</html>
```

There is only one thing outside HTML tag which tells browser the version of HTML we are using. which is like **<!DOCTYPE html>**.

Our body is divided into two-part.

1. head
2. body

head is defined as

```html
<head>
  your code and other tag
</head>
```

and body is defined as

```html
<body>
  your code and other tag
</body>
```

The head part has different tags inside it. For example <meta> tags,<title> tags,address of of CSS file and etc.
The body again is divided into different parts. They are

1. header,
2. main and
3. footer

These are also tags but we will discuss them in the next section.
Tags are divided into two types in accordance with their closing. Self-closing and other we have to manually close it.
Self closing tags are

1. <br/>
2. <hr/>
3. <img/>
4. and few more

This is it for HTML part. Let’s start our CSS part.
There are three ways in which we can apply CSS to our HTML file.

1. inline
2. internal and
3. external.

We prefer external as its the best practise in web development.
Whenever we want to apply design our to HTML file we do it through a selector. There is three type of selector.

1. type,
2. class and
3. id selector

Each selector stores properties and its value.

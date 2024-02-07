# This is our Notes File

Written By Lucky [My Portfolio](https://raidlucky.github.io/Projects/), [My Github](https://github.com/raidlucky)
<br> You can find this Repo Online [Repository](https://github.com/LJ-University/CodeNotes)

What will I teach you?

I will teach you how to build static websites that look nice, using HTML, CSS, and JS. This course will have around 3 main parts to compelete on your own. 

In the first part we will focus on just HTML and CSS

In the second part we will focus on multiple pages, managing our HTML in coordination with CSS, and file locations.

In the third part we will focus on JS and manipulating HTML and CSS using JS. JS is javascript.

The third and second part will be found in the notes folder, if you get confused or lost text me or message me on discord.

After you finish the first, second, and third part, we will focus on your individual skills, and I personally will Teach you UI design.

Phone: 630-310-2681
<br> Discord: RaidLucky

# HOW TO USE NOTES & Setup Live Server

THIS IS IS SUPER IMPORTANT

right click it on the sidebar and click open preview
<br> or on your keyboard hold: ctrl + shift + v
<br> This will format the info

## Setup

I recommend you use firefox rather than chrome, firefox has better web development tools and is faster than chrome. Especially if you are coding on a school computer.

Live server is a Visual Studio Code extention that allows you to look at your website,
Live server updates your website as you code too.

Install Live server through Extenstions on the sidebar on the right
on the bottom right of VS Code you'll see "Go Live", 
click that and it will open the website on a local server

## Useful tools & Documentation

- [W3Schools](https://www.w3schools.com/) Website that teaches HTML, CSS, and JS. Slighly outdated but very useful and simple to use
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn) Best Guide out there for HTML, CSS, and JS. Created by Firefox creators, and is the most up to date resource out there. Slighty more complicated, for more advanced developers. Still very useful regardless of skill level.
- [Stack Overflow](https://stackoverflow.com/) Best website to find errors in code, search for any problem you have in there or just on google, most likely you'll find yourself using this site a lot.

## Useful Web Browser Extentions
You don't have to download these, just optional

- (CSS Overide)[https://addons.mozilla.org/en-US/firefox/addon/css-override/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search] Can remove CSS on any site, honestly not all that useful, just helpful because it helps show the difference between HTML and CSS
- (Color Fish)[https://addons.mozilla.org/en-US/firefox/addon/colorfish-color-picker/] can tell you any color on a website, if you find one you like or want to copy



# HTML Notes

HTML stands for Hyper Text Markup Language

## What are Elements, Tags, and Attributes?
HTML has Elements that are made up of tags
<br> This is a Element: `<h1>Hello World!</h1>`
<br> This is an attribute `class='something'` it would be used like this: `<h1 attribute='something'>Hello</h1>`
<br> This is an opening tag: `<h1>` 
<br> This is a closing tag: `</h1>` Notice it has a forward slash before h1
<br> Data like text goes in between the tags
<br> Not all Elements have a closing tag, like images for example

## Elements & Syntax
- `<p>Paragraph Element</p>` This is a paragraph element, for paragraphs
- `<h1>Header Element</h1>` This is a header element, for headers
- `<a href='https://youtube.com'>link</a>` This is a link, the href attribute sets the location of where it brings you. if you clicked on it, it would take you to youtube
- `<button onclick='function()'>Click me!</button>` This is a button, we use these with Javascript, we won't use these just yet
- `<img src='image file location'>` image elements dont have closing tags, in the src attribute you would put the location of the image file to display it
- `<input type='text>` input elements dont have closing tags either, in the type attribute you can customzie what type of input it is. For example: type='password' will change it and hide the text inside of it. We won't use these just yet either, because it requires JS.

Full Syntax: `<element attribute='value'>Text</element>`

## What is the body tag, HTML tag, and other stuff

You can make a lot of errors in HTML; however, It will always run, because HTML errors don't effect how it runs, just how it looks

- `<html></html>` You'll notice the html tag and this tag holds all of the html, all html goes in between those tags. 
- `<body></body>` All the visible HTML like text, images, buttons, and inputs go into the body tag.
- `<head></head>` The Head tag holds background info and connects other files with data that the html file uses, for example you connect the JS and CSS in the head tag.
- `<!DOCTYPE html>` In HTML this is nessecary for the browser to interpret the website, although most browsers will work without it. It is still nessecary.

# CSS Notes

Haven't completed CSS notes yet as of 2/7/2024

First you have to connect your css file to the html file
in between your head tags
1. paste `<link rel="stylesheet" href="style.css">`
2. or Shortcut: type link:css and hit enter

## Syntax

Here is the syntax for CSS:

```css
.selector {
    property: value;
}
```

In css you have a selector that declares how an element or class looks.
You can then give that class and element certain properties that will change how it looks and where it is positioned.

## Difference between Element selectors and Class selectors

In CSS we have class's to make specific elements look a certain way instead of making every element look the same
In CSS there are 3 different selectors
1. Element Selectors
2. Class Selectors
3. Id Selectors



```html 
    <h1>h1 using element selector</h1>
    <h1 class="header">h1 using class selector</h1>
    <p id="paragraph">p using id selector</p>
```

Heres the CSS that goes with that HTML

```css
h1 { /* Element Selector */
    font-size: 40px;
    color: blue;
}

.header { /* Class Selector */
    font-size: 38px;
    color: red;
}

#paragraph { /* ID Selector */
    font-size: 18px;
    color: #333;
}
```
Notice element selectors don't start with anything, CSS selectors start with a period, and ID selectors start with a hashtag/pound.


In this example, every single h1 element you add will be blue with 40px, unless you give it the header class.
So if we give any h1 tag the header class, it will make it red and 38px.

Make sure Live server is on, and
check out this [Example](http://localhost:5501/example1/index.html)


## CSS terms/values

We'll use block and inline with the display property later on

- block = vertical
- inline = horizontal

## CSS colors

These are all Color codes you'll use as values later on.

- Hex Color Code: #333333
- RGB Color Code: rgb(51, 51, 51)
- RGBa Color Code: rgba(51, 51, 51, 1)
- Color Name: grey


## Main CSS measurements

- px = pixels
- % = percentage of parent elements width or height
- vh = relative to the height of the viewport, viewport is the monitor size/resolution basically
- vw = relative to the width of the viewport
- rem = relative to font-size of the root element


## Basic CSS Properties

Here are some basic properties you should try on a paragraph element

```css
p {
    color: #fff;
    font-family: 'Arial';
    background-color: #333;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    border: solid 2px #1a1a1a;
    width: 150px;
    height: 150px;
}
```

Try this on you own, and mess with the values of each property to see what they do.

## CSS Display Property

The display property is how we position elements, and organzize them. Displays can get a little confusing so its important we practice with them a lot.

```css
.container {
    display: flex;
    flex-direction: row;
}
```

**Display Values**

- block
- inline-block
- flex
- inline-flex
- grid
- inline-grid
- table
- none (Will hide an element from the page)

There are more Display values, but these are the main ones you'll use. Your typical displays are block and inline-block. The most commonly used one however is flex, because you can position elements to be completely centered within it. Grid is used to make grids obviously, and tables make tables. 

Here is a good [Demo](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

The best way to find out how each works and the differences between them, is to code with them. Try using them on your own. 

**flex-directions**

- row
- column


# Concluding Thoughts

After reading this and playing around with the code in here, you should be able to make a first website. It won't be all that pretty, but it's a great start.
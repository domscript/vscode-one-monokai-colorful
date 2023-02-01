---
id: Markdown cheatsheet
permalink: index.html
---

## A function {/*a-function*/}

<Function />

## Headers {/*headers*/}

# h1
## h2
### h3
#### h4
##### h5
###### h6

Header 1
========
Header 2
--------

## Emphasis {/*emphasis*/}

*italic*
_italic_
**bold**
__bold__
***bold italic***
___bold italic___
~~strikethrough~~
`code`

## Lists {/*lists*/}

* Item 1
  * Nested Item 1
* Item 2
- Item 1
  - Nested Item 1
- Item 2
- [ ] Checkbox off
- [x] Checkbox on
1. Item 1
2. Item 2

## Links {/*links*/}

[link](http://google.com)
[link][google]
[google]: http://google.com
<http://google.com>
Images
![Image alt text](/path/to/img.jpg)
![Image alt text](/path/to/img.jpg "title")
![Image alt text][img]
[img]: http://foo.com/img.jpg 'Optional Title Here'

## Code {/*code*/}

`inline code`
    4 space indent
    makes a code block
```
code fences
```
```js
const calc = async function(param) {
  return await param
}
calc(argument)
codeFences.withLanguage()
```

## Blockquotes {/*blockquotes*/}

> This is
> a blockquote
>
> > Nested
> > Blockquote

## Horizontal line {/*horizontal-line*/}

----
****

## Tables {/*tables*/}

| Column 1 Heading | Column 2 Heading |
| ---------------- | ---------------- |
| Some content     | Other content    |

Column 1 Heading | Column 2 Heading
--- | ---
Some content | Other content

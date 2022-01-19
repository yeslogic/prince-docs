---
title: Generated Content
---

Generated content is text and other content that is not found in the original input document, but is added to the output from a style sheet using the CSS [`content`](css-props.md#prop-content) property. Useful applications of this property include [Page regions](paged.md#page-regions), [List markers](styling.md#list-markers) or [Footnotes](styling.md#footnotes).

## Generated Content Functions

Generated content is inserted by means of several functions that typically are used within the [`content`](css-props.md#prop-content) property. However, please note that these functions are not unique to the [`content`](css-props.md#prop-content) property, but can be used for the same purpose in several other ones, namely:

-   `content`
-   `-prince-bookmark-label`
-   `-prince-pdf-page-label`
-   `-prince-tooltip`
-   `string-set`

See also the section on [CSS Functional Expressions](css-functions.md) for additional details on these functions.

The most simple use of generating content in these properties is to insert a literal string. A literal string can also be passed as an argument to the `leader()` function, which expands to fill the available space on the line like justified text, by repeating the string as many times as necessary. An optional second argument can be used to specify a minimum width.

HTML

```html
<ul id="index">
  <li><a href="#chapter1">Chapter 1</a></li>
  <li><a href="#chapter2">Chapter 2</a></li>
</ul>
```

CSS

```css
    #index a:after {
      content: leader('.') "p. " target-counter(attr(href), page);
    }
```
The above example will generate something looking like "Chapter 1..................p. 5", assuming that chapter 1 indeed starts on page 5!  See below for the two other functions appearing in this example, namely `target-counter()` and `attr()`.

The properties can also insert external content fetched from another resource. This can be done with the following functions:

-   the <code>url(<i>url</i>)</code> function, returning the text content at the given URL,
-   the <code>target-content(<i>url</i>)</code> function, referencing the text content of the linked element (see [Using target-content()](#using-target-content) for an example), or
-   the `prince-base-url()` function, returning the base URL of the current document.

It can also be done with the <code>prince-fallback(<i>url</i>)</code> function, which works just like the `url()` function, but also has the possibility of specifying a fallback `content`, in case the loading of the URL should fail.

```css
    img {
      content: prince-fallback(attr(src, url)), attr(data-altsrc, url);
    }
```

The content to be inserted can also be fetched from the attributes of other elements with the <code>attr(<i>attribute-name</i>)</code> function, or from other elements with the following mechanisms:

-   Any block-level element can be removed from the normal document flow, to be inserted in a page region: it is best removed with the [`position`](css-props.md#prop-position) property and its <code>running(<i>name</i>)</code> function, and inserted with the <code>element(<i>name</i>)</code> function. Alternatively, it can be removed with the [`-prince-flow`](css-props.md#prop-prince-flow) property, to be inserted with the <code>flow(<i>name</i>)</code> function. See the documentation for [Taking elements from the document](paged.md#taking-elements-from-the-document) for more details.
-   An element can be referenced with the <code>string(<i>ident</i>)</code> function after having been defined in the [`string-set`](css-props.md#prop-string-set) property with the `content()` function. This does not remove the element from the natural document flow, but instead copies it into the page region. See [Copying content from the document](paged.md#copying-content-from-the-document).

The function <code>prince-expansion-text(<i>expansion</i>, <i>abbreviation</i>)</code> is useful with tagged PDF files by resolving abbreviations in the targeted element or psedudo-element.

```css
    p::after {
      content: "see " prince-expansion-text("page ", "p. ") target-counter(attr(href), page);
    }
```

This example might show the text "see p. 17" and the tagged PDF structure tree will treat the "p." as an abbreviation with the full expanded text being "see page 17".  The CSS property [-prince-expansion-text](css-props.md#prop-prince-expansion-text) works in a similar fashion.

Please note that the <code>prince-expansion-text()</code> function <em>only</em> works in the [content](css-props.md#prop-content) property, and not in the other properties for whom generated content functions work.

The following functions can also be used for different forms of counters:

-   the <code>counter(<i>name</i>)</code> function generates a value for the innermost counter,
-   the <code>counters(<i>name</i>, "separator")</code> function concatenates counters on all levels;
-   the <code>target-counter(<i>url</i>, <i>counter</i>)</code> function retrieves the value of the innermost counter with a given name at the given URL, and
-   the <code>target-counters(<i>url</i>, <i>counter</i>, "separator")</code> function retrieves the value of all counters of a given name from the end of the given URL.

For a detailed survey on counters, please see the chapter [Counters and Numbering](#counters-and-numbering).

All counter functions can take an optional argument to define the counter style (see [Counter styles](#counter-styles)). Prince also offers two mechanisms to create user-defined counter styles: either by means of the `prince-script()` function (see below, and [User-defined counter styles](#user-defined-counter-styles)), or by means of the generated content functions <code>repeat(<i>string</i>+)</code>, defining a sequentially repeated pattern for numbering the items, or <code>symbols(<i>string</i>+)</code>, defining the symbols used for numbering the items.

```css
    h4::before {
      content: counter(h4, repeat("x", "y", "z"))
    }
```

The `repeat()` function defines a sequentially repeated pattern for numbering the items - here it will yield the sequence "x, y, z, xx, yy, zz" etc.

```css
    h4::before {
      content: counter(h4, symbols("x", "y", "z"))
    }
```

The `symbols()` function defines the symbols used for numbering the items - in this case it will yield the sequence "x, y, z, 4, 5, 6" etc.

Last but not least, Prince supports arbitrary JavaScript functions to be called from CSS generated content using the `prince-script()` function (see [Script Functions](#script-functions) for details and examples).

A special function is <code>prince-glyph-index(<i>int</i>)</code>, which allows to choose a glyph from a font by the index of that glyph in the font. Note that this is very non-portable, as glyph indices are specific to individual font versions. But it is a possible escape hatch for people who need a specific glyph and don't have any other way of accessing it (by Unicode character or OpenType substitution).

### The optional `page-policy` value

The generated content functions `element()`, `counter()`, `counters()`, `string()` and `flow()`, have a second, optional argument, namely `page-policy`, which can be one of the following:

`start`  
defining the value the counter, or element had at the start of the page (eg. the last value it was set to on the previous page);

`first`  
defining the first value the counter, or element was set to on this page, or the same as `start` if the counter, or element was not set on this page;

`first-except`  
defining the first value the counter, or element was set to on this page, or no value at all if it was set only on this page;

`last`  
defining the last value the counter, or element was set to on this page, or the same as `start` if the counter, or element was not set on this page.

The page policy values of the `string()` function are only meaningful for `string()` used in page region content.

For a good example of its use, please see [Copying content from the document](paged.md#copying-content-from-the-document).

## Before and After pseudo-elements

The [`content`](css-props.md#prop-content) property can be applied to the `::before` and `::after` pseudo-elements to add generated content before or after an element. For example, adding section numbers in front of headings or including quotation marks around a block of text.

CSS

```
    h1::before, h1::after { content: "***" }
```
This will place three asterisks before and after `h1` elements.

## Counters and Numbering

Counters are the mechanism provided by CSS to perform numbering. They can be used to number list items, pages, footnotes, sections and any other document content that needs to be numbered.

### Initializing and incrementing counters

To use a counter, it first needs to be initialized with the [`counter-reset`](css-props.md#prop-counter-reset) property, which can be applied to any element and initializes one or more counters to the specified values, or to zero if no value is specified. The property can be used to reset a counter by re-initializing it.

Unless the resetting of a counter creates a nested counter, the scope of the counter includes the current element and all of its following siblings.

The [`counter-increment`](css-props.md#prop-counter-increment) property applies to any element and increments or decrements one or more counters by the specified values, or by one if no value is specified.

The [`counter-increment`](css-props.md#prop-counter-increment) and [`counter-reset`](css-props.md#prop-counter-reset) properties are ignored on elements whose [`display`](css-props.md#prop-display) property has the value `none`.

Note that the `counter-increment` and `counter-reset` properties can also be used in `@page` at-rules to create counters that track the page number, for example to number the pages within each chapter separately from the normal `page` and `pages` counters.

### Displaying counters

Once initialized, a counter can be displayed with either the `counter()` or `counters()` function in a [`content`](css-props.md#prop-content) property.

The `counter()` function generates a value for the innermost counter, formatted in the optional counter style (decimal by default - see [Counter styles](#counter-styles)).

The `counters()` function concatenates counters on different levels, separated with the separator string and formatted in the optional counter style (decimal by default - see [Counter styles](#counter-styles)).

CSS

```
    div.example1 { counter-reset: h3 h4 }
    div.example1 h3 { counter-increment: h3 }
    div.example1 h4 { counter-increment: h4 }
    div.example1 h3::before { content: counter(h3) }
    div.example1 h4::before {
        content: counter(h4, lower-alpha)
    }
```
This creates two counters inside the scope of a `div` element. All `h3` and `h4` heading elements will be numbered starting from 1 and the counter number will be placed before the heading text.

CSS

```
    div.example2 { counter-reset: h3 }
    div.example2 h3 {
        counter-increment: h3;
        counter-reset: h4
    }
    div.example2 h4 { counter-increment: h4 }
    div.example2 h3::before { content: counter(h3) }
    div.example2 h4::before {
        counter(h4, lower-alpha)
    }
```
In this example the `h4` counter will be reset at each `h3` element, to produce sub-section numbering that restarts at each new section.

### Nested counters

If a counter is reset on an element and the same counter has also been reset on an ancestor of that element, a nested counter will be created. The scope of the nested counter is the current element only and its final value will not be carried onto its following siblings.

For example, a nested XHTML list with a `ul` element inside a `li` inside another `ul` creates a nested `list-item` counter.

CSS

```
    ol { counter-reset: list-item }
    li { counter-increment: list-item }
    li::marker {
        content: counters(list-item, ".", decimal);
        color: brown;
        font-weight: bold
    }
```
### Counter styles

Counter values are displayed as decimal numbers by default, but they may be displayed using other styles such as roman numerals or consecutive letters of the alphabet.

CSS

```
    chapter { counter-increment: chapter-num }

    chapter::before {
        content: "Chapter " counter(chapter-num, upper-roman)
    }
```
This rule will generate text such as "Chapter IV" before each chapter, with the appropriate chapter number displayed in uppercase roman numerals.

The following table shows examples of the various counter styles:

<table class="grid">
<tr>
<td>decimal</td>
<td>1, 2, 3, &#x2026; 9, 10, 11, &#x2026;</td>
</tr>
<tr>
<td>decimal-leading-zero</td>
<td>01, 02, 03, &#x2026; 09, 10, 11, &#x2026;</td>
</tr>
<tr>
<td>lower-roman</td>
<td>i, ii, iii, iv, v, vi, &#x2026;</td>
</tr>
<tr>
<td>upper-roman</td>
<td>I, II, III, IV, V, VI, &#x2026;</td>
</tr>
<tr>
<td>lower-alpha, lower-latin</td>
<td>a, b, c, &#x2026; z, aa, ab, &#x2026;</td>
</tr>
<tr>
<td>upper-alpha, upper-latin</td>
<td>A, B, C, &#x2026; Z, AA, AB, &#x2026;</td>
</tr>
<tr>
<td>asterisks</td>
<td>*, **, ***, ****, &#x2026;</td>
</tr>
<tr>
<td>lower-hexadecimal</td>
<td>1, 2, 3, &#x2026; 9, a, b, c, &#x2026;</td>
</tr>
<tr>
<td>upper-hexadecimal</td>
<td>1, 2, 3, &#x2026; 9, A, B, C, &#x2026;</td>
</tr>
<tr>
<td>octal</td>
<td>1, 2, 3, 4, 5, 6, 7, 10, 11, 12, &#x2026;</td>
</tr>
<tr>
<td>binary</td>
<td>1, 10, 11, 100, 101, 110, 111, &#x2026;</td>
</tr>
<tr>
<td>arabic-indic</td>
<td>&#x661;, &#x662;, &#x663;, &#x664;, &#x665;, &#x666;, &#x2026;</td>
</tr>
<tr>
<td>lower-greek</td>
<td>&#945;, &#946;, &#947;, &#x2026;, &#953;, &#954;, &#955;, &#x2026;</td>
</tr>
<tr>
<td>upper-greek</td>
<td>&#913;, &#914;, &#915;, &#x2026;, &#921;, &#922;, &#923;, &#x2026;</td>
</tr>
<tr>
<td>persian / urdu</td>
<td>&#x6F1;, &#x6F2;, &#x6F3;, &#x6F4;, &#x6F5;, &#x6F6;, &#x2026;</td>
</tr>
<tr>
<td>cjk-decimal</td>
<td>&#x4E00;, &#x4E8C;, &#x4E09;, &#x56DB;, &#x4E94;, &#x516D;, &#x2026;</td>
</tr>
<tr>
<td>japanese-informal</td>
<td>&#x4E00;, &#x4E8C;, &#x4E09;, &#x56DB;, &#x4E94;, &#x516D;, &#x2026;</td>
</tr>
<tr>
<td>simp-chinese-informal</td>
<td>&#x4E00;, &#x4E8C;, &#x4E09;, &#x56DB;, &#x4E94;, &#x516D;, &#x2026;</td>
</tr>
<tr>
<td>trad-chinese-informal</td>
<td>&#x4E00;, &#x4E8C;, &#x4E09;, &#x56DB;, &#x4E94;, &#x516D;, &#x2026;</td>
</tr>
<tr>
<td>japanese-formal</td>
<td>&#x58F1;, &#x5F10;, &#x53C2;, &#x56DB;, &#x4E94;, &#x516D;, &#x2026;</td>
</tr>
<tr>
<td>simp-chinese-formal</td>
<td>&#x58F9;, &#x8D30;, &#x53C1;, &#x8086;, &#x4F0D;, &#x9646;, &#x2026;</td>
</tr>
<tr>
<td>trad-chinese-formal</td>
<td>&#x58F9;, &#x8CB3;, &#x53C3;, &#x8086;, &#x4F0D;, &#x9678;, &#x2026;</td>
</tr>
<tr>
<td>lower-norwegian</td>
<td>a, b, c, &#x2026; z, &#xE6;, &#xF8;, &#xE5;, aa, ab, &#x2026;</td>
</tr>
<tr>
<td>upper-norwegian</td>
<td>A, B, C, &#x2026; Z, &#xC6;, &#xD8;, &#xC5;, AA, AB, &#x2026;</td>
</tr>
<tr>
<td>lower-russian</td>
<td>&#x430;, &#x431;, &#x432;, &#x433;, &#x434;, &#x435;, &#x436;, &#x2026;</td>
</tr>
<tr>
<td>upper-russian</td>
<td>&#x410;, &#x411;, &#x412;, &#x413;, &#x414;, &#x415;, &#x416;, &#x2026;</td>
</tr>
<tr>
<td>lower-ukranian</td>
<td>&#x430;, &#x431;, &#x432;, &#x433;, &#x434;, &#x435;, &#x454;, &#x2026;</td>
</tr>
<tr>
<td>upper-ukranian</td>
<td>&#x410;, &#x411;, &#x412;, &#x413;, &#x414;, &#x415;, &#x404;, &#x2026;</td>
</tr>
<tr>
<td>lower-belarusian</td>
<td>&#x430;, &#x431;, &#x432;, &#x433;, &#x434;, &#x435;, &#x436;, &#x2026;</td>
</tr>
<tr>
<td>upper-belarusian</td>
<td>&#x410;, &#x411;, &#x412;, &#x413;, &#x414;, &#x415;, &#x416;, &#x2026;</td>
</tr>
<tr>
<td>lower-bulgarian</td>
<td>&#x430;, &#x431;, &#x432;, &#x433;, &#x434;, &#x435;, &#x436;, &#x2026;</td>
</tr>
<tr>
<td>upper-bulgarian</td>
<td>&#x410;, &#x411;, &#x412;, &#x413;, &#x414;, &#x415;, &#x416;, &#x2026;</td>
</tr>
<tr>
<td>lower-serbian</td>
<td>&#x430;, &#x431;, &#x432;, &#x433;, &#x434;, &#x452;, &#x435;, &#x2026;</td>
</tr>
<tr>
<td>upper-serbian</td>
<td>&#x410;, &#x411;, &#x412;, &#x413;, &#x414;, &#x402;, &#x415;, &#x2026;</td>
</tr>
<tr>
<td>repeat(x, y, z)</td>
<td>x, y, z, xx, yy, zz, xxx, yyy, &#x2026;</td>
</tr>
<tr>
<td>symbols(x, y, z)</td>
<td>x, y, z, 4, 5, 6, &#x2026;</td>
</tr>
</table>

See also [User-defined counter styles](#user-defined-counter-styles) for custom counters.

## Cross-references

Prince supports cross-references using generated content with two special functions: `target-counter()` and `target-content()`.

### Using target-counter()

The `target-counter()` function can be used with the [`content`](css-props.md#prop-content) property to reference the value of a counter at a linked element.

CSS

```
    a[href]::after {
        content: " [See page " target-counter(attr(href), page) "]"
    }
```
This will add a cross-reference after every link with the correct page number determined automatically. For example: \[See page 17\].

The `target-counter()` function can specify any counter, allowing cross-references to refer to list items, chapters or sections as well as pages or footnotes.

The `target-counter()` function can also take an optional counter style, similar to the normal counter function.

CSS

```
    a[href]::after {
        content: " [See chapter "
             target-counter(attr(href), chapter, upper-roman)
             "]"
    }
```
This will add a cross-reference after every link with the correct chapter number determined automatically and displayed using roman numerals. For example: \[See chapter IV\].

### Using target-content()

The `target-content()` function can be used with the [`content`](css-props.md#prop-content) property to reference the text content of a linked element.

CSS

```
    a[href]::after {
        content: " [See '" target-content(attr(href)) "']"
    }
```
This will add a cross-reference after every link that includes the text of the element being linked to, such as a chapter title. For example: \[See 'Introduction'\].

## Script Functions

Prince supports arbitrary JavaScript functions to be called from CSS generated content using the `prince-script()` function (see the [`content`](css-props.md#prop-content) property). To make the functions available to CSS, the `Prince.addScriptFunc` method is used (see [The Prince Object](javascript.md#the-prince-object)).

Please note that Prince is not running JavaScript by default - it needs to be explicitly enabled. See [Applying JavaScript in Prince](prince-input.md#applying-javascript-in-prince).

CSS

```
    p::after {
        content: prince-script(myfunc)
    }
```
JavaScript

```javascript
    function myfunc()
    {
        return "Some generated content text!";
    }

    Prince.addScriptFunc("myfunc", myfunc);
```
### Accessing the current date and time

JavaScript functions have access to the current date and time, which can be added to the document using `prince-script()` in generated content.

CSS

```
    @page {
        @top {
        content: prince-script(datestamp)
        }
    }
```
JavaScript

```javascript
    Prince.addScriptFunc("datestamp", function() {
        return (new Date()).toString();
    });
```
### User-defined counter styles

The JavaScript functions used with `prince-script()` can take arguments that are themselves generated content. This allows functions to operate on counter values and implement new counter styles.

CSS

```
    li::marker {
        content: prince-script(mycounterstyle, counter(list-item))
    }
```
JavaScript

```javascript
    Prince.addScriptFunc("mycounterstyle", function(n) {
        if (n == 1) return "one";
        else if (n == 2) return "two";
        else if (n == 3) return "three";
        else return n;
    });
```
For another way of creating user-defined counter styles, see [Generated Content Functions](#generated-content-functions).


---
title: Generated Content
---

Generated Content
-----------------

Generated content is text and other content that is not found in the original input document, but is added to the output from a style sheet using the CSS `content` property. Useful applications of this property include [Page regions](doc-latest/paged.html#page-regions), [List markers](doc-latest/lists.html#content-list-markers) or [Footnotes](doc-latest/footnotes.html#footnotes).

### Generated Content Functions

Generated content is inserted by means of several functions that typically are used within the `content` property. However, please note that these functions are not unique to the `content` property, but can be used for the same purpose in several other ones, namely:

-   `content`
-   `prince-bookmark-label`
-   `prince-pdf-page-label`
-   `prince-tooltip`
-   `string-set`

See also the section on [CSS Functional Expressions](doc-latest/doc-refs.html#css-functions) for additional details on these functions.

The most simple use of generating content in these properties is to insert a literal string. A literal string can also be passed as an argument to the `leader()` function, which expands to fill the available space on the line like justified text, by repeating the string as many times as necessary.

The properties can also insert external content fetched from another resource. This can be done with the following functions:

-   the `url(url)` function, returning the text content at the given URL,
-   the `target-content(url)` function, referencing the text content of the linked element (see [Using target-content()](doc-latest/gen-content.html#target-content)), or
-   the `prince-base-url()` function, returning the base URL of the current document.

It can also be done with the `prince-fallback(url)` function, which works just like the `url()` function, but also has the possibility of specifying a fallback `content`, in case the loading of the URL should fail.

The content to be inserted can also be fetched from the attributes of other elements with the `attr(attribute-name)` function, or from other elements with the following mechanisms:

-   Any block-level element can be removed from the normal document flow, to be inserted in a page region: it is best removed with the `position` property and its `running(name)` function, and inserted with the `element(name)` function. Alternatively, it can be removed with the `prince-flow` property, to be inserted with the `flow(name)` function. See the documentation for [Taking elements from the document](doc-latest/paged.html#content-taking-elements) for more details.
-   An element can be referenced with the `string(ident)` function after having been defined in the `string-set` property with the `content()` function. This does not remove the element from the natural document flow, but instead copies it into the page region. See [Copying content from the document](doc-latest/paged.html#content-copying-text).

The following functions can also be used for different forms of counters:

-   the `counter(name)` function generates a value for the innermost counter,
-   the `counters(name, "separator")` function concatenates counters on all levels;
-   the `target-counter(url, counter)` function retrieves the value of the innermost counter with a given name at the given URL, and
-   the `target-counters(url, counter, "separator")` function retrieves the value of all counters of a given name from the end of the given URL.

All counter functions can take an optional argument to define the counter style (see [Counter styles](doc-latest/gen-content.html#counter-styles)). Prince also offers two mechanisms to create user-defined counter styles: either by means of the `prince-script()` function (see below, and [User-defined counter styles](doc-latest/gen-content.html#counter-user-styles)), or by means of the generated content functions `repeat(string+)`, defining a sequentially repeated pattern for numbering the items, or `symbols(string+)`, defining the symbols used for numbering the items.

Last but not least, Prince supports arbitrary JavaScript functions to be called from CSS generated content using the `prince-script()` function (see [Script Functions](doc-latest/gen-content.html#scriptfunc)).

A special function is `prince-glyph-index(int)`, which allows to choose a glyph from a font by the index of that glyph in the font. Note that this is very non-portable, as glyph indices are specific to individual font versions. But it is a possible escape hatch for people who need a specific glyph and don't have any other way of accessing it (by Unicode character or OpenType substitution).

#### The optional `page-policy` value

The generated content functions `element()`, `counter()`, `counters()`, `string()` and `flow()`, have a second, optional argument, namely `page-policy`, which can be one of the following:

`start`  
defining the value the counter had at the start of the page (eg. the last value it was set to on the previous page);

`first`  
defining the first value the counter was set to on this page, or the same as `start` if the counter was not set on this page;

`first-except`  
defining the first value the counter was set to on this page, or no value at all if it was set on this page;

`last`  
defining the last value the counter was set to on this page, or the same as `start` if the counter was not set on this page.

The page policy values of the `string()` function are only meaningful for `string()` used in page region content.

For a good example of its use, please see [Copying content from the document](doc-latest/paged.html#content-copying-text).

### Before and After pseudo-elements

The `content` property can be applied to the `::before` and `::after` pseudo-elements to add generated content before or after an element. For example, adding section numbers in front of headings or including quotation marks around a block of text.

CSS

``
    h1::before, h1::after { content: "***" }

This will place three asterisks before and after `h1` elements.

### Counters and Numbering

Counters are the mechanism provided by CSS to perform numbering. They can be used to number list items, pages, footnotes, sections and any other document content that needs to be numbered.

#### Initializing and incrementing counters

To use a counter, it first needs to be initialized with the `counter-reset` property, which can be applied to any element and initializes one or more counters to the specified values, or to zero if no value is specified. The property can be used to reset a counter by re-initializing it.

Unless the resetting of a counter creates a nested counter, the scope of the counter includes the current element and all of its following siblings.

The `counter-increment` property applies to any element and increments or decrements one or more counters by the specified values, or by one if no value is specified.

The `counter-increment` and `counter-reset` properties are ignored on elements whose `display` property has the value `none`.

#### Displaying counters

Once initialized, a counter can be displayed with either the `counter()` or `counters()` function in a `content` property.

The `counter()` function generates a value for the innermost counter, formatted in the optional counter style (decimal by default - see [Counter styles](doc-latest/gen-content.html#counter-styles)).

The `counters()` function concatenates counters on different levels, separated with the separator string and formatted in the optional counter style (decimal by default - see [Counter styles](doc-latest/gen-content.html#counter-styles)).

CSS

``
    div.example1 { counter-reset: h3 h4 }
    div.example1 h3 { counter-increment: h3 }
    div.example1 h4 { counter-increment: h4 }
    div.example1 h3::before { content: counter(h3) }
    div.example1 h4::before {
        content: counter(h4, lower-alpha)
    }

This creates two counters inside the scope of a `div` element. All `h3` and `h4` heading elements will be numbered starting from 1 and the counter number will be placed before the heading text.

CSS

``
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

In this example the `h4` counter will be reset at each `h3` element, to produce sub-section numbering that restarts at each new section.

#### Nested counters

If a counter is reset on an element and the same counter has also been reset on an ancestor of that element, a nested counter will be created. The scope of the nested counter is the current element only and its final value will not be carried onto its following siblings.

For example, a nested XHTML list with a `ul` element inside a `li` inside another `ul` creates a nested `list-item` counter.

CSS

``
    ol { counter-reset: list-item }
    li { counter-increment: list-item }
    li::marker {
        content: counters(list-item, ".", decimal);
        color: brown;
        font-weight: bold
    }

#### Counter styles

Counter values are displayed as decimal numbers by default, but they may be displayed using other styles such as roman numerals or consecutive letters of the alphabet.

CSS

``
    chapter { counter-increment: chapter-num }

    chapter::before {
        content: "Chapter " counter(chapter-num, upper-roman)
    }

This rule will generate text such as "Chapter IV" before each chapter, with the appropriate chapter number displayed in uppercase roman numerals.

The following table shows examples of the various counter styles:

|                          |                                    |
|--------------------------|------------------------------------|
| decimal                  | 1, 2, 3, … 9, 10, 11, …            |
| decimal-leading-zero     | 01, 02, 03, … 09, 10, 11, …        |
| lower-roman              | i, ii, iii, iv, v, vi, …           |
| upper-roman              | I, II, III, IV, V, VI, …           |
| lower-alpha, lower-latin | a, b, c, … z, aa, ab, …            |
| upper-alpha, upper-latin | A, B, C, … Z, AA, AB, …            |
| asterisks                | \*, \*\*, \*\*\*, \*\*\*\*, …      |
| lower-hexadecimal        | 1, 2, 3, … 9, a, b, c, …           |
| upper-hexadecimal        | 1, 2, 3, … 9, A, B, C, …           |
| octal                    | 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, … |
| binary                   | 1, 10, 11, 100, 101, 110, 111, …   |
| arabic-indic             | ١, ٢, ٣, ٤, ٥, ٦, …                |
| lower-greek              | α, β, γ, …, ι, κ, λ, …             |
| upper-greek              | Α, Β, Γ, …, Ι, Κ, Λ, …             |
| persian / urdu           | ۱, ۲, ۳, ۴, ۵, ۶, …                |
| cjk-decimal              | 一, 二, 三, 四, 五, 六, …          |
| japanese-informal        | 一, 二, 三, 四, 五, 六, …          |
| simp-chinese-informal    | 一, 二, 三, 四, 五, 六, …          |
| trad-chinese-informal    | 一, 二, 三, 四, 五, 六, …          |
| japanese-formal          | 壱, 弐, 参, 四, 五, 六, …          |
| simp-chinese-formal      | 壹, 贰, 叁, 肆, 伍, 陆, …          |
| trad-chinese-formal      | 壹, 貳, 參, 肆, 伍, 陸, …          |
| lower-norwegian          | a, b, c, … z, æ, ø, å, aa, ab, …   |
| upper-norwegian          | A, B, C, … Z, Æ, Ø, Å, AA, AB, …   |
| lower-russian            | а, б, в, г, д, е, ж, …             |
| upper-russian            | А, Б, В, Г, Д, Е, Ж, …             |
| lower-ukranian           | а, б, в, г, д, е, є, …             |
| upper-ukranian           | А, Б, В, Г, Д, Е, Є, …             |
| lower-belarusian         | а, б, в, г, д, е, ж, …             |
| upper-belarusian         | А, Б, В, Г, Д, Е, Ж, …             |
| lower-bulgarian          | а, б, в, г, д, е, ж, …             |
| upper-bulgarian          | А, Б, В, Г, Д, Е, Ж, …             |
| lower-serbian            | а, б, в, г, д, ђ, е, …             |
| upper-serbian            | А, Б, В, Г, Д, Ђ, Е, …             |
| repeat(x, y, z)          | x, y, z, xx, yy, zz, xxx, yyy, …   |
| symbols(x, y, z)         | x, y, z, 4, 5, 6, …                |

See also [User-defined counter styles](doc-latest/gen-content.html#counter-user-styles) for custom counters.

### Cross-references

Prince supports cross-references using generated content with two special functions: `target-counter()` and `target-content()`.

#### Using target-counter()

The `target-counter()` function can be used with the `content` property to reference the value of a counter at a linked element.

CSS

``
    a[href]::after {
        content: " [See page " target-counter(attr(href), page) "]"
    }

This will add a cross-reference after every link with the correct page number determined automatically. For example: \[See page 17\].

The `target-counter()` function can specify any counter, allowing cross-references to refer to list items, chapters or sections as well as pages or footnotes.

The `target-counter()` function can also take an optional counter style, similar to the normal counter function.

CSS

``
    a[href]::after {
        content: " [See chapter "
             target-counter(attr(href), chapter, upper-roman)
             "]"
    }

This will add a cross-reference after every link with the correct chapter number determined automatically and displayed using roman numerals. For example: \[See chapter IV\].

#### Using target-content()

The `target-content()` function can be used with the `content` property to reference the text content of a linked element.

CSS

``
    a[href]::after {
        content: " [See '" target-content(attr(href)) "']"
    }

This will add a cross-reference after every link that includes the text of the element being linked to, such as a chapter title. For example: \[See 'Introduction'\].

### Script Functions

Prince supports arbitrary JavaScript functions to be called from CSS generated content using the `prince-script()` function (see the `content` property). To make the functions available to CSS, the `Prince.addScriptFunc` method is used (see [The Prince Object](doc-latest/javascript.html#js-prince-obj)).

Please note that Prince is not running JavaScript by default - it needs to be explicitly enabled. See [Applying JavaScript in Prince](doc-latest/apply-javascript.html#applying-javascript).

CSS

``
    p::after {
        content: prince-script(myfunc)
    }

JavaScript

``
    function myfunc()
    {
        return "Some generated content text!";
    }

    Prince.addScriptFunc("myfunc", myfunc);

#### Accessing the current date and time

JavaScript functions have access to the current date and time, which can be added to the document using `prince-script()` in generated content.

CSS

``
    @page {
        @top {
        content: prince-script(datestamp)
        }
    }

JavaScript

``
    Prince.addScriptFunc("datestamp", function() {
        return (new Date()).toString();
    });

#### User-defined counter styles

The JavaScript functions used with `prince-script()` can take arguments that are themselves generated content. This allows functions to operate on counter values and implement new counter styles.

CSS

``
    li::marker {
        content: prince-script(mycounterstyle, counter(list-item))
    }

JavaScript

``
    Prince.addScriptFunc("mycounterstyle", function(n) {
        if (n == 1) return "one";
        else if (n == 2) return "two";
        else if (n == 3) return "three";
        else return n;
    });

For another way of creating user-defined counter styles, see [Generated Content Functions](doc-latest/gen-content.html#gen-content-functions).


---
title: Text formatting
---

### Text formatting

Text can be styled with CSS by defining font styles or text layout styles.

After choosing an appropriate typeface for your text with the `font-family` property (see [Fonts](doc-latest/fonts.html#fonts)), you can assign it different sizes with the `font-size` property.

Next up you should decide whether to give it some `color`. The default text color for a page is defined in the `body` selector, but each selector can have its own color.

``
    body {
        font-family: Helvetica, Arial, sans-serif;
        color: blue;
    }

Special formatting can be achieved through the `font-style`, `font-weight` or `font-variant` properties - all of which can also be set with the shorthand property `font`. For special effects one can use the properties `text-transform`, `text-decoration` - or even `text-shadow`.

It is also possible to style the vertical alignment of text in an inline box with the `vertical-align` property. The value `baseline` is the default, `sub` and `super` align the baseline of the element with the subscript-baseline or superscript-baseline of its parent respectively. The `text-top` and `text-bottom` values align the top of the element with the top or bottom of the parent's font, while `middle` aligns the middle of the element with the baseline plus half the x-height of the parent.

In order to determine how compact the text should be displayed, the `letter-spacing` can be used. Alternatively, the property `font-stretch` might be used, but note that it does not change the geometry of any arbitrary font by stretching or shrinking it - instead, it merely instructs Prince to choose the most appropriate face of the font, if the selected font offers several ones. Also note that this property is not supported for system fonts on Windows.

In a similar fashion, the property `word-spacing` can be used to determine the distance between words.

The directionality of the text is controlled through the [Writing Mode](doc-latest/writing-mode.html#writing-mode).

### Paragraph formatting

Now that you have decided on the basic properties of the text, you can turn your attention to styling the paragraphs. The `text-align` property is used to control how text is aligned within its containing box, while the `text-indent` property determines the indentation of the first line of text in the element.

If the `text-align` property has a value of `left`, `right` or `center`, the text will be aligned to the left, right or center respectively. The `justify` value instructs Prince to justify text. It is not uncommon, in printed texts, to align text based on whether the text appears on a left or right page. To support this, two new keywords are added to the `text-align` property: `inside` is the same as 'left' on right pages and 'right' on left pages, and `outside` is the same as 'right' on left pages and 'left' on right pages.

Prince adds the property `prince-text-justify` to define how to treat justified text for CJK languages. The value `prince-cjk` allows space to be inserted between CJK characters when justifying even if there aren't any space characters.

The last line of an element can receive its own alignment style with the `text-align-last` property. It takes the same values as `text-align`.

``
    p {
        text-align: justify;
        text-indent: 5em;
    }

It is also possible to style the first line of a paragraph in a different way - to achieve this, the selector `::first-line` is used.

``
    p::first-line {
        text-indent: 8em;
    }

It is not unusual to give the first letter of a paragraph a bigger font size than the rest of the paragraph. The selector `::first-letter` is useful for this purpose.

``
    p::first-letter {
        font-size: 2em;
    }

One of the most common use cases is for so-called drop caps - large capital letters at the beginning of a chapter that have the depth of several lines of text.

In the following example we are selecting the first letter of the first paragraph, which gets styled much bigger than the normal text, and gets floated to the left. The normal text is wrapping around this first large letter.

``
    p:first-child::first-letter {
        font-size: 5em;
        line-height: 3rem;
        float: left;
    }

Another important aspect when formatting a paragraph is how compact the text lines should appear on the printed page. The property `line-height` can be used to determine the height of text lines.

The property `line-stacking-strategy` allows to choose whether individual lines should have their height determined based on their content, or whether all lines in a paragraph should have the same height, or a compromise where their heights are determined by their content and then rounded up to a multiple of the paragraph line height.

In order to lay out text in a well-balanced way, it might at times be necessary to hyphenate some words - to enable hyphenation, the `hyphens` property is used. For details please refer to the section on [Hyphenation](doc-latest/hyphenation.html#hyphenation).

Prince also allows for line-breaking in certain situations even in the absence of whitespace - for example, after slashes in long URLs. This behavior can be disabled with the `prince-linebreak-magic` property for situations in which more precise control over line-breaking is preferred.

The property `overflow-wrap` controls wrapping behavior *of last resort*: whether it is better for a word to overflow its container, or to be broken at an arbitrary point (subject to `white-space`, and not splitting within a grapheme cluster), without adding a hyphen.

Prince does not support the value `break-word` of the property `word-break` to achieve a similar effect. Use the value `break-all` of `word-break`, or the property `overflow-wrap` with the value `break-word` instead.


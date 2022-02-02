---
title: Prince for Books
---

Prince for Books is a new venture that allows us to spend more time on features particularly sought by publishers.

The initial focus of work is on the features common to all books: making the pagination and line-breaking choices expected of books, by featuring a few extensions to CSS and fine-tuned algorithms.

For the time being, Prince for Books is only available as a a command-line application named `prince-books`. It is used like the standard Prince - see [Command-line Reference](command-line.md) for available options.

```
prince-books OPTIONS FILES [-o PDF]
```

To download it, head over to the [Prince for Books download page](/books/). It is available in package bundles only - to install it, the files need to be copied into place (Windows), or an installation script needs to be run (on Linux and MacOS X). It can be installed without problem alongside a normal Prince installation - the executable to run is called `prince-books`.

Line breaking
-------------

Prince for Books introduces a few new CSS properties to try handling line breaks in a more granular way, and additionally, it tries harder to avoid a hyphen at the end of a page and at the end of the last full line, as well as for ragged text (i.e. for left-aligned or centered text). It also tries to avoid a short last line, especially if it is shorter than the value of `text-indent`.

### The property `-prince-wrap-inside`

The property [`-prince-wrap-inside`](css-props.md#prop-prince-wrap-inside) offers a way to instruct Prince how to break text: the keyword `phrase` is for marking up a phrase that one would weakly prefer to keep on a single line. It adds to Prince's perceived cost of breaking within that phrase, but only a small cost, comparable to the cost of hyphenating a compound adjective such as ‘midyear’.

The keyword `avoid` is a stronger directive: it avoids breaking the text to which the property is applied even if it causes the affected text to be unusually tight, or the previous line to be unusually loose; but not if either line would become truly exceptionally tightly or loosely spaced.

This property would most commonly be used in headings, or perhaps in important passages of body text such as in instructions or for the name of a product in advertising. For example, if one opens a book that was printed before the widespread use of computers in publishing, then one would likely see that any headings that don't fit in one line won't simply put as much on the first line as fits, but will instead break somewhat according to natural phrasing.

To make it more likely for Prince for Books to produce this effect, one might put `span` elements around phrases, styling each of these spans with `-prince-wrap-inside: phrase`.

HTML

```html
    <h1>The <span>fulfilment <span>of the law</span></span>
      <span>and <span>of the prophets</span></span></h1>
```
CSS

```css
    span {
      -prince-wrap-inside: phrase;
    }
```
The example would produce a title line like this:

<p style="text-align: center">The fulfilment of the law<br/>
and of the prophets</p>

If however the final available space were narrower than the required space, Prince might instead format as:

<p style="text-align: center">The fulfilment<br/>
of the law and<br/>
of the prophets</p>

### The property `-prince-line-break-choices`

Another property for fine-tuning the line breaking behaviour is [`-prince-line-break-choices`](css-props.md#prop-prince-line-break-choices).

The keyword `title` is intended for title pages of books or chapters, where phrasing considerations are of prime consideration even at the cost of extremely unbalanced lines.

The keyword `heading`, on the other hand, is closer to `body`, differing mainly in that it's less likely to hyphenate, and is more willing to make the first line(s) a little shorter if doing so avoids a short last line.

The `*-greedy` keywords decide on line breaks solely based on the current line and on the length of the next word, never going back to change a decision on a line in the light of line-breaking issues encountered later.

The `*-lookahead` keywords enable paragraph-at-a-time line-breaking for the paragraph in a non-justified paragraph: choosing where to end the line not just based on what seems best for the current line (as one might decide if using a pen or typewriter), but also considering the effect on future lines.  It might better be described as "change previous lines", e.g. that if one finds that a loose line is produced, a human typesetter would check whether a short word or two could be brought forward from the previous line or two.

Enabling lookahead for a paragraph makes Prince take longer, though the results are typically slightly better: still ragged, but fewer lines that are much shorter than nearby lines.

A disadvantage of lookahead is that any "mistakes" (that is, differences from what a human would choose) risk appearing inexplicable to a reader, unlike with the non-lookahead versions where the only reason that a line would be noticeably short is where the following line starts with a long word.

This means that the non-lookahead versions might be a better choice in jobs where Prince's line breaks will be accepted without human oversight; whereas if a typesetter will look for and correct any problems in the rag of the paragraph, then the lookahead versions will typically give a better starting point.

<p id="note-typesetter">A typesetter's intervention currently involves modifying the HTML: it is not requireed to assign an <code>id</code> to each paragraph, but it is nevertheless common practice to do so for making other changes, such as changing the number of lines in a paragraph for pagination purposes (whether using <code>-prince-n-lines</code> or <code>word-spacing</code> or <code>letter-spacing</code>), or assigning a unique value to each chapter in order to change how many lines are on the last page of the chapter (say, by adding <code>1pt</code> to the inside margin). See also <a href="#spread-balancing">Spread Balancing</a>.</p>

To illustrate the difference, one could also say that non-lookahead versions give paragraph shapes reminiscent of those given by word processors and web browsers, while the lookahead versions come slightly closer to what one might find in books.

The keyword `fast` can be used for quick web-browers–style line breaking, useful for testing the effect of styling changes that don't depend on good line breaking.

The base stylesheet that Prince for Books applies to all HTML documents (i.e. the "user-agent style sheet", in CSS terminology) includes the ruleset

```
    h1, h2, h3, h4, h5, h6 {
        -prince-line-break-choices: heading;
    }
```
but HTML semantics alone do not distinguish content where the more extreme `-prince-line-break-choices: title` could be appropriate. Doing so requires additional conventions, such as those given in the [HTMLBook](https://oreillymedia.github.io/HTMLBook/) specification.

The below example applies `title-lookahead` line-breaking to the book title, chapter titles and part titles, while applying `heading-lookahead` line-breaking to subtitles.

CSS

```
    body[data-type="book"] > h1,
    body[data-type="book"] > heading > h1,
    section[data-type="chapter"] > h1,
    section[data-type="chapter"] > heading > h1,
    div[data-type="part"] > h1,
    div[data-type="part"] > heading > h1 {
        -prince-line-break-choices: title-lookahead;
    }

    heading > * {
        -prince-line-break-choices: heading-lookahead;
    }
```
HTMLBook uses a slightly non-standard representation of subtitles: not using `hgroup`, and using `p` elements rather than the heading elements `h1` to `h6`.

### The property `-prince-forced-breaks`

The property [`-prince-forced-breaks`](css-props.md#prop-prince-forced-breaks) controls whether a line ended by a "preserved newline" (such as introduced by `<br>`) should preferably appear to be a normal full line (as if ended only by normal line wrapping), or whether being shorter than a normal full line is actually preferable, for example to mark a deliberate break.

The `br` element would usually create a visually forced break, treating that line much as if it were the last line of a paragraph. For example, it would continue to do so in any UA not supporting the property [`-prince-forced-breaks`](css-props.md#prop-prince-forced-breaks) (thus getting in the way of reading the content in some other UA, or using the same source document for web/epub deployment), or if the stylesheet doesn't load. Tweaking line breaks using `-prince-forced-breaks: full` is not intended to be consciously noticeable by readers, so `br` would not be the best approximation in HTML.

CSS

```
    lb { white-space: pre; }
    lb::before { content: "\A"; -prince-forced-breaks: full; }
```
This example shows the styling for an `<lb />` element, which can be added to force breaks. Of course we first need to instruct Prince to respect "preserved newlines" - we do this with the [`white-space`](css-props.md#prop-white-space) property.

Literally using the element name `lb` in the html namespace would make the document not valid HTML. The element could be either in a non-HTML namespace, or one could use a custom element to be inserted with JavaScript.

If multiple editions are to produced from a single source document, then a variation would be

CSS

```
    lb[ed ~= "a"]::before { ... }
```
in the stylesheet for edition A (and similarly for the stylesheets of other editions), and

HTML

```html
    <lb ed="a c" />
```
in the document where a line break should be forced only in editions A and C.

The difference is particularly marked in justified text, where lines ended by `-prince-forced-breaks: full` are subject to justification like most other lines.

Spread Balancing
----------------

A prominent new feature is the concept of "spread balancing": Prince for Books can try to ensure that the content on two-page spreads is the same height. Due to the `widows` and `orphans` properties (see [Widows and orphans](paged.md#widows-and-orphans)) it is possible for one page to have fewer lines than the other, and this unevenness looks upsetting.

Prince for Books also tries to reduce the number of uneven spreads.

### The property `-prince-page-fill`

The property [`-prince-page-fill`](css-props.md#prop-prince-page-fill) is used to tweak the page balancing mechanism.

With its default value `prefer-balance`, Prince for Books will check how much space is left at the bottom of each page of a two-page spread and compares it with the line-height to determine whether the pages end with different numbers of lines. If one page is longer than the other, Prince will attempt to repack that page one line shorter, so that they match in height. If it is still unbalanced, which might happen due to triggering another widows/orphans constraint, it will revert to the original layout.

Prince also includes the bottom margin in the evaluation for balancing, allowing said margin to be truncated for purposes of deciding whether the two pages can be considered to have the same length.

To turn off the balancing mechanism, use the value `prefer-fill`.

### The property `-prince-n-lines`

Another way to address page balancing is by using the property [`-prince-n-lines`](css-props.md#prop-prince-n-lines). It is for use in the pagination phase of typesetting, for ensuring that page ends are even while avoiding widows and other awkward breaks.

Typically, the best paragraph to apply this property to will be either already long and/or currently has either a very short or almost full last line, so that the paragraph doesn't need to change much in length compared to its existing "length" (as reckoned by its height). That is, the typesetter can choose a good candidate by looking at how much the last line would need to shrink or grow (including a word or two for the next line if growing), and how many times that length would fit in the height of the paragraph, with more being better.

As noted [before](#note-typesetter), a typesetter's intervention currently involves modifying the HTML.

Values other than the initial value of `auto` request that the paragraph occupy the given number of lines; where values other than a simple integer are relative to the number of lines that the paragraph would have occupied if this property still had its initial value (`auto`).

The value `change` means to make the paragraph either a line longer or shorter, whichever will be deemed to look better. This value is provided for the common case that a page break opportunity exists both at a line earlier and at a line later than where the page end would naturally fall, as would typically be the case if the only relevant restriction arises from `widows:2` or `orphans:2` or a minor heading that occupies two body lines worth of height. Thus, this tends to be the most commonly used value for this property, other than leaving at its initial value.

A simple integer value is the least convenient value to use (since choosing the desired number requires counting the existing number of lines, and since this property is most commonly used on long paragraphs). Its value lies in the fact that the result is not subject to variation in "the number of lines that the paragraph would otherwise have had", as can occur if this paragraph spans a page end, and a subsequent styling change causes some earlier content to changes in size, affecting what is the last line before the break, and if this in turn affects line-breaking decisions made to avoid having a hyphenation at the end of a page.

Alternatives to adjusting a paragraph length include adding extra space around a heading, an image or at the start of a chapter.

### Fractional Widows

Another feature in Prince for Books are the "fractional widows": the [`widows`](css-props.md#prop-widows) property is allowed a value expressed as percentage.

```
    p {
      widows: 50%;
    }
```
This indicates that one widow line is accepted, as long as the line width is at least the given percentage value of the available page width, to avoid the worst case of having a widow line that is only one or two words long.


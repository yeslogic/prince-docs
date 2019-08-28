CSS Selectors
-------------

Below are the CSS selectors supported by Prince. For their precise definition please refer to the CSS specification - Prince largely implements [Selectors Level 4](https://www.w3.org/TR/selectors4/).

### Terminology and Definitions

|                         |                                                                                                                                                                                                                        |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `selector`              | Can refer to a `simple selector`, `compound selector`, `complex selector`, or `selector list`.                                                                                                                         |
| `selector list`         | A comma-separate list of selectors.                                                                                                                                                                                    |
| `compound selector`     | A chain of simple selectors that are not separated by a combinator.                                                                                                                                                    |
| `simple selector`       | Either a type selector, universal selector, attribute selector, class selector, ID selector, or pseudo-class.                                                                                                          |
| `relative selector`     | A shorthand for selectors that represent elements relative to a `:scope` element.                                                                                                                                      |
| `combinator`            | Punctuation that represents a particular kind of relationship between compound selectors on either side.                                                                                                               |
| `An+B`                  | This micro-syntax to indicate indexes in a list of sibling elements represents an integer `step (A)` and `offset (B)`, i.e. it indicates the `An+B`th elements in a list. It also takes the keywords `odd` and `even`. |
| `expanded element name` | The tuple of local element name and namespace name.                                                                                                                                                                    |

### Logical Combinations

Selector List

`E, F, G`

A comma-separated list of selectors represents all the elements selected by each selector of the list.

The Matches-Any Pseudo-class

`E:matches(s1, s2)`

The matches-any pseudo-class represents an element `E` that is represented by the list of compound selectors it takes as argument.

The Negation Pseudo-class

`E:not(s1, s2)`

The negation pseudo-class represents an element `E` that is not represented by the list of compound selectors it takes as argument.

The Relational Pseudo-class

`E:has(rs1, rs2)`

The relational pseudo-class represents an element `E`, if either of the relative selectors `rs1` or `rs2`, when evaluated with `E` as the `:scope` element, match an element.

The Contains Pseudo-class

`E:contains(foo)`

The contains pseudo-class represents an element `E` containing the text `foo`.

### Elemental Selectors

Type (tag name) selectors

`E`

A type selector representing an element `E` in the default namespace.

`|E`

A type selector representing an element `E` in no namespace.

`ns|E`

A type selector representing an element `E` in the namespace `ns`.

`*|E`

A type selector representing an element `E` in any or no namespace.

Universal selectors

`*`

A universal selector representing all elements in the default namespace.

`|*`

A universal selector representing all elements in no namespace.

`ns|*`

A type selector representing all elements in the namespace `ns`.

`*|*`

A type selector representing all elements.

### Attribute Selectors

Case-sensitivity of the attributes and values depends on the document language. To match values case-insensitively, the attribute selector may contain the identifier `i` before the closing bracket. (Example: `[att=val i]`)

Default namespaces do not apply to attributes. Therefore a namespace `ns` that has been previously declared should be added before the namespace separator `|` preceding the attribute name.

Attribute presence and value selectors

`[att]`

An attribute selector representing an element with the `att` attribute.

`[att=val]`

An attribute selector representing an element with the `att` attribute with the value `val`.

`[att~=val]`

An attribute selector representing an element with the `att` attribute containing the value `val`.

`[att|=val]`

An attribute selector representing an element with the `att` attribute equal to or beginning with the value `val`.

Substring matching attribute selectors

`[att^=val]`

An attribute selector representing an element with the `att` attribute whose value begins with the prefix `val`.

`[att$=val]`

An attribute selector representing an element with the `att` attribute whose value ends with the suffix `val`.

`[att*=val]`

An attribute selector representing an element with the `att` attribute whose value contains `val`.

Class selectors

`E.val`

A class selector representing an element `E` with a class identifier `val`.

ID selectors

`E#val`

An ID selector representing an element `E` with an ID identifier `val`.

### Linguistic Pseudo-classes

The language pseudo-class

`E:lang(C)`

The language pseudo-class represents an element `E` that is in the language `C`.

### Input Pseudo-classes

The input control states

`:enabled`

The `:enabled` pseudo-class represents user interface elements that are in the enabled state.

`:disabled`

The `:disabled` pseudo-class represents user interface elements that are in the disabled state.

`:read-write`

The `:read-write` pseudo-class matches an element that is user-alterable.

`:read-only`

The `:read-only` pseudo-class matches an element that is not user-alterable.

The input value state

`:checked`

The `:checked` pseudo-class represents user interface elements such as radio and checkbox elements that are selected by the user.

### Location Pseudo-classes

The link pseudo-classes

`E:link`

The `:link` pseudo-class applies to links that have not yet been visited.

`E:visited`

The `:visited` pseudo-class applies to visited links.

The contextual reference element pseudo-class

`E:scope`

The contextual reference element pseudo-class represents an element `E` being a designated contextual reference element. `:scope` is supported in conjunction with `:has()`, meaning that `:scope` matches the element that `:has()` is applied to.

### Tree-Structural pseudo-classes

The `:root` pseudo-class

`:root`

The `:root` pseudo-class represents an element that is the root of the document. In HTML 4 this is always the `HTML` element.

The `:empty` pseudo-class

`:empty`

The `:empty` pseudo-class represents an element that has no children at all.

The child-indexed pseudo-classes

`:nth-child(An+B of S)`

The `:nth-child(An+B)` pseudo-class represents the `An+B`th element that matches the selector list `S` among its inclusive siblings.

`:nth-last-child(An+B of S)`

The `:nth-last-child(An+B)` pseudo-class represents the `An+B`th element that matches the selector list `S` among its inclusive siblings, counting backwards from the end.

`:first-child`

The `:first-child` pseudo-class represents an element that is first among its inclusive siblings.

`:last-child`

The `:last-child` pseudo-class represents an element that is last among its inclusive siblings.

`:only-child`

The `:only-child` pseudo-class represents an element that has no siblings.

The typed child-indexed pseudo-classes

`:nth-of-type(An+B)`

The `:nth-of-type(An+B)` pseudo-class represents the `An+B`th element with the same namespace and type among its inclusive siblings.

`:nth-last-of-type(An+B)`

The `:nth-last-of-type(An+B)` pseudo-class represents the `An+B`th element with the same namespace and type among its inclusive siblings, counting backwards from the end.

`:first-of-type`

The `:first-of-type` pseudo-class represents an element that is the first with a particular namespace and type among its inclusive siblings.

`:last-of-type`

The `:last-of-type` pseudo-class represents an element that is the first with a particular namespace and type among its inclusive siblings, counting backwards from the end.

`:only-of-type`

The `:only-of-type` pseudo-class represents an element that has no siblings with the same namespace and type.

### Combinators

Descendant combinator

`E F`

An `F` element descendant of an `E` element.

`E >> F`

Child combinator

`E > F`

An `F` element child of an `E` element.

Next-sibling combinator

`E + F`

An `F` element immediately preceded by an `E` element.

Following-sibling combinator

`E ~ F`

An `F` element preceded by an `E` element.

### Tree-Abiding Pseudo-element Selectors

Generated content pseudo-elements

`::before`

Represents a styleable child pseudo-element immediately before the originating element's actual content.

`::after`

Represents a styleable child pseudo-element immediately after the originating element's actual content.

List markers

`::marker`

Represents the automatically generated marker box of a list item.

### Typographic Pseudo-element Selectors

The `::first-line` pseudo-element

`::first-line`

Represents the content of the formatted line of the originating element.

The `::first-letter` pseudo-element

`::first-letter`

Represents the first typographic letter unit of the first formatted line of the originating element, if it is not preceded by other content.

### Footnote Pseudo-element Selectors

The `::footnote-call` pseudo-element

`::footnote-call`

Represents the footnote calls, i.e. the anchors that refer to footnotes.

The `::footnote-marker` pseudo-element

`::footnote-marker`

Represents the footnote markers placed in front of the actual footnote text.

### Page Selectors

The `nth(N)` selector

`nth(N)`

Represents the *N*th page of the document: `@page:nth(42) {...}`

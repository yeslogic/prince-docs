---
title: Applying Style Sheets in Prince
---


Applying Style Sheets in Prince
-------------------------------

Prince can apply style sheets from three different sources:

User style sheets  
-   specified from the command line interface or the GUI

Author style sheets  
-   referenced from HTML using &lt;link rel="stylesheet" ... /&gt;
-   specified in HTML using the &lt;style&gt; element
-   referenced from XML documents using the `xml-stylesheet` processing instruction

Default style sheets  
-   applied automatically depending on the type of the document being formatted

### Importing Style Sheets

Style sheets may import other style sheets using [`@import`](doc-latest/doc-refs.html#at-import) rules. These rules must occur before any other rules or declarations in the style sheet, and have the effect of importing all the rules and declarations from the specified style sheet. See .

``
    @import "base.css";
    @import "custom.css";

    /* more declarations */

### Conflicting Declarations

Multiple style sheets can be applied and in some cases declarations from different style sheets may conflict. For example, one style sheet might specify that heading elements should use the Times New Roman font, while a different style sheet might specify that heading elements should use the Arial font:

First style sheet:

``
    h1 {
        font-family: "Times New Roman";
        font-size: 24pt;
    }

Second style sheet:

``
    h1 {
        font-family: "Arial";
        color: red
    }

In the above example, the `font-family` declarations conflict, and only one can possibly be applied. However, the `font-size` and `color` declarations do not conflict, and thus both will be applied to the `h1` element.

### Priority Determination

Style sheets are applied using a cascading process that calculates a priority for each declaration. Conflicting declarations are resolved by choosing the declaration with the highest priority and ignoring the remaining ones.

Priority is determined by looking at the origin of the declaration and whether or not it is labeled with `!important`.

1.  Default style sheets (lowest priority)
2.  User style sheets
3.  Author style sheets
4.  Author style sheets, `!important` declarations
5.  User style sheets, `!important` declarations (highest priority)

If the conflicting declarations have the same origin and importance, the priority is determined by comparing the specificity of the selectors used to apply them. (Combinations of selectors have even higher priority).

1.  Universal selector, eg. "\*" (lowest priority)
2.  Type selector, eg. "`h1`"
3.  Attribute, Class and Pseudo-class selectors
4.  ID selectors, eg. "`#id`" (highest priority)

If the conflicting declarations have the same specificity, the declaration that occurs *last* in the style sheet has the *highest* priority.

If the declarations are from different style sheets, the declaration that occurs in the *last* style sheet to be specified has the *highest* priority. This is based on the order that style sheets are specified on the command line and also on the order that `xml-stylesheet` processing instructions occur in the document.

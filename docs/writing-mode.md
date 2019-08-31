---
title: Writing Mode
---

### Writing Mode

A writing mode describes the directionality of a script, i.e. it describes the direction the script is to be read. In (X)HTML, the language of a document is defined by the `lang` or `xml:lang` attributes. To control the rendering of the text, a couple of CSS properties can be used: the `` property defines the inline direction of the script, that is left-to-right (like e.g. Latin or Indic scripts) or right-to-left (like e.g. Arabic and Hebrew scripts).

The `` property, on the other hand, describes the block direction of the script, namely whether the text should be laid out horizontally, top-to-bottom (like e.g. Latin or Arabic scripts), or vertically, right-to-left (like e.g. Chinese scripts). The default value is `horizontal-tb`, which means horizontal, top-to-bottom.

Prince sets the PDF direction based on the direction and writing mode of the document root element to support right-to-left books.

Changing the writing mode of a document, that is, the inline or block direction, not only changes the direction of the script, but also affects several other aspects of the printed document.

The page selector pseudo-classes `:recto` and `:verso` (see ) are relative to the direction of the script. In a left-to-right script, `:recto` is the right-hand side of a spread, and `:verso` is the left-hand side, while in a right-to-left script these values are inverted: `:recto` defines the left-hand side of a spread, and `:verso` defines the right-hand side. See also .

Columns change their orientation when the writing mode is changed - `` `vertical-rl` arranges the columns horizontally, top-to-bottom.

This can be used to rotate content - see and .

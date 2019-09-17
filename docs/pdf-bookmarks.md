---
title: PDF Bookmarks
---

### PDF Bookmarks

Prince can create PDF bookmarks that link to document content.

#### Bookmark levels

PDF bookmarks have numeric levels that place them in a bookmark hierarchy. For example, a bookmark at level 2 can contain nested bookmarks at level 3, or any higher level. The level of a bookmark is controlled using the `prince-bookmark-level` property, shown here being applied to the XHTML heading elements:

``
    h1 { prince-bookmark-level: 1 }
    h2 { prince-bookmark-level: 2 }
    h3 { prince-bookmark-level: 3 }
    h4 { prince-bookmark-level: 4 }
    h5 { prince-bookmark-level: 5 }
    h6 { prince-bookmark-level: 6 }

The default value for this property is `none`, which inhibits the creation of a bookmark for the element.

It is possible to control the state of the bookmark, i.e. whether the bookmark is in an `open` or `closed` state, with the `prince-bookmark-state` property. In this way you can close each chapter and hide the subsections for documents that are very long, or you can choose to have a deep bookmark tree.

#### Bookmark labels

PDF bookmarks have textual labels that by default are copied from the text content of the element that generated the bookmark. The text of this label may be controlled using the `prince-bookmark-label` property, shown here being applied to a chapter element that has a title attribute:

CSS

``
    chapter {
        prince-bookmark-level: 1;
        prince-bookmark-label: attr(title)
    }

This property can take any content value, including literal text strings and counters. See [Generated Content Functions](gen-content.html#gen-content-functions).

#### Bookmark targets

PDF bookmarks are links that display a particular part of the document when activated. By default, a bookmark will link to the element that generated the bookmark, which is sensible behavior for bookmarks generated from headings or chapter elements. It is also possible to change the target of a bookmark using the `prince-bookmark-target` property, which takes a URL directly or an attribute containing a URL:

CSS

``
    bookmark { prince-bookmark-target: url(#intro) }
    bookmark { prince-bookmark-target: attr(href) }

The default value for this property is `self`, referring to the element that generated the bookmark.


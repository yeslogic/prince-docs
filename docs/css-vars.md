---
title: Custom properties (CSS variables)
---

Custom properties (CSS variables)
---------------------------------

Complex designs often have very large amounts of CSS with a lot of repeated values. The same color might for example be used in hundreds of different places, requiring a global search-and-replace if that color needs to be changed. Prince supports custom properties, which allow a value to be stored in one place, then be referenced in all other places.

The custom properties are set by using the cutom property notation, which requires the use of two dashes (`--`) before the custom property name - a good approach is to set this property on the `:root` pseudo-class (see [Tree-Structural pseudo-classes](doc-refs.html#sel-structural)). It is then accessed in other places by using the `var()` function (see [CSS Functional Expressions](doc-refs.html#css-functions)).

Unlike other CSS properties, custom property names are case-sensitive.

``
    :root {
      --main-text-color: black;
    }
    p {
      color: var(--main-text-color);
    }

When a fallback value needs to be provided, this can be indicated in the `var()` function.

``
    p {
      color: var(--main-text-color, brown);
    }


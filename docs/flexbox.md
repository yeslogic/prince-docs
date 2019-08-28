### Flex Layout

Flex layout is a layout model similar to the block layout. It lacks and but gains powerful possibilities to distribute space and align content in a more flexible way. The content of a flex container can alter its height and width to best fill the available space, it can be easily aligned even if the size is unknown or dynamic, and most importantly it can be laid out in any direction, as opposed to the traditional layout models that would either be vertically-based (block layout) or horizontally-based (inline layout).

Prince supports the Flex specification fully, the main limitation currently being page breaks.

In Flex layout some properties apply to the parent element, i.e. to the flex container, while others apply to the children, or flex items.

#### Flex Containers

To use the flex layout, flex needs to be enabled on the parent element to create the flex container by defining the `flex` value for the `` property.

``
    .flexcontainer {
        : flex;
    }

Next, the direction of the flex layout can be defined by means of the `` property: rightwards, leftwards, downwards, or even upwards! With the `` property the wrapping of the flex container is controlled - the default is to try to arrange all items on one line. The shorthand property `` can be used to define `` and `` together.

``
    .flexcontainer {
        : flex;
        : row wrap;
    }

The property `` defines the alignment of the content along the main axis - extra free space can be distributed in various ways after or before the content, or in specific ways between the flex items. The alignment along the cross axis is controlled with the `` property. In case there are multiple item lines in a flex container, the alignment of the lines can be controlled with the `` property. If there is only one line, the property has no effect.

#### Flex Items

By default, items are placed in the source order inside a flex container, but with the `` property it can be modified!

``
    .flexitem1 {
        : 2;
    }
    .flexitem2 {
        : 1;
    }
    .flexitem3 {
        : 3;
    }

The `` property defines the proportion by which a flex item can grow, if necessary, while `` defines the proportion by which an item can shrink. The `` property defines the default size of an element, before the remaining space is distributed. However, it is recommended to use the shorthand property `` instead - the value for the `` is mandatory, the other properties are automatically set in an intelligent way.

``
    .flexitem {
        : 2;
    }

Finally, the property `` allows the default alignment specified with the `` property to be overridden for individual flex items.

It is important to know that margins of flex items behave in a slightly special way: margins of adjacent flex items do not collapse, and using the keyword `auto` for the margins of a flex item will automatically distribute the available space equally around the item - and it will be centered in both axis!

Please notice that percentage values of margins and paddings of flex items are resolved by Prince against the inline axis, i.e. left/right/top/bottom percentages all resolve against width.

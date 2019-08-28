### Box Model

All HTML elements follow the CSS box model. Their ``, ``, `` and `` can all be styled.

#### Margin

At the very outside of the box are the margins. Each margin's size can be set individualy with the properties , , and , or you can use the *shorthand property* to specify all four margins together. The syntax of the shorthand property is:

``
    : top right bottom left

If there are only:

-   three values: then the left margin is set equal to the right margin;
-   two values: then the left margin is set equal to the right margin, and the bottom margin is set equal to the top margin;
-   one value: then all margins are made equal.

Prince expands the margin properties with `` and ``, defining the margin respectively on the inside or outside of a spread: inside is on the right when used on a left-facing page, and on left on a right-facing page; outside is on the left when used on a left-facing page, and on the right on a right-facing page.

Always keep in mind that `` and `` of blocks are combined (i.e. "collapsed") into a single margin according to a possibly rather complex behavior known as *margin collapsing*. The notable exception is the behavior of margins in .

#### Border

The border of a box can be styled with several border properties. The borders can either be individually styled with ``, ``, `` and ``, or the shorthand property `` can be used to style all four borders of the box in the same way.

To style the borders, the ``, `` and `` properties can be used. For each of them, also `top`, `right`, `bottom` and `left` variants are available to style each border separately.

The property `` property can be used for styling rounded corners.

The `` property splits the borders into parts along the border edge - the first part is visible, the second one is invisible, the third part is visible, etc.

#### Padding

The property `padding` defines the padding inside the box model. Each padding's size can be set individually with the properties , , and , or you can use the *shorthand property* to specify all four paddings together. The syntax of the shorthand property is:

``
    : top right bottom left

If there are only:

-   three values: then the left padding is set equal to the right padding;
-   two values: then the left padding is set equal to the right padding, and the bottom padding is set equal to the top padding;
-   one value: then all paddings are made equal.

#### Background

The background of an element can be styled with the `` and the `` properties, or with the shorthand property ``. See also .

Various standard properties are available to position the background, to clip it or to determine whether, and how it should be repeated. Prince extends control on the background with the `` property, used to control image size in print (see ).

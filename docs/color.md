Color
-----

Prince supports RGB, RGBA, CMYK, HSL, HSLA and named spot colors. For Prince's color management, please see the section.

Prince understands CSS basic color names as well as the list of extended color keywords from the [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/#named-colors). It also supports the keywords `transparent` and `currentColor`.

### RGB(A)

To use an RGB color in CSS, it can be expressed either as a value in hexadecimal notation, as an `rgb()` function or as a named color. For example, red can be specified in three ways:

``
    color: #ff0000
    color: rgb(255, 0, 0)
    color: red

RGBA colors are equivalent to RGB plus an opacity (or alpha) value between 0 and 1. When the opacity is 0 the color is transparent, and when the opacity is 1 the color is identical to the RGB color. RGBA colors are expressed as an `rgba()` function.

``
    color: rgba(255, 0, 0, 1)    // red
    color: rgba(255, 0, 0, 0.5)  // translucent red
    color: rgba(255, 0, 0, 0)    // fully transparent

### CMYK

CMYK colors can be specified using the `cmyk()` or, alternatively, the equivalent `device-cmyk()` function syntax. An optional fifth value is for the alpha channel, i.e. for opacity.

``
    color: cmyk(1, 0, 0, 0)       // cyan
    color: cmyk(0, 1, 1, 0)       // red
    color: cmyk(0, 0, 0, 1)       // black
    color: cmyk(0, 1, 1, 0, 0.1)  // translucent red

### HSL(A)

HSL(A) colors are supported as of Prince 12.1 .

HSL (Hue-Saturation-Lightness) color values can be specified with the `hsl()` function. HSL takes three values:

-   Hue is a degree on the color wheel (`0` or `360` is red, `120` is green, `240` is blue);
-   Saturation is a percentage value, and
-   Lightness is also a percentage.

Just as with RGB values expressed with the `rgb()` function an alpha channel for opacity can be added with the `rgba()` function, so also for HSL color values an alpha channel can be expressed with the `hsla()` function, which adds a fourth value for alpha - when the opacity is 0 the color is transparent, and when the opacity is 1 the color is identical to the HSL color.

The advantage of HSL over RGB is that it is much more intuitive to use and easier to create sets of matching colors (by keeping the same hue and varying the lightness and saturation values).

### Spot colors

Prince also supports named spot colors that can be defined with the [`@prince-color`](doc-latest/doc-refs.html#at-prince-color) rule. An alternate color must also be specified with the `` property, using any of the valid notations for RGB, HSL or CMYK colors. This will be used in situations where the named color is not available, such as when viewing the generated PDF file on a display. Please note that `` cannot be RGBA, HSLA or CMYKA.

``
    @prince-color MyColor {
        alternate-color: rgb(255,0,0)
    }

Spot colors can be used with the `prince-color()` function with a specified tint value between 0 and 1, which defaults to 1, or alternatively expressed in percentage. They can also enable overprint:

``
    color: prince-color(MyColor)                  // tint 1.0
    color: prince-color(MyColor, 0.5)             // tint 0.5
    color: prince-color(MyColor, overprint)       // tint 1.0, overprint
    color: prince-color(MyColor, 50%, overprint)  // tint 50%, overprint

Another way to enable overprint is by using the `prince-overprint()` function, which allows to specify a non-transparent color value.

``
    color: prince-overprint(red);
    color: prince-overprint(cmyk(0,1,1,0));



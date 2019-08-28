Character Entities
==================

Character entities are a method of including arbitrary characters in XML documents by referencing their UNICODE number rather than writing them directly. CSS has a similar mechanism to include special characters.

This can be convenient when you wish to include characters such as smart quotes, symbols or mathematical operators that do not exist in the character encoding that you are using for your XML documents (such as ASCII or ISO-8859-1 "Latin-1"), or when you want to insert some of these characters into the final layout by means of CSS.

Here is an example of including smart quotes in an XML document using character entities:

XML

``
    <p>
    These are &#x201C;smart quotes&#x201D; to be precise.
    </p>

Output

These are “smart quotes” to be precise.

A typical usecase for character entities in CSS is the `` property, which replaces a certain character string with another one. In the sample ["Reconstructed Essay"](sample-docs.html#essay) ([HTML](http://www.princexml.com/howcome/2016/samples/malthus/essay.html) - [PDF](http://www.princexml.com/howcome/2016/samples//malthus/essay.pdf)), the property is used to replace occurrences of "s" with the "long s" to recreate the original printed book.

CSS

``
    body {
      prince-text-replace: "s" "\017F";
    }

The tables below are a quick reference for some commonly requested UNICODE characters, expressed in XML and CSS notation; for everything else please consult the [UNICODE code charts](http://www.unicode.org/charts/).

Accented Letters
----------------

| XML       | CSS    | Character | Name         |
|-----------|--------|-----------|--------------|
| &\#xC0;   | \\C0   | À         | A grave      |
| &\#xC1;   | \\C1   | Á         | A acute      |
| &\#xC2;   | \\C2   | Â         | A circumflex |
| &\#xC3;   | \\C3   | Ã         | A tilde      |
| &\#xC4;   | \\C4   | Ä         | A dieresis   |
| &\#xC5;   | \\C5   | Å         | A ring       |
| &\#xC7;   | \\C7   | Ç         | C cedilla    |
| &\#xC8;   | \\C8   | È         | E grave      |
| &\#xC9;   | \\C9   | É         | E acute      |
| &\#xCA;   | \\CA   | Ê         | E circumflex |
| &\#xCB;   | \\CB   | Ë         | E dieresis   |
| &\#xCC;   | \\CC   | Ì         | I grave      |
| &\#xCD;   | \\CD   | Í         | I acute      |
| &\#xCE;   | \\CE   | Î         | I circumflex |
| &\#xCF;   | \\CF   | Ï         | I dieresis   |
| &\#xD1;   | \\D1   | Ñ         | N tilde      |
| &\#xD2;   | \\D2   | Ò         | O grave      |
| &\#xD3;   | \\D3   | Ó         | O acute      |
| &\#xD4;   | \\D4   | Ô         | O circumflex |
| &\#xD5;   | \\D5   | Õ         | O tilde      |
| &\#xD6;   | \\D6   | Ö         | O dieresis   |
| &\#xD8;   | \\D8   | Ø         | O slash      |
| &\#xD9;   | \\D9   | Ù         | U grave      |
| &\#xDA;   | \\DA   | Ú         | U acute      |
| &\#xDB;   | \\DB   | Û         | U circumflex |
| &\#xDC;   | \\DC   | Ü         | U dieresis   |
| &\#x0178; | \\0178 | Ÿ         | Y dieresis   |
| &\#xE0;   | \\E0   | à         | a grave      |
| &\#xE1;   | \\E1   | á         | a acute      |
| &\#xE2;   | \\E2   | â         | a circumflex |
| &\#xE3;   | \\E3   | ã         | a tilde      |
| &\#xE4;   | \\E4   | ä         | a dieresis   |
| &\#xE5;   | \\E5   | å         | a ring       |
| &\#xE7;   | \\E7   | ç         | c cedilla    |
| &\#xE8;   | \\E8   | è         | e grave      |
| &\#xE9;   | \\E9   | é         | e acute      |
| &\#xEA;   | \\EA   | ê         | e circumflex |
| &\#xEB;   | \\EB   | ë         | e dieresis   |
| &\#xEC;   | \\EC   | ì         | i grave      |
| &\#xED;   | \\ED   | í         | i acute      |
| &\#xEE;   | \\EE   | î         | i circumflex |
| &\#xEF;   | \\EF   | ï         | i dieresis   |
| &\#x0131; | \\0131 | ı         | dotless i    |
| &\#xF1;   | \\F1   | ñ         | n tilde      |
| &\#xF2;   | \\F2   | ò         | o grave      |
| &\#xF3;   | \\F3   | ó         | o acute      |
| &\#xF4;   | \\F4   | ô         | o circumflex |
| &\#xF5;   | \\F5   | õ         | o tilde      |
| &\#xF6;   | \\F6   | ö         | o dieresis   |
| &\#xF8;   | \\F8   | ø         | o slash      |
| &\#xF9;   | \\F9   | ù         | u grave      |
| &\#xFA;   | \\FA   | ú         | u acute      |
| &\#xFB;   | \\FB   | û         | u circumflex |
| &\#xFC;   | \\FC   | ü         | u dieresis   |
| &\#xFF;   | \\FF   | ÿ         | y dieresis   |

Symbols
-------

| XML       | CSS    | Character | Name                 |
|-----------|--------|-----------|----------------------|
| &\#x2022; | \\2022 | •         | bullet               |
| &\#xA2;   | \\A2   | ¢         | cent                 |
| &\#xA9;   | \\A9   | ©         | copyright            |
| &\#xA4;   | \\A4   | ¤         | currency             |
| &\#x2020; | \\2020 | †         | dagger               |
| &\#xB0;   | \\B0   | °         | degree               |
| &\#xF7;   | \\F7   | ÷         | divide               |
| &\#x2021; | \\2021 | ‡         | double dagger        |
| &\#x0192; | \\0192 | ƒ         | florin               |
| &\#x2044; | \\2044 | ⁄         | fraction             |
| &\#xA1;   | \\A1   | ¡         | inverted exclamation |
| &\#xBF;   | \\BF   | ¿         | inverted question    |
| &\#xB5;   | \\B5   | µ         | micro                |
| &\#xB7;   | \\B7   | ·         | middle dot           |
| &\#xAC;   | \\AC   | ¬         | not                  |
| &\#xAA;   | \\AA   | ª         | ordfeminine          |
| &\#xBA;   | \\BA   | º         | ordmasculine         |
| &\#xB6;   | \\B6   | ¶         | paragraph            |
| &\#x2030; | \\2030 | ‰         | perthousand          |
| &\#xB1;   | \\B1   | ±         | plusminus            |
| &\#xAE;   | \\AE   | ®         | registered           |
| &\#xA7;   | \\A7   | §         | section              |
| &\#xA3;   | \\A3   | £         | sterling             |
| &\#x2122; | \\2122 | ™         | trademark            |
| &\#xA5;   | \\A5   | ¥         | yen                  |

Quotes
------

| XML       | CSS    | Character | Name                   |
|-----------|--------|-----------|------------------------|
| &\#x2018; | \\2018 | ‘         | left single quote      |
| &\#x2019; | \\2019 | ’         | right single quote     |
| &\#x201C; | \\201C | “         | left double quote      |
| &\#x201D; | \\201D | ”         | right double quote     |
| &\#x2039; | \\2039 | ‹         | left single guillemet  |
| &\#x203A; | \\203A | ›         | right single guillemet |
| &\#xAB;   | \\AB   | «         | left double guillemet  |
| &\#xBB;   | \\BB   | »         | right double guillemet |
| &\#x201A; | \\201A | ‚         | base single quote      |
| &\#x201E; | \\201E | „         | base double quote      |

Accents
-------

| XML       | CSS     | Character | Name         |
|-----------|---------|-----------|--------------|
| &\#xB4;   | \\xB4   | ´         | acute        |
| &\#x02D8; | \\x02D8 | ˘         | breve        |
| &\#x02C7; | \\x02C7 | ˇ         | caron        |
| &\#xB8;   | \\xB8   | ¸         | cedilla      |
| &\#x5E;   | \\x5E   | ^         | circumflex   |
| &\#xA8;   | \\xA8   | ¨         | dieresis     |
| &\#x02D9; | \\x02D9 | ˙         | dot accent   |
| &\#x02DD; | \\x02DD | ˝         | double acute |
| &\#xAF;   | \\xAF   | ¯         | macron       |
| &\#x02DB; | \\x02DB | ˛         | ogonek       |
| &\#x02DA; | \\x02DA | ˚         | ring         |
| &\#x02DC; | \\x02DC | ˜         | tilde        |

Special Space Characters
------------------------

| XML       | CSS     | Character                          | Name                      |
|-----------|---------|------------------------------------|---------------------------|
| &\#x20;   | \\x20   | <span>foo</span> <span>bar</span>  | space                     |
| &\#xa0;   | \\xa0   | <span>foo</span> <span>bar</span>  | no-break space            |
| &\#x2008; | \\x2008 | <span>foo</span> <span>bar</span>  | punctuation space         |
| &\#x2009; | \\x2009 | <span>foo</span> <span>bar</span>  | thin space                |
| &\#x200a; | \\x200a | <span>foo</span> <span>bar</span>  | hair space                |
| &\#x200b; | \\x200b | <span>foo</span>​<span>bar</span>  | zero width space          |
| &\#x202f; | \\x202f | <span>foo</span> <span>bar</span>  | narrow no-break space     |
| &\#x205f; | \\x205f | <span>foo</span> <span>bar</span>  | medium mathematical space |
| &\#xfeff; | \\xfeff | <span>foo</span>﻿<span>bar</span>  | zero width no-break space |
| &\#x1680; | \\x1680 | <span>foo</span> <span>bar</span>  | ogham space mark          |
| &\#x2000; | \\x2000 | <span>foo</span> <span>bar</span>  | en quad                   |
| &\#x2001; | \\x2001 | <span>foo</span> <span>bar</span>  | em quad                   |
| &\#x2002; | \\x2002 | <span>foo</span> <span>bar</span>  | en space                  |
| &\#x2003; | \\x2003 | <span>foo</span> <span>bar</span>  | em space                  |
| &\#x3000; | \\x3000 | <span>foo</span>　<span>bar</span> | ideographic space         |

Miscellaneous
-------------

| XML       | CSS     | Character | Name        |
|-----------|---------|-----------|-------------|
| &\#x2026; | \\x2026 | …         | ellipsis    |
| &\#x2014; | \\x2014 | —         | em dash     |
| &\#x2013; | \\x2013 | –         | en dash     |
| &\#xFB01; | \\xFB01 | ﬁ         | fi ligature |
| &\#xFB02; | \\xFB02 | ﬂ         | fl ligature |
| &\#xC6;   | \\xC6   | Æ         | AE          |
| &\#xE6;   | \\xE6   | æ         | ae          |
| &\#x0152; | \\x0152 | Œ         | OE          |
| &\#x0153; | \\x0153 | œ         | oe          |
| &\#xDF;   | \\xDF   | ß         | sharp s     |



---
title: Color Names
---

CSS offers several ways of defining colors - either by keyword, or by numerical specification expressed as RGB, RGBA, CMYK, HSL or HSLA colors. For more details, please see the chapter on [Color](graphics.md#color).


Color Keywords
--------------

Color keywords are an easy way of expressing colors by naming them.  The names resolve to colors in sRGB.

The 16 [basic color keywords](#basic-color-keywords) come from the original VGA palette and were adopted into HTML.  Most of the [extended color keywords](#extended-color-keywords) come from a version of the X11 color system used in Unix-derived systems, and were adopted into SVG.

### Basic color keywords

The following table shows the basic color keywords with their sRGB values.

<table class="grid">
  <thead>
    <tr>
      <th>Color</th>
      <th>Name</th>
      <th>Hex RGB</th>
      <th>Decimal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="background-color: black"></td>
      <td>black</td>
      <td>#000000</td>
      <td>0,0,0</td>
    </tr>
    <tr>
      <td style="background-color: silver"></td>
      <td>silver</td>
      <td>#C0C0C0</td>
      <td>192,192,192</td>
    </tr>
    <tr>
      <td style="background-color: gray"></td>
      <td>gray</td>
      <td>#808080</td>
      <td>128,128,128</td>
    </tr>
    <tr>
      <td style="background-color: white"></td>
      <td>white</td>
      <td>#FFFFFF</td>
      <td>255,255,255</td>
    </tr>
    <tr>
      <td style="background-color: maroon"></td>
      <td>maroon</td>
      <td>#800000</td>
      <td>128,0,0</td>
    </tr>
    <tr>
      <td style="background-color: red"></td>
      <td>red</td>
      <td>#FF0000</td>
      <td>255,0,0</td>
    </tr>
    <tr>
      <td style="background-color: purple"></td>
      <td>purple</td>
      <td>#800080</td>
      <td>128,0,128</td>
    </tr>
    <tr>
      <td style="background-color: fuchsia"></td>
      <td>fuchsia</td>
      <td>#FF00FF</td>
      <td>255,0,255</td>
    </tr>
    <tr>
      <td style="background-color: green"></td>
      <td>green</td>
      <td>#008000</td>
      <td>0,128,0</td>
    </tr>
    <tr>
      <td style="background-color: lime"></td>
      <td>lime</td>
      <td>#00FF00</td>
      <td>0,255,0</td>
    </tr>
    <tr>
      <td style="background-color: olive"></td>
      <td>olive</td>
      <td>#808000</td>
      <td>128,128,0</td>
    </tr>
    <tr>
      <td style="background-color: yellow"></td>
      <td>yellow</td>
      <td>#FFFF00</td>
      <td>255,255,0</td>
    </tr>
    <tr>
      <td style="background-color: navy"></td>
      <td>navy</td>
      <td>#000080</td>
      <td>0,0,128</td>
    </tr>
    <tr>
      <td style="background-color: blue"></td>
      <td>blue</td>
      <td>#0000FF</td>
      <td>0,0,255</td>
    </tr>
    <tr>
      <td style="background-color: teal"></td>
      <td>teal</td>
      <td>#008080</td>
      <td>0,128,128</td>
    </tr>
    <tr>
      <td style="background-color: aqua"></td>
      <td>aqua</td>
      <td>#00FFFF</td>
      <td>0,255,255</td>
    </tr>
  </tbody>
</table>

### Extended color keywords

However, CSS offers also an extended list of color keywords, shared with the SVG color keyword names.

A *caveat*, given in the [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/#named-colors) specification, is important: it is often hard to imagine what each color name will look like, the names are not evenly distributed throughout the sRGB color volume and the names are not even internally consistent.  But their use and implementation has been widespread for decades and they come in handy.

<table class="grid">
  <thead>
    <tr>
      <th>Color</th>
      <th>Name</th>
      <th>Hex RGB</th>
      <th>Decimal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="background-color: aliceblue"></td>
      <td>aliceblue</td>
      <td>#F0F8FF</td>
      <td>rgb(240,248,255)</td>
    </tr>
    <tr>
      <td style="background-color: antiquewhite"></td>
      <td>antiquewhite</td>
      <td>#FAEBD7</td>
      <td>250,235,215</td>
    </tr>
    <tr>
      <td style="background-color: aqua"></td>
      <td>aqua, cyan</td>
      <td>#00FFFF</td>
      <td>0,255,255</td>
    </tr>
    <tr>
      <td style="background-color: aquamarine"></td>
      <td>aquamarine</td>
      <td>#7FFFD4</td>
      <td>127,255,212</td>
    </tr>
    <tr>
      <td style="background-color: azure"></td>
      <td>azure</td>
      <td>#F0FFFF</td>
      <td>240,255,255</td>
    </tr>
    <tr>
      <td style="background-color: beige"></td>
      <td>beige</td>
      <td>#F5F5DC</td>
      <td>245,245,220</td>
    </tr>
    <tr>
      <td style="background-color: bisque"></td>
      <td>bisque</td>
      <td>#FFE4C4</td>
      <td>255,228,196</td>
    </tr>
    <tr>
      <td style="background-color: black"></td>
      <td>black</td>
      <td>#000000</td>
      <td>0,0,0</td>
    </tr>
    <tr>
      <td style="background-color: blanchedalmond"></td>
      <td>blanchedalmond</td>
      <td>#FFEBCD</td>
      <td>255,235,205</td>
    </tr>
    <tr>
      <td style="background-color: blue"></td>
      <td>blue</td>
      <td>#0000FF</td>
      <td>0,0,255</td>
    </tr>
    <tr>
      <td style="background-color: blueviolet"></td>
      <td>blueviolet</td>
      <td>#8A2BE2</td>
      <td>138,43,226</td>
    </tr>
    <tr>
      <td style="background-color: brown"></td>
      <td>brown</td>
      <td>#A52A2A</td>
      <td>165,42,42</td>
    </tr>
    <tr>
      <td style="background-color: burlywood"></td>
      <td>burlywood</td>
      <td>#DEB887</td>
      <td>222,184,135</td>
    </tr>
    <tr>
      <td style="background-color: cadetblue"></td>
      <td>cadetblue</td>
      <td>#5F9EA0</td>
      <td>95,158,160</td>
    </tr>
    <tr>
      <td style="background-color: chartreuse"></td>
      <td>chartreuse</td>
      <td>#7FFF00</td>
      <td>127,255,0</td>
    </tr>
    <tr>
      <td style="background-color: chocolate"></td>
      <td>chocolate</td>
      <td>#D2691E</td>
      <td>210,105,30</td>
    </tr>
    <tr>
      <td style="background-color: coral"></td>
      <td>coral</td>
      <td>#FF7F50</td>
      <td>255,127,80</td>
    </tr>
    <tr>
      <td style="background-color: cornflowerblue"></td>
      <td>cornflowerblue</td>
      <td>#6495ED</td>
      <td>100,149,237</td>
    </tr>
    <tr>
      <td style="background-color: cornsilk"></td>
      <td>cornsilk</td>
      <td>#FFF8DC</td>
      <td>255,248,220</td>
    </tr>
    <tr>
      <td style="background-color: crimson"></td>
      <td>crimson</td>
      <td>#DC143C</td>
      <td>220,20,60</td>
    </tr>
    <tr>
      <td style="background-color: cyan"></td>
      <td>cyan, aqua</td>
      <td>#00FFFF</td>
      <td>0,255,255</td>
    </tr>
    <tr>
      <td style="background-color: darkblue"></td>
      <td>darkblue</td>
      <td>#00008B</td>
      <td>0,0,139</td>
    </tr>
    <tr>
      <td style="background-color: darkcyan"></td>
      <td>darkcyan</td>
      <td>#008B8B</td>
      <td>0,139,139</td>
    </tr>
    <tr>
      <td style="background-color: darkgoldenrod"></td>
      <td>darkgoldenrod</td>
      <td>#B8860B</td>
      <td>184,134,11</td>
    </tr>
    <tr>
      <td style="background-color: darkgray"></td>
      <td>darkgray, darkgrey</td>
      <td>#A9A9A9</td>
      <td>169,169,169</td>
    </tr>
    <tr>
      <td style="background-color: darkgreen"></td>
      <td>darkgreen</td>
      <td>#006400</td>
      <td>0,100,0</td>
    </tr>
    <tr>
      <td style="background-color: darkkhaki"></td>
      <td>darkkhaki</td>
      <td>#BDB76B</td>
      <td>189,183,107</td>
    </tr>
    <tr>
      <td style="background-color: darkmagenta"></td>
      <td>darkmagenta</td>
      <td>#8B008B</td>
      <td>139,0,139</td>
    </tr>
    <tr>
      <td style="background-color: darkolivegreen"></td>
      <td>darkolivegreen</td>
      <td>#556B2F</td>
      <td>85,107,47</td>
    </tr>
    <tr>
      <td style="background-color: darkorange"></td>
      <td>darkorange</td>
      <td>#FF8C00</td>
      <td>255,140,0</td>
    </tr>
    <tr>
      <td style="background-color: darkorchid"></td>
      <td>darkorchid</td>
      <td>#9932CC</td>
      <td>153,50,204</td>
    </tr>
    <tr>
      <td style="background-color: darkred"></td>
      <td>darkred</td>
      <td>#8B0000</td>
      <td>139,0,0</td>
    </tr>
    <tr>
      <td style="background-color: darksalmon"></td>
      <td>darksalmon</td>
      <td>#E9967A</td>
      <td>233,150,122</td>
    </tr>
    <tr>
      <td style="background-color: darkseagreen"></td>
      <td>darkseagreen</td>
      <td>#8FBC8F</td>
      <td>143,188,143</td>
    </tr>
    <tr>
      <td style="background-color: darkslateblue"></td>
      <td>darkslateblue</td>
      <td>#483D8B</td>
      <td>72,61,139</td>
    </tr>
    <tr>
      <td style="background-color: darkslategray"></td>
      <td>darkslategray, darkslategrey</td>
      <td>#2F4F4F</td>
      <td>47,79,79</td>
    </tr>
    <tr>
      <td style="background-color: darkturquoise"></td>
      <td>darkturquoise</td>
      <td>#00CED1</td>
      <td>0,206,209</td>
    </tr>
    <tr>
      <td style="background-color: darkviolet"></td>
      <td>darkviolet</td>
      <td>#9400D3</td>
      <td>148,0,211</td>
    </tr>
    <tr>
      <td style="background-color: deeppink"></td>
      <td>deeppink</td>
      <td>#FF1493</td>
      <td>255,20,147</td>
    </tr>
    <tr>
      <td style="background-color: deepskyblue"></td>
      <td>deepskyblue</td>
      <td>#00BFFF</td>
      <td>0,191,255</td>
    </tr>
    <tr>
      <td style="background-color: dimgray"></td>
      <td>dimgray, dimgrey</td>
      <td>#696969</td>
      <td>105,105,105</td>
    </tr>
    <tr>
      <td style="background-color: dodgerblue"></td>
      <td>dodgerblue</td>
      <td>#1E90FF</td>
      <td>30,144,255</td>
    </tr>
    <tr>
      <td style="background-color: firebrick"></td>
      <td>firebrick</td>
      <td>#B22222</td>
      <td>178,34,34</td>
    </tr>
    <tr>
      <td style="background-color: floralwhite"></td>
      <td>floralwhite</td>
      <td>#FFFAF0</td>
      <td>255,250,240</td>
    </tr>
    <tr>
      <td style="background-color: forestgreen"></td>
      <td>forestgreen</td>
      <td>#228B22</td>
      <td>34,139,34</td>
    </tr>
    <tr>
      <td style="background-color: fuchsia"></td>
      <td>fuchsia, magenta</td>
      <td>#FF00FF</td>
      <td>255,0,255</td>
    </tr>
    <tr>
      <td style="background-color: gainsboro"></td>
      <td>gainsboro</td>
      <td>#DCDCDC</td>
      <td>220,220,220</td>
    </tr>
    <tr>
      <td style="background-color: ghostwhite"></td>
      <td>ghostwhite</td>
      <td>#F8F8FF</td>
      <td>248,248,255</td>
    </tr>
    <tr>
      <td style="background-color: gold"></td>
      <td>gold</td>
      <td>#FFD700</td>
      <td>255,215,0</td>
    </tr>
    <tr>
      <td style="background-color: goldenrod"></td>
      <td>goldenrod</td>
      <td>#DAA520</td>
      <td>218,165,32</td>
    </tr>
    <tr>
      <td style="background-color: gray"></td>
      <td>gray, grey</td>
      <td>#808080</td>
      <td>128,128,128</td>
    </tr>
    <tr>
      <td style="background-color: green"></td>
      <td>green</td>
      <td>#008000</td>
      <td>0,128,0</td>
    </tr>
    <tr>
      <td style="background-color: greenyellow"></td>
      <td>greenyellow</td>
      <td>#ADFF2F</td>
      <td>173,255,47</td>
    </tr>
    <tr>
      <td style="background-color: honeydew"></td>
      <td>honeydew</td>
      <td>#F0FFF0</td>
      <td>240,255,240</td>
    </tr>
    <tr>
      <td style="background-color: hotpink"></td>
      <td>hotpink</td>
      <td>#FF69B4</td>
      <td>255,105,180</td>
    </tr>
    <tr>
      <td style="background-color: indianred"></td>
      <td>indianred</td>
      <td>#CD5C5C</td>
      <td>205,92,92</td>
    </tr>
    <tr>
      <td style="background-color: indigo"></td>
      <td>indigo</td>
      <td>#4B0082</td>
      <td>75,0,130</td>
    </tr>
    <tr>
      <td style="background-color: ivory"></td>
      <td>ivory</td>
      <td>#FFFFF0</td>
      <td>255,255,240</td>
    </tr>
    <tr>
      <td style="background-color: khaki"></td>
      <td>khaki</td>
      <td>#F0E68C</td>
      <td>240,230,140</td>
    </tr>
    <tr>
      <td style="background-color: lavender"></td>
      <td>lavender</td>
      <td>#E6E6FA</td>
      <td>230,230,250</td>
    </tr>
    <tr>
      <td style="background-color: lavenderblush"></td>
      <td>lavenderblush</td>
      <td>#FFF0F5</td>
      <td>255,240,245</td>
    </tr>
    <tr>
      <td style="background-color: lawngreen"></td>
      <td>lawngreen</td>
      <td>#7CFC00</td>
      <td>124,252,0</td>
    </tr>
    <tr>
      <td style="background-color: lemonchiffon"></td>
      <td>lemonchiffon</td>
      <td>#FFFACD</td>
      <td>255,250,205</td>
    </tr>
    <tr>
      <td style="background-color: lightblue"></td>
      <td>lightblue</td>
      <td>#ADD8E6</td>
      <td>173,216,230</td>
    </tr>
    <tr>
      <td style="background-color: lightcoral"></td>
      <td>lightcoral</td>
      <td>#F08080</td>
      <td>240,128,128</td>
    </tr>
    <tr>
      <td style="background-color: lightcyan"></td>
      <td>lightcyan</td>
      <td>#E0FFFF</td>
      <td>224,255,255</td>
    </tr>
    <tr>
      <td style="background-color: lightgoldenrodyellow"></td>
      <td>lightgoldenrodyellow</td>
      <td>#FAFAD2</td>
      <td>250,250,210</td>
    </tr>
    <tr>
      <td style="background-color: lightgray"></td>
      <td>lightgray, lightgrey</td>
      <td>#D3D3D3</td>
      <td>211,211,211</td>
    </tr>
    <tr>
      <td style="background-color: lightgreen"></td>
      <td>lightgreen</td>
      <td>#90EE90</td>
      <td>144,238,144</td>
    </tr>
    <tr>
      <td style="background-color: lightpink"></td>
      <td>lightpink</td>
      <td>#FFB6C1</td>
      <td>255,182,193</td>
    </tr>
    <tr>
      <td style="background-color: lightsalmon"></td>
      <td>lightsalmon</td>
      <td>#FFA07A</td>
      <td>255,160,122</td>
    </tr>
    <tr>
      <td style="background-color: lightseagreen"></td>
      <td>lightseagreen</td>
      <td>#20B2AA</td>
      <td>32,178,170</td>
    </tr>
    <tr>
      <td style="background-color: lightskyblue"></td>
      <td>lightskyblue</td>
      <td>#87CEFA</td>
      <td>135,206,250</td>
    </tr>
    <tr>
      <td style="background-color: lightslategray"></td>
      <td>lightslategray, lightslategrey</td>
      <td>#778899</td>
      <td>119,136,153</td>
    </tr>
    <tr>
      <td style="background-color: lightsteelblue"></td>
      <td>lightsteelblue</td>
      <td>#B0C4DE</td>
      <td>176,196,222</td>
    </tr>
    <tr>
      <td style="background-color: lightyellow"></td>
      <td>lightyellow</td>
      <td>#FFFFE0</td>
      <td>255,255,224</td>
    </tr>
    <tr>
      <td style="background-color: lime"></td>
      <td>lime</td>
      <td>#00FF00</td>
      <td>0,255,0</td>
    </tr>
    <tr>
      <td style="background-color: limegreen"></td>
      <td>limegreen</td>
      <td>#32CD32</td>
      <td>50,205,50</td>
    </tr>
    <tr>
      <td style="background-color: linen"></td>
      <td>linen</td>
      <td>#FAF0E6</td>
      <td>250,240,230</td>
    </tr>
    <tr>
      <td style="background-color: magenta"></td>
      <td>magenta, fuchsia</td>
      <td>#FF00FF</td>
      <td>255,0,255</td>
    </tr>
    <tr>
      <td style="background-color: maroon"></td>
      <td>maroon</td>
      <td>#800000</td>
      <td>128,0,0</td>
    </tr>
    <tr>
      <td style="background-color: mediumaquamarine"></td>
      <td>mediumaquamarine</td>
      <td>#66CDAA</td>
      <td>102,205,170</td>
    </tr>
    <tr>
      <td style="background-color: mediumblue"></td>
      <td>mediumblue</td>
      <td>#0000CD</td>
      <td>0,0,205</td>
    </tr>
    <tr>
      <td style="background-color: mediumorchid"></td>
      <td>mediumorchid</td>
      <td>#BA55D3</td>
      <td>186,85,211</td>
    </tr>
    <tr>
      <td style="background-color: mediumpurple"></td>
      <td>mediumpurple</td>
      <td>#9370DB</td>
      <td>147,112,219</td>
    </tr>
    <tr>
      <td style="background-color: mediumseagreen"></td>
      <td>mediumseagreen</td>
      <td>#3CB371</td>
      <td>60,179,113</td>
    </tr>
    <tr>
      <td style="background-color: mediumslateblue"></td>
      <td>mediumslateblue</td>
      <td>#7B68EE</td>
      <td>123,104,238</td>
    </tr>
    <tr>
      <td style="background-color: mediumspringgreen"></td>
      <td>mediumspringgreen</td>
      <td>#00FA9A</td>
      <td>0,250,154</td>
    </tr>
    <tr>
      <td style="background-color: mediumturquoise"></td>
      <td>mediumturquoise</td>
      <td>#48D1CC</td>
      <td>72,209,204</td>
    </tr>
    <tr>
      <td style="background-color: mediumvioletred"></td>
      <td>mediumvioletred</td>
      <td>#C71585</td>
      <td>199,21,133</td>
    </tr>
    <tr>
      <td style="background-color: midnightblue"></td>
      <td>midnightblue</td>
      <td>#191970</td>
      <td>25,25,112</td>
    </tr>
    <tr>
      <td style="background-color: mintcream"></td>
      <td>mintcream</td>
      <td>#F5FFFA</td>
      <td>245,255,250</td>
    </tr>
    <tr>
      <td style="background-color: mistyrose"></td>
      <td>mistyrose</td>
      <td>#FFE4E1</td>
      <td>255,228,225</td>
    </tr>
    <tr>
      <td style="background-color: moccasin"></td>
      <td>moccasin</td>
      <td>#FFE4B5</td>
      <td>255,228,181</td>
    </tr>
    <tr>
      <td style="background-color: navajowhite"></td>
      <td>navajowhite</td>
      <td>#FFDEAD</td>
      <td>255,222,173</td>
    </tr>
    <tr>
      <td style="background-color: navy"></td>
      <td>navy</td>
      <td>#000080</td>
      <td>0,0,128</td>
    </tr>
    <tr>
      <td style="background-color: oldlace"></td>
      <td>oldlace</td>
      <td>#FDF5E6</td>
      <td>253,245,230</td>
    </tr>
    <tr>
      <td style="background-color: olive"></td>
      <td>olive</td>
      <td>#808000</td>
      <td>128,128,0</td>
    </tr>
    <tr>
      <td style="background-color: olivedrab"></td>
      <td>olivedrab</td>
      <td>#6B8E23</td>
      <td>107,142,35</td>
    </tr>
    <tr>
      <td style="background-color: orange"></td>
      <td>orange</td>
      <td>#FFA500</td>
      <td>255,165,0</td>
    </tr>
    <tr>
      <td style="background-color: orangered"></td>
      <td>orangered</td>
      <td>#FF4500</td>
      <td>255,69,0</td>
    </tr>
    <tr>
      <td style="background-color: orchid"></td>
      <td>orchid</td>
      <td>#DA70D6</td>
      <td>218,112,214</td>
    </tr>
    <tr>
      <td style="background-color: palegoldenrod"></td>
      <td>palegoldenrod</td>
      <td>#EEE8AA</td>
      <td>238,232,170</td>
    </tr>
    <tr>
      <td style="background-color: palegreen"></td>
      <td>palegreen</td>
      <td>#98FB98</td>
      <td>152,251,152</td>
    </tr>
    <tr>
      <td style="background-color: paleturquoise"></td>
      <td>paleturquoise</td>
      <td>#AFEEEE</td>
      <td>175,238,238</td>
    </tr>
    <tr>
      <td style="background-color: palevioletred"></td>
      <td>palevioletred</td>
      <td>#DB7093</td>
      <td>219,112,147</td>
    </tr>
    <tr>
      <td style="background-color: papayawhip"></td>
      <td>papayawhip</td>
      <td>#FFEFD5</td>
      <td>255,239,213</td>
    </tr>
    <tr>
      <td style="background-color: peachpuff"></td>
      <td>peachpuff</td>
      <td>#FFDAB9</td>
      <td>255,218,185</td>
    </tr>
    <tr>
      <td style="background-color: peru"></td>
      <td>peru</td>
      <td>#CD853F</td>
      <td>205,133,63</td>
    </tr>
    <tr>
      <td style="background-color: pink"></td>
      <td>pink</td>
      <td>#FFC0CB</td>
      <td>255,192,203</td>
    </tr>
    <tr>
      <td style="background-color: plum"></td>
      <td>plum</td>
      <td>#DDA0DD</td>
      <td>221,160,221</td>
    </tr>
    <tr>
      <td style="background-color: powderblue"></td>
      <td>powderblue</td>
      <td>#B0E0E6</td>
      <td>176,224,230</td>
    </tr>
    <tr>
      <td style="background-color: purple"></td>
      <td>purple</td>
      <td>#800080</td>
      <td>128,0,128</td>
    </tr>
    <tr>
      <td style="background-color: rebeccapurple"></td>
      <td>rebeccapurple</td>
      <td>#663399</td>
      <td>102,51,153</td>
    </tr>
    <tr>
      <td style="background-color: red"></td>
      <td>red</td>
      <td>#FF0000</td>
      <td>255,0,0</td>
    </tr>
    <tr>
      <td style="background-color: rosybrown"></td>
      <td>rosybrown</td>
      <td>#BC8F8F</td>
      <td>188,143,143</td>
    </tr>
    <tr>
      <td style="background-color: royalblue"></td>
      <td>royalblue</td>
      <td>#4169E1</td>
      <td>65,105,225</td>
    </tr>
    <tr>
      <td style="background-color: saddlebrown"></td>
      <td>saddlebrown</td>
      <td>#8B4513</td>
      <td>139,69,19</td>
    </tr>
    <tr>
      <td style="background-color: salmon"></td>
      <td>salmon</td>
      <td>#FA8072</td>
      <td>250,128,114</td>
    </tr>
    <tr>
      <td style="background-color: sandybrown"></td>
      <td>sandybrown</td>
      <td>#F4A460</td>
      <td>244,164,96</td>
    </tr>
    <tr>
      <td style="background-color: seagreen"></td>
      <td>seagreen</td>
      <td>#2E8B57</td>
      <td>46,139,87</td>
    </tr>
    <tr>
      <td style="background-color: seashell"></td>
      <td>seashell</td>
      <td>#FFF5EE</td>
      <td>255,245,238</td>
    </tr>
    <tr>
      <td style="background-color: sienna"></td>
      <td>sienna</td>
      <td>#A0522D</td>
      <td>160,82,45</td>
    </tr>
    <tr>
      <td style="background-color: silver"></td>
      <td>silver</td>
      <td>#C0C0C0</td>
      <td>192,192,192</td>
    </tr>
    <tr>
      <td style="background-color: skyblue"></td>
      <td>skyblue</td>
      <td>#87CEEB</td>
      <td>135,206,235</td>
    </tr>
    <tr>
      <td style="background-color: slateblue"></td>
      <td>slateblue</td>
      <td>#6A5ACD</td>
      <td>106,90,205</td>
    </tr>
    <tr>
      <td style="background-color: slategray"></td>
      <td>slategray, slategrey</td>
      <td>#708090</td>
      <td>112,128,144</td>
    </tr>
    <tr>
      <td style="background-color: snow"></td>
      <td>snow</td>
      <td>#FFFAFA</td>
      <td>255,250,250</td>
    </tr>
    <tr>
      <td style="background-color: springgreen"></td>
      <td>springgreen</td>
      <td>#00FF7F</td>
      <td>0,255,127</td>
    </tr>
    <tr>
      <td style="background-color: steelblue"></td>
      <td>steelblue</td>
      <td>#4682B4</td>
      <td>70,130,180</td>
    </tr>
    <tr>
      <td style="background-color: tan"></td>
      <td>tan</td>
      <td>#D2B48C</td>
      <td>210,180,140</td>
    </tr>
    <tr>
      <td style="background-color: teal"></td>
      <td>teal</td>
      <td>#008080</td>
      <td>0,128,128</td>
    </tr>
    <tr>
      <td style="background-color: thistle"></td>
      <td>thistle</td>
      <td>#D8BFD8</td>
      <td>216,191,216</td>
    </tr>
    <tr>
      <td style="background-color: tomato"></td>
      <td>tomato</td>
      <td>#FF6347</td>
      <td>255,99,71</td>
    </tr>
    <tr>
      <td style="background-color: turquoise"></td>
      <td>turquoise</td>
      <td>#40E0D0</td>
      <td>64,224,208</td>
    </tr>
    <tr>
      <td style="background-color: violet"></td>
      <td>violet</td>
      <td>#EE82EE</td>
      <td>238,130,238</td>
    </tr>
    <tr>
      <td style="background-color: wheat"></td>
      <td>wheat</td>
      <td>#F5DEB3</td>
      <td>245,222,179</td>
    </tr>
    <tr>
      <td style="background-color: white"></td>
      <td>white</td>
      <td>#FFFFFF</td>
      <td>255,255,255</td>
    </tr>
    <tr>
      <td style="background-color: whitesmoke"></td>
      <td>whitesmoke</td>
      <td>#F5F5F5</td>
      <td>245,245,245</td>
    </tr>
    <tr>
      <td style="background-color: yellow"></td>
      <td>yellow</td>
      <td>#FFFF00</td>
      <td>255,255,0</td>
    </tr>
    <tr>
      <td style="background-color: yellowgreen"></td>
      <td>yellowgreen</td>
      <td>#9ACD32</td>
      <td>154,205,50</td>
    </tr>
  </tbody>
</table>

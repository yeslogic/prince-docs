---
title: Color Names
---

export const Highlight = ({color}) => (
  <>
  <td
    style={{
      backgroundColor: color,
    }}>
  </td>
  <td>
    {color}
  </td>
  </>
);

CSS offers several ways of defining colors - either by keyword, or by numerical specification expressed as RGB, RGBA, CMYK, HSL or HSLA colors. For more details, please see the chapter on [Color](graphics.md#color).


Color Keywords
--------------

Color keywords are an easy way of expressing colors by naming them.  The names resolve to colors in sRGB.

The 16 [basic color keywords](#basic-color-keywords) come from the original VGA palette and were adopted into HTML.  Most of the [extended color keywords](#extended-color-keywords) come from a version of the X11 color system used in Unix-derived systems, and were adopted into SVG.

### Basic color keywords

The following table shows the basic color keywords with their sRGB values.

<table class="grid" class="colortable">
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
      <Highlight color="black"></Highlight>
      <td>#000000</td>
      <td>0,0,0</td>
    </tr>
    <tr>
      <Highlight color="silver"></Highlight>
      <td>#C0C0C0</td>
      <td>192,192,192</td>
    </tr>
    <tr>
      <Highlight color="gray"></Highlight>
      <td>#808080</td>
      <td>128,128,128</td>
    </tr>
    <tr>
      <Highlight color="white"></Highlight>
      <td>#FFFFFF</td>
      <td>255,255,255</td>
    </tr>
    <tr>
      <Highlight color="maroon"></Highlight>
      <td>#800000</td>
      <td>128,0,0</td>
    </tr>
    <tr>
      <Highlight color="red"></Highlight>
      <td>#FF0000</td>
      <td>255,0,0</td>
    </tr>
    <tr>
      <Highlight color="purple"></Highlight>
      <td>#800080</td>
      <td>128,0,128</td>
    </tr>
    <tr>
      <Highlight color="fuchsia"></Highlight>
      <td>#FF00FF</td>
      <td>255,0,255</td>
    </tr>
    <tr>
      <Highlight color="green"></Highlight>
      <td>#008000</td>
      <td>0,128,0</td>
    </tr>
    <tr>
      <Highlight color="lime"></Highlight>
      <td>#00FF00</td>
      <td>0,255,0</td>
    </tr>
    <tr>
      <Highlight color="olive"></Highlight>
      <td>#808000</td>
      <td>128,128,0</td>
    </tr>
    <tr>
      <Highlight color="yellow"></Highlight>
      <td>#FFFF00</td>
      <td>255,255,0</td>
    </tr>
    <tr>
      <Highlight color="navy"></Highlight>
      <td>#000080</td>
      <td>0,0,128</td>
    </tr>
    <tr>
      <Highlight color="blue"></Highlight>
      <td>#0000FF</td>
      <td>0,0,255</td>
    </tr>
    <tr>
      <Highlight color="teal"></Highlight>
      <td>#008080</td>
      <td>0,128,128</td>
    </tr>
    <tr>
      <Highlight color="aqua"></Highlight>
      <td>#00FFFF</td>
      <td>0,255,255</td>
    </tr>
  </tbody>
</table>

### Extended color keywords

However, CSS offers also an extended list of color keywords, shared with the SVG color keyword names - and presented here, for the ease of reference, in alphabetical order.

A *caveat*, given in the [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/#named-colors) specification, is important: it is often hard to imagine what each color name will look like, the names are not evenly distributed throughout the sRGB color volume and the names are not even internally consistent.  But their use and implementation has been widespread for decades and they come in handy.

<table class="grid" class="colortable">
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
      <Highlight color="aliceblue"></Highlight>
      <td>#F0F8FF</td>
      <td>240,248,255</td>
    </tr>
    <tr>
      <Highlight color="antiquewhite"></Highlight>
      <td>#FAEBD7</td>
      <td>250,235,215</td>
    </tr>
    <tr>
      <Highlight color="aqua"></Highlight>
      <td>#00FFFF</td>
      <td>0,255,255</td>
    </tr>
    <tr>
      <Highlight color="aquamarine"></Highlight>
      <td>#7FFFD4</td>
      <td>127,255,212</td>
    </tr>
    <tr>
      <Highlight color="azure"></Highlight>
      <td>#F0FFFF</td>
      <td>240,255,255</td>
    </tr>
    <tr>
      <Highlight color="beige"></Highlight>
      <td>#F5F5DC</td>
      <td>245,245,220</td>
    </tr>
    <tr>
      <Highlight color="bisque"></Highlight>
      <td>#FFE4C4</td>
      <td>255,228,196</td>
    </tr>
    <tr>
      <Highlight color="black"></Highlight>
      <td>#000000</td>
      <td>0,0,0</td>
    </tr>
    <tr>
      <Highlight color="blanchedalmond"></Highlight>
      <td>#FFEBCD</td>
      <td>255,235,205</td>
    </tr>
    <tr>
      <Highlight color="blue"></Highlight>
      <td>#0000FF</td>
      <td>0,0,255</td>
    </tr>
    <tr>
      <Highlight color="blueviolet"></Highlight>
      <td>#8A2BE2</td>
      <td>138,43,226</td>
    </tr>
    <tr>
      <Highlight color="brown"></Highlight>
      <td>#A52A2A</td>
      <td>165,42,42</td>
    </tr>
    <tr>
      <Highlight color="burlywood"></Highlight>
      <td>#DEB887</td>
      <td>222,184,135</td>
    </tr>
    <tr>
      <Highlight color="cadetblue"></Highlight>
      <td>#5F9EA0</td>
      <td>95,158,160</td>
    </tr>
    <tr>
      <Highlight color="chartreuse"></Highlight>
      <td>#7FFF00</td>
      <td>127,255,0</td>
    </tr>
    <tr>
      <Highlight color="chocolate"></Highlight>
      <td>#D2691E</td>
      <td>210,105,30</td>
    </tr>
    <tr>
      <Highlight color="coral"></Highlight>
      <td>#FF7F50</td>
      <td>255,127,80</td>
    </tr>
    <tr>
      <Highlight color="cornflowerblue"></Highlight>
      <td>#6495ED</td>
      <td>100,149,237</td>
    </tr>
    <tr>
      <Highlight color="cornsilk"></Highlight>
      <td>#FFF8DC</td>
      <td>255,248,220</td>
    </tr>
    <tr>
      <Highlight color="crimson"></Highlight>
      <td>#DC143C</td>
      <td>220,20,60</td>
    </tr>
    <tr>
      <Highlight color="cyan"></Highlight>
      <td>#00FFFF</td>
      <td>0,255,255</td>
    </tr>
    <tr>
      <Highlight color="darkblue"></Highlight>
      <td>#00008B</td>
      <td>0,0,139</td>
    </tr>
    <tr>
      <Highlight color="darkcyan"></Highlight>
      <td>#008B8B</td>
      <td>0,139,139</td>
    </tr>
    <tr>
      <Highlight color="darkgoldenrod"></Highlight>
      <td>#B8860B</td>
      <td>184,134,11</td>
    </tr>
    <tr>
      <Highlight color="darkgray"></Highlight>
      <td>#A9A9A9</td>
      <td>169,169,169</td>
    </tr>
    <tr>
      <Highlight color="darkgreen"></Highlight>
      <td>#006400</td>
      <td>0,100,0</td>
    </tr>
    <tr>
      <Highlight color="darkkhaki"></Highlight>
      <td>#BDB76B</td>
      <td>189,183,107</td>
    </tr>
    <tr>
      <Highlight color="darkmagenta"></Highlight>
      <td>#8B008B</td>
      <td>139,0,139</td>
    </tr>
    <tr>
      <Highlight color="darkolivegreen"></Highlight>
      <td>#556B2F</td>
      <td>85,107,47</td>
    </tr>
    <tr>
      <Highlight color="darkorange"></Highlight>
      <td>#FF8C00</td>
      <td>255,140,0</td>
    </tr>
    <tr>
      <Highlight color="darkorchid"></Highlight>
      <td>#9932CC</td>
      <td>153,50,204</td>
    </tr>
    <tr>
      <Highlight color="darkred"></Highlight>
      <td>#8B0000</td>
      <td>139,0,0</td>
    </tr>
    <tr>
      <Highlight color="darksalmon"></Highlight>
      <td>#E9967A</td>
      <td>233,150,122</td>
    </tr>
    <tr>
      <Highlight color="darkseagreen"></Highlight>
      <td>#8FBC8F</td>
      <td>143,188,143</td>
    </tr>
    <tr>
      <Highlight color="darkslateblue"></Highlight>
      <td>#483D8B</td>
      <td>72,61,139</td>
    </tr>
    <tr>
      <Highlight color="darkslategray"></Highlight>
      <td>#2F4F4F</td>
      <td>47,79,79</td>
    </tr>
    <tr>
      <Highlight color="darkturquoise"></Highlight>
      <td>#00CED1</td>
      <td>0,206,209</td>
    </tr>
    <tr>
      <Highlight color="darkviolet"></Highlight>
      <td>#9400D3</td>
      <td>148,0,211</td>
    </tr>
    <tr>
      <Highlight color="deeppink"></Highlight>
      <td>#FF1493</td>
      <td>255,20,147</td>
    </tr>
    <tr>
      <Highlight color="deepskyblue"></Highlight>
      <td>#00BFFF</td>
      <td>0,191,255</td>
    </tr>
    <tr>
      <Highlight color="dimgray"></Highlight>
      <td>#696969</td>
      <td>105,105,105</td>
    </tr>
    <tr>
      <Highlight color="dodgerblue"></Highlight>
      <td>#1E90FF</td>
      <td>30,144,255</td>
    </tr>
    <tr>
      <Highlight color="firebrick"></Highlight>
      <td>#B22222</td>
      <td>178,34,34</td>
    </tr>
    <tr>
      <Highlight color="floralwhite"></Highlight>
      <td>#FFFAF0</td>
      <td>255,250,240</td>
    </tr>
    <tr>
      <Highlight color="forestgreen"></Highlight>
      <td>#228B22</td>
      <td>34,139,34</td>
    </tr>
    <tr>
      <Highlight color="fuchsia"></Highlight>
      <td>#FF00FF</td>
      <td>255,0,255</td>
    </tr>
    <tr>
      <Highlight color="gainsboro"></Highlight>
      <td>#DCDCDC</td>
      <td>220,220,220</td>
    </tr>
    <tr>
      <Highlight color="ghostwhite"></Highlight>
      <td>#F8F8FF</td>
      <td>248,248,255</td>
    </tr>
    <tr>
      <Highlight color="gold"></Highlight>
      <td>#FFD700</td>
      <td>255,215,0</td>
    </tr>
    <tr>
      <Highlight color="goldenrod"></Highlight>
      <td>#DAA520</td>
      <td>218,165,32</td>
    </tr>
    <tr>
      <Highlight color="gray"></Highlight>
      <td>#808080</td>
      <td>128,128,128</td>
    </tr>
    <tr>
      <Highlight color="green"></Highlight>
      <td>#008000</td>
      <td>0,128,0</td>
    </tr>
    <tr>
      <Highlight color="greenyellow"></Highlight>
      <td>#ADFF2F</td>
      <td>173,255,47</td>
    </tr>
    <tr>
      <Highlight color="honeydew"></Highlight>
      <td>#F0FFF0</td>
      <td>240,255,240</td>
    </tr>
    <tr>
      <Highlight color="hotpink"></Highlight>
      <td>#FF69B4</td>
      <td>255,105,180</td>
    </tr>
    <tr>
      <Highlight color="indianred"></Highlight>
      <td>#CD5C5C</td>
      <td>205,92,92</td>
    </tr>
    <tr>
      <Highlight color="indigo"></Highlight>
      <td>#4B0082</td>
      <td>75,0,130</td>
    </tr>
    <tr>
      <Highlight color="ivory"></Highlight>
      <td>#FFFFF0</td>
      <td>255,255,240</td>
    </tr>
    <tr>
      <Highlight color="khaki"></Highlight>
      <td>#F0E68C</td>
      <td>240,230,140</td>
    </tr>
    <tr>
      <Highlight color="lavender"></Highlight>
      <td>#E6E6FA</td>
      <td>230,230,250</td>
    </tr>
    <tr>
      <Highlight color="lavenderblush"></Highlight>
      <td>#FFF0F5</td>
      <td>255,240,245</td>
    </tr>
    <tr>
      <Highlight color="lawngreen"></Highlight>
      <td>#7CFC00</td>
      <td>124,252,0</td>
    </tr>
    <tr>
      <Highlight color="lemonchiffon"></Highlight>
      <td>#FFFACD</td>
      <td>255,250,205</td>
    </tr>
    <tr>
      <Highlight color="lightblue"></Highlight>
      <td>#ADD8E6</td>
      <td>173,216,230</td>
    </tr>
    <tr>
      <Highlight color="lightcoral"></Highlight>
      <td>#F08080</td>
      <td>240,128,128</td>
    </tr>
    <tr>
      <Highlight color="lightcyan"></Highlight>
      <td>#E0FFFF</td>
      <td>224,255,255</td>
    </tr>
    <tr>
      <Highlight color="lightgoldenrodyellow"></Highlight>
      <td>#FAFAD2</td>
      <td>250,250,210</td>
    </tr>
    <tr>
      <Highlight color="lightgray"></Highlight>
      <td>#D3D3D3</td>
      <td>211,211,211</td>
    </tr>
    <tr>
      <Highlight color="lightgreen"></Highlight>
      <td>#90EE90</td>
      <td>144,238,144</td>
    </tr>
    <tr>
      <Highlight color="lightpink"></Highlight>
      <td>#FFB6C1</td>
      <td>255,182,193</td>
    </tr>
    <tr>
      <Highlight color="lightsalmon"></Highlight>
      <td>#FFA07A</td>
      <td>255,160,122</td>
    </tr>
    <tr>
      <Highlight color="lightseagreen"></Highlight>
      <td>#20B2AA</td>
      <td>32,178,170</td>
    </tr>
    <tr>
      <Highlight color="lightskyblue"></Highlight>
      <td>#87CEFA</td>
      <td>135,206,250</td>
    </tr>
    <tr>
      <Highlight color="lightslategray"></Highlight>
      <td>#778899</td>
      <td>119,136,153</td>
    </tr>
    <tr>
      <Highlight color="lightsteelblue"></Highlight>
      <td>#B0C4DE</td>
      <td>176,196,222</td>
    </tr>
    <tr>
      <Highlight color="lightyellow"></Highlight>
      <td>#FFFFE0</td>
      <td>255,255,224</td>
    </tr>
    <tr>
      <Highlight color="lime"></Highlight>
      <td>#00FF00</td>
      <td>0,255,0</td>
    </tr>
    <tr>
      <Highlight color="limegreen"></Highlight>
      <td>#32CD32</td>
      <td>50,205,50</td>
    </tr>
    <tr>
      <Highlight color="linen"></Highlight>
      <td>#FAF0E6</td>
      <td>250,240,230</td>
    </tr>
    <tr>
      <Highlight color="magenta"></Highlight>
      <td>#FF00FF</td>
      <td>255,0,255</td>
    </tr>
    <tr>
      <Highlight color="maroon"></Highlight>
      <td>#800000</td>
      <td>128,0,0</td>
    </tr>
    <tr>
      <Highlight color="mediumaquamarine"></Highlight>
      <td>#66CDAA</td>
      <td>102,205,170</td>
    </tr>
    <tr>
      <Highlight color="mediumblue"></Highlight>
      <td>#0000CD</td>
      <td>0,0,205</td>
    </tr>
    <tr>
      <Highlight color="mediumorchid"></Highlight>
      <td>#BA55D3</td>
      <td>186,85,211</td>
    </tr>
    <tr>
      <Highlight color="mediumpurple"></Highlight>
      <td>#9370DB</td>
      <td>147,112,219</td>
    </tr>
    <tr>
      <Highlight color="mediumseagreen"></Highlight>
      <td>#3CB371</td>
      <td>60,179,113</td>
    </tr>
    <tr>
      <Highlight color="mediumslateblue"></Highlight>
      <td>#7B68EE</td>
      <td>123,104,238</td>
    </tr>
    <tr>
      <Highlight color="mediumspringgreen"></Highlight>
      <td>#00FA9A</td>
      <td>0,250,154</td>
    </tr>
    <tr>
      <Highlight color="mediumturquoise"></Highlight>
      <td>#48D1CC</td>
      <td>72,209,204</td>
    </tr>
    <tr>
      <Highlight color="mediumvioletred"></Highlight>
      <td>#C71585</td>
      <td>199,21,133</td>
    </tr>
    <tr>
      <Highlight color="midnightblue"></Highlight>
      <td>#191970</td>
      <td>25,25,112</td>
    </tr>
    <tr>
      <Highlight color="mintcream"></Highlight>
      <td>#F5FFFA</td>
      <td>245,255,250</td>
    </tr>
    <tr>
      <Highlight color="mistyrose"></Highlight>
      <td>#FFE4E1</td>
      <td>255,228,225</td>
    </tr>
    <tr>
      <Highlight color="moccasin"></Highlight>
      <td>#FFE4B5</td>
      <td>255,228,181</td>
    </tr>
    <tr>
      <Highlight color="navajowhite"></Highlight>
      <td>#FFDEAD</td>
      <td>255,222,173</td>
    </tr>
    <tr>
      <Highlight color="navy"></Highlight>
      <td>#000080</td>
      <td>0,0,128</td>
    </tr>
    <tr>
      <Highlight color="oldlace"></Highlight>
      <td>#FDF5E6</td>
      <td>253,245,230</td>
    </tr>
    <tr>
      <Highlight color="olive"></Highlight>
      <td>#808000</td>
      <td>128,128,0</td>
    </tr>
    <tr>
      <Highlight color="olivedrab"></Highlight>
      <td>#6B8E23</td>
      <td>107,142,35</td>
    </tr>
    <tr>
      <Highlight color="orange"></Highlight>
      <td>#FFA500</td>
      <td>255,165,0</td>
    </tr>
    <tr>
      <Highlight color="orangered"></Highlight>
      <td>#FF4500</td>
      <td>255,69,0</td>
    </tr>
    <tr>
      <Highlight color="orchid"></Highlight>
      <td>#DA70D6</td>
      <td>218,112,214</td>
    </tr>
    <tr>
      <Highlight color="palegoldenrod"></Highlight>
      <td>#EEE8AA</td>
      <td>238,232,170</td>
    </tr>
    <tr>
      <Highlight color="palegreen"></Highlight>
      <td>#98FB98</td>
      <td>152,251,152</td>
    </tr>
    <tr>
      <Highlight color="paleturquoise"></Highlight>
      <td>#AFEEEE</td>
      <td>175,238,238</td>
    </tr>
    <tr>
      <Highlight color="palevioletred"></Highlight>
      <td>#DB7093</td>
      <td>219,112,147</td>
    </tr>
    <tr>
      <Highlight color="papayawhip"></Highlight>
      <td>#FFEFD5</td>
      <td>255,239,213</td>
    </tr>
    <tr>
      <Highlight color="peachpuff"></Highlight>
      <td>#FFDAB9</td>
      <td>255,218,185</td>
    </tr>
    <tr>
      <Highlight color="peru"></Highlight>
      <td>#CD853F</td>
      <td>205,133,63</td>
    </tr>
    <tr>
      <Highlight color="pink"></Highlight>
      <td>#FFC0CB</td>
      <td>255,192,203</td>
    </tr>
    <tr>
      <Highlight color="plum"></Highlight>
      <td>#DDA0DD</td>
      <td>221,160,221</td>
    </tr>
    <tr>
      <Highlight color="powderblue"></Highlight>
      <td>#B0E0E6</td>
      <td>176,224,230</td>
    </tr>
    <tr>
      <Highlight color="purple"></Highlight>
      <td>#800080</td>
      <td>128,0,128</td>
    </tr>
    <tr>
      <Highlight color="rebeccapurple"></Highlight>
      <td>#663399</td>
      <td>102,51,153</td>
    </tr>
    <tr>
      <Highlight color="red"></Highlight>
      <td>#FF0000</td>
      <td>255,0,0</td>
    </tr>
    <tr>
      <Highlight color="rosybrown"></Highlight>
      <td>#BC8F8F</td>
      <td>188,143,143</td>
    </tr>
    <tr>
      <Highlight color="royalblue"></Highlight>
      <td>#4169E1</td>
      <td>65,105,225</td>
    </tr>
    <tr>
      <Highlight color="saddlebrown"></Highlight>
      <td>#8B4513</td>
      <td>139,69,19</td>
    </tr>
    <tr>
      <Highlight color="salmon"></Highlight>
      <td>#FA8072</td>
      <td>250,128,114</td>
    </tr>
    <tr>
      <Highlight color="sandybrown"></Highlight>
      <td>#F4A460</td>
      <td>244,164,96</td>
    </tr>
    <tr>
      <Highlight color="seagreen"></Highlight>
      <td>#2E8B57</td>
      <td>46,139,87</td>
    </tr>
    <tr>
      <Highlight color="seashell"></Highlight>
      <td>#FFF5EE</td>
      <td>255,245,238</td>
    </tr>
    <tr>
      <Highlight color="sienna"></Highlight>
      <td>#A0522D</td>
      <td>160,82,45</td>
    </tr>
    <tr>
      <Highlight color="silver"></Highlight>
      <td>#C0C0C0</td>
      <td>192,192,192</td>
    </tr>
    <tr>
      <Highlight color="skyblue"></Highlight>
      <td>#87CEEB</td>
      <td>135,206,235</td>
    </tr>
    <tr>
      <Highlight color="slateblue"></Highlight>
      <td>#6A5ACD</td>
      <td>106,90,205</td>
    </tr>
    <tr>
      <Highlight color="slategray"></Highlight>
      <td>#708090</td>
      <td>112,128,144</td>
    </tr>
    <tr>
      <Highlight color="snow"></Highlight>
      <td>#FFFAFA</td>
      <td>255,250,250</td>
    </tr>
    <tr>
      <Highlight color="springgreen"></Highlight>
      <td>#00FF7F</td>
      <td>0,255,127</td>
    </tr>
    <tr>
      <Highlight color="steelblue"></Highlight>
      <td>#4682B4</td>
      <td>70,130,180</td>
    </tr>
    <tr>
      <Highlight color="tan"></Highlight>
      <td>#D2B48C</td>
      <td>210,180,140</td>
    </tr>
    <tr>
      <Highlight color="teal"></Highlight>
      <td>#008080</td>
      <td>0,128,128</td>
    </tr>
    <tr>
      <Highlight color="thistle"></Highlight>
      <td>#D8BFD8</td>
      <td>216,191,216</td>
    </tr>
    <tr>
      <Highlight color="tomato"></Highlight>
      <td>#FF6347</td>
      <td>255,99,71</td>
    </tr>
    <tr>
      <Highlight color="turquoise"></Highlight>
      <td>#40E0D0</td>
      <td>64,224,208</td>
    </tr>
    <tr>
      <Highlight color="violet"></Highlight>
      <td>#EE82EE</td>
      <td>238,130,238</td>
    </tr>
    <tr>
      <Highlight color="wheat"></Highlight>
      <td>#F5DEB3</td>
      <td>245,222,179</td>
    </tr>
    <tr>
      <Highlight color="white"></Highlight>
      <td>#FFFFFF</td>
      <td>255,255,255</td>
    </tr>
    <tr>
      <Highlight color="whitesmoke"></Highlight>
      <td>#F5F5F5</td>
      <td>245,245,245</td>
    </tr>
    <tr>
      <Highlight color="yellow"></Highlight>
      <td>#FFFF00</td>
      <td>255,255,0</td>
    </tr>
    <tr>
      <Highlight color="yellowgreen"></Highlight>
      <td>#9ACD32</td>
      <td>154,205,50</td>
    </tr>
  </tbody>
</table>

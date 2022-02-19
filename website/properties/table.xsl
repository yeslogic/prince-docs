<!--
  vim: sts=2 sw=2 et
-->
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="xml" omit-xml-declaration="yes" indent="yes" />

<xsl:include href="shorthands.xsl"/>

<xsl:template match="/">

<root>
<p>
Below are all of the CSS properties supported by Prince.
For their precise definitions please refer to the CSS specifications.
</p>
<p id="ext-props">
* properties marked with an asterisk and a darker background color shade are
Prince extensions, while the extension values of a standard property are
highlighted with a <span class="ext">light grey background</span>.
Besides the standard <code>-prince-</code> prefix, Prince also accepts
<code>prince-</code> as a vendor prefix for Prince-specific
CSS properties.
</p>
<p>
For the values, the grammar draws on the
<a href="https://www.w3.org/TR/css3-values/">CSS Values and Units Module Level 3</a>
specification - with the notable exception of the meaning of an asterisk (*), as
explained above.  A short explanation of the signs:
</p>

<p>
<ul>
    <li>A bar (<b>|</b>) separates two or more <em>alternatives</em>: exactly one of
    them must occur.</li>
    <li>A double bar (<b>||</b>) separates two or more <em>options</em>: one or more
    of them must occur, in any order.</li>
    <li>A double ampersand (<b>&amp;&amp;</b>) separates two or more <em>components</em>,
    all of which must occur, in any order.</li>
    <li>Square brackets (<b>[ ]</b>) are only used for grouping.</li>
    <li>A plus (<b>+</b>) indicates that the preceding item occurs one or more times.</li>
    <li>A question mark (<b>?</b>) indicates that the preceding item is optional (occurs
    zero or one times).</li>
    <li>A hash mark (<b>#</b>) indicates that the preceding item occurs one or more times,
    separated by comma tokens.</li>
    <li>A pair of numbers in curly braces, separated by two dots (<b>{<i>A</i>..<i>B</i>}</b>)
    indicates that the preceding item occurs at least <i>A</i> and at most <i>B</i>
    times.</li>
</ul>
</p>

<p class="toggle">
<a href="#" onclick="javascript:toggleAllDetails('css'); return false;" id="toggle-css">Toggle (open/close) all properties</a>
</p>

<div id="prop-list">
<xsl:for-each select="properties/property">
<xsl:variable name="alias" select="alias"/>
<xsl:variable name="propid"><xsl:value-of select="name"/></xsl:variable>

<details>
  <xsl:choose>
  <xsl:when test="extension|alias">
  <summary class="ext" title="Prince extension" id="prop-{$propid}">
    <xsl:if test="starts-with(name, 'prince-')"><xsl:text>-</xsl:text></xsl:if>
    <xsl:value-of select="name"/>*
  </summary>
  </xsl:when>
  <xsl:otherwise>
  <summary id="prop-{$propid}">
    <xsl:if test="starts-with(name, 'prince-')"><xsl:text>-</xsl:text></xsl:if>
    <xsl:value-of select="name"/>
  </summary>
  </xsl:otherwise>
  </xsl:choose>
  <div>
    <div>
    <div id="prop-{$propid}-syntax">Syntax</div>
    <div class="example">
    <div class="syntax-block">
    <code>
      <xsl:if test="starts-with(name, 'prince-')"><xsl:text>-</xsl:text></xsl:if>
      <xsl:value-of select="name"/>
      <xsl:text>: </xsl:text>
      <xsl:choose>
        <xsl:when test="alias">
          <xsl:apply-templates select="/properties/property[name=$alias]/value"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:apply-templates select="value"/>
        </xsl:otherwise>
      </xsl:choose>
    </code>
    </div>
    </div>
    </div>

    <div>
    <div class="example">
    <div class="syntax-block">
    <table class="property-table">
      <tr>
        <th scope="row">
          Initial value
        </th>
        <td>
          <code>
            <xsl:choose>
              <xsl:when test="alias">
                <xsl:apply-templates select="/properties/property[name=$alias]/initial"/>
              </xsl:when>
              <xsl:otherwise>
                <xsl:apply-templates select="initial"/>
              </xsl:otherwise>
            </xsl:choose>
          </code>
        </td>
      </tr>
      <tr>
        <th scope="row">
          Applies to
        </th>
        <td>
          <xsl:choose>
            <xsl:when test="alias">
              <xsl:apply-templates select="/properties/property[name=$alias]/applyto"/>
            </xsl:when>
            <xsl:otherwise>
              <xsl:apply-templates select="applyto"/>
            </xsl:otherwise>
          </xsl:choose>
        </td>
      </tr>
      <tr>
        <th scope="row">
          Inherited
        </th>
        <td>
          <xsl:choose>
            <xsl:when test="alias">
              <xsl:choose>
                <xsl:when test="/properties/property[name=$alias]/inherit='yes'">
                  yes
                </xsl:when>
                <xsl:when test="/properties/property[name=$alias]/inherit='no'">
                  no
                </xsl:when>
                <xsl:when test="/properties/property[name=$alias]/inherit='n/a'">
                  n/a
                </xsl:when>
              </xsl:choose>
            </xsl:when>
            <xsl:otherwise>
              <xsl:choose>
                <xsl:when test="inherit='yes'">
                  yes
                </xsl:when>
                <xsl:when test="inherit='no'">
                  no
                </xsl:when>
                <xsl:when test="inherit='n/a'">
                  n/a
                </xsl:when>
              </xsl:choose>
            </xsl:otherwise>
          </xsl:choose>
        </td>
      </tr>
    </table>
    </div>
    </div>
    </div>

    <xsl:if test="example|/properties/property[name=$alias]/example">
    <xsl:choose>
      <xsl:when test="alias">
        <div>
        <div id="prop-{$propid}-examples">Examples</div>
        <div class="example">
        <xsl:for-each select="/properties/property[name=$alias]/example">
          <div class="programlisting"><pre>
            <code class="hljs"><xsl:value-of select="."/></code>
          </pre></div>
        </xsl:for-each>
        </div>
        </div>
      </xsl:when>
      <xsl:otherwise>
        <div>
        <div id="prop-{$propid}-examples">Examples</div>
        <div class="example">
        <xsl:for-each select="example">
          <div class="programlisting"><pre>
            <code class="hljs"><xsl:value-of select="."/></code>
          </pre></div>
        </xsl:for-each>
        </div>
        </div>
      </xsl:otherwise>
    </xsl:choose>
    </xsl:if>

    <div>
    <xsl:if test="shorthand|comments|/properties/property[name=$alias]/shorthand|/properties/property[name=$alias]/comments">
    <div id="prop-{$propid}-comments">Comments</div>
    </xsl:if>
    <xsl:if test="shorthand|/properties/property[name=$alias]/shorthand">
    <p>
        The <code><xsl:if test="starts-with(name, 'prince-')"><xsl:text>-</xsl:text></xsl:if><xsl:value-of select="name"/></code> property is a shorthand for
        setting the following CSS properties:
    </p>
    <ul>
    <xsl:choose>
    <xsl:when test="alias">
      <xsl:for-each select="/properties/property[name=$alias]/shorthand/prop">
        <li>
        <code><a href="#prop-{.}">
          <xsl:if test="starts-with(., 'prince-')"><xsl:text>-</xsl:text></xsl:if>
          <xsl:value-of select="."/>
        </a></code>
        </li>
      </xsl:for-each>
    </xsl:when>
    <xsl:otherwise>
      <xsl:for-each select="shorthand/prop">
        <li>
        <code><a href="#prop-{.}">
          <xsl:if test="starts-with(., 'prince-')"><xsl:text>-</xsl:text></xsl:if>
          <xsl:value-of select="."/>
        </a></code>
        </li>
      </xsl:for-each>
    </xsl:otherwise>
    </xsl:choose>
    </ul>
    </xsl:if>
    <xsl:if test="comments|/properties/property[name=$alias]/comments">
    <xsl:choose>
      <xsl:when test="alias">
        <xsl:apply-templates select="/properties/property[name=$alias]/comments/*" mode="copy"/>
        <p class="note">
        The property <a href="#prop-{alias}"><code>
          <xsl:if test="starts-with(alias, 'prince-')"><xsl:text>-</xsl:text></xsl:if>
          <xsl:value-of select="alias"/>
        </code></a> can be used as an alias.
        </p>
        <xsl:call-template name="show-shorthands">
          <xsl:with-param name="propid" select="$alias"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <xsl:apply-templates select="comments/*" mode="copy"/>
        <xsl:if test="aliastarget">
        <xsl:variable name="aliastarget" select="aliastarget"/>
        <p class="note">
        The property <a href="#prop-{aliastarget}"><code>
          <xsl:if test="starts-with(aliastarget, 'prince-')"><xsl:text>-</xsl:text></xsl:if>
          <xsl:value-of select="aliastarget"/>
        </code></a> can be used as an alias.
        </p>
        </xsl:if>
        <xsl:call-template name="show-shorthands">
          <xsl:with-param name="propid" select="$propid"/>
        </xsl:call-template>
      </xsl:otherwise>
    </xsl:choose>
    </xsl:if>
    </div>
    <xsl:if test="see|/properties/property[name=$alias]/see">
    <div>
    <div id="prop-{$propid}-seealso">See Also</div>
    <ul>
    <xsl:choose>
    <xsl:when test="alias">
      <xsl:for-each select="/properties/property[name=$alias]/see">
        <li><xsl:apply-templates select="node()" mode="copy"/></li>
      </xsl:for-each>
    </xsl:when>
    <xsl:otherwise>
      <xsl:for-each select="see">
        <li><xsl:apply-templates select="node()" mode="copy"/></li>
      </xsl:for-each>
    </xsl:otherwise>
    </xsl:choose>
    </ul>
    </div>
    </xsl:if>

    <xsl:if test="spec|/properties/property[name=$alias]/spec">
    <div>
    <div id="prop-{$propid}-spec">Specification</div>
    <ul>
    <xsl:choose>
      <xsl:when test="alias">
        <xsl:for-each select="/properties/property[name=$alias]/spec">
        <li><xsl:apply-templates select="node()" mode="copy"/></li>
      </xsl:for-each>
      </xsl:when>
      <xsl:otherwise>
        <xsl:for-each select="spec">
        <li><xsl:apply-templates select="node()" mode="copy"/></li>
      </xsl:for-each>
      </xsl:otherwise>
    </xsl:choose>
    </ul>
    </div>
    </xsl:if>
  </div>
  <xsl:if test="value2">
  <div>
    <div>
    <div id="prop-{$propid}-syntax2">Syntax</div>
    <div class="example">
    <div class="syntax-block">
    <code>
      <xsl:if test="starts-with(name, 'prince-')"><xsl:text>-</xsl:text></xsl:if>
      <xsl:value-of select="name"/>
      <xsl:text>: </xsl:text>
        <xsl:apply-templates select="value2"/>
    </code>
    </div>
    </div>
    </div>

    <div>
    <div class="example">
    <div class="syntax-block">
    <table class="property-table">
      <tr>
        <th scope="row">
          Initial value
        </th>
        <td>
          <code>
            <xsl:apply-templates select="initial2"/>
          </code>
        </td>
      </tr>
      <tr>
        <th scope="row">
          Applies to
        </th>
        <td>
          <xsl:apply-templates select="applyto2"/>
        </td>
      </tr>
      <tr>
        <th scope="row">
          Inherited
        </th>
        <td>
          <xsl:choose>
            <xsl:when test="inherit2='yes'">
              yes
            </xsl:when>
            <xsl:when test="inherit2='no'">
              no
            </xsl:when>
          </xsl:choose>
        </td>
      </tr>
    </table>
    </div>
    </div>
    </div>

    <xsl:if test="example2">
      <div>
      <div id="prop-{$propid}-examples2">Examples</div>
      <div class="example">
      <xsl:for-each select="example">
        <div class="programlisting"><pre>
          <code class="hljs"><xsl:value-of select="."/></code>
        </pre></div>
      </xsl:for-each>
      </div>
      </div>
    </xsl:if>

    <div>
    <xsl:if test="comments2">
    <div id="prop-{$propid}-comments2">Comments</div>
        <xsl:apply-templates select="comments2/*" mode="copy"/>
    </xsl:if>
    </div>
    <xsl:if test="see2">
    <div>
    <div id="prop-{$propid}-seealso2">See Also</div>
    <ul>
      <xsl:for-each select="see2">
        <li><xsl:apply-templates select="node()" mode="copy"/></li>
      </xsl:for-each>
    </ul>
    </div>
    </xsl:if>

    <xsl:if test="spec2">
    <div>
    <div id="prop-{$propid}-spec2">Specification</div>
    <ul>
      <xsl:for-each select="spec2">
        <li><xsl:apply-templates select="node()" mode="copy"/></li>
      </xsl:for-each>
    </ul>
    </div>
    </xsl:if>
  </div>
  </xsl:if>
</details>
</xsl:for-each>
</div>
</root>

</xsl:template>

<xsl:template match="initial|initial2">
      <xsl:value-of select="."/>
</xsl:template>

<xsl:include href="applyto.xsl"/>

<xsl:template match="value|value2">
    <xsl:if test="descendant::group">
    <br/>
    <xsl:text>&#xa0;&#xa0;&#xa0;</xsl:text>
    </xsl:if>
    <xsl:call-template name="sequence">
    <xsl:with-param name="indent" select="'&#xa0;&#xa0;&#xa0;'"/>
    </xsl:call-template>
</xsl:template>

<xsl:template match="sequence">
    <xsl:param name="indent"/>
    <xsl:call-template name="sequence">
    <xsl:with-param name="indent" select="$indent"/>
    </xsl:call-template>
</xsl:template>
<xsl:template name="sequence">
    <xsl:param name="indent"/>
    <xsl:call-template name="operator">
    <xsl:with-param name="operator" select="''"/>
    <xsl:with-param name="operator-indent" select="''"/>
    <xsl:with-param name="indent" select="$indent"/>
    </xsl:call-template>
</xsl:template>

<!-- Redundant bracketing of sequence in choice, but not for last option. -->
<xsl:template match="choice/sequence[position()&lt;last()]|choice/group/sequence[position()&lt;last()]">
    <xsl:param name="indent"/>
    <xsl:text>[ </xsl:text>
    <xsl:call-template name="sequence">
    <xsl:with-param name="indent" select="concat($indent, ' &#xa0;')"/>
    </xsl:call-template>
    <xsl:text> ]</xsl:text>
</xsl:template>

<xsl:template match="choice">
    <xsl:param name="indent"/>
    <xsl:call-template name="choice">
    <xsl:with-param name="indent" select="$indent"/>
    </xsl:call-template>
</xsl:template>
<xsl:template name="choice">
    <xsl:param name="indent"/>
    <xsl:call-template name="operator">
    <xsl:with-param name="operator" select="'|'"/>
    <xsl:with-param name="operator-indent" select="'&#xa0;'"/>
    <xsl:with-param name="indent" select="$indent"/>
    </xsl:call-template>
</xsl:template>

<!-- "Juxtaposition is stronger than double ampersand, the double
    ampersand is stronger than the double bar, and the double bar
    is stronger than the bar."
-->
<xsl:template match="sequence/reorderable|sequence/group/reorderable">
    <xsl:param name="indent"/>
    <xsl:text>[ </xsl:text>
    <xsl:call-template name="reorderable">
    <xsl:with-param name="indent" select="concat($indent, ' &#xa0;')"/>
    </xsl:call-template>
    <xsl:text> ]</xsl:text>
</xsl:template>
<xsl:template match="sequence/multiple|reorderable/multiple|sequence/group/multiple|reorderable/group/multiple">
    <xsl:param name="indent"/>
    <xsl:text>[ </xsl:text>
    <xsl:call-template name="multiple">
    <xsl:with-param name="indent" select="concat($indent, ' &#xa0;')"/>
    </xsl:call-template>
    <xsl:text> ]</xsl:text>
</xsl:template>
<xsl:template match="sequence/choice|reorderable/choice|multiple/choice|sequence/group/choice|reorderable/group/choice|multiple/group/choice">
    <xsl:param name="indent"/>
    <xsl:text>[ </xsl:text>
    <xsl:call-template name="choice">
    <xsl:with-param name="indent" select="concat($indent, ' &#xa0;')"/>
    </xsl:call-template>
    <xsl:text> ]</xsl:text>
</xsl:template>

<!-- Redundant bracketing of some other children too. -->
<xsl:template match="choice/multiple|choice/group/multiple">
    <xsl:param name="indent"/>
    <xsl:text>[ </xsl:text>
    <xsl:call-template name="multiple">
    <xsl:with-param name="indent" select="concat($indent, ' &#xa0;')"/>
    </xsl:call-template>
    <xsl:text> ]</xsl:text>
</xsl:template>
<xsl:template match="choice/reorderable|choice/group/reorderable">
    <xsl:param name="indent"/>
    <xsl:text>[ </xsl:text>
    <xsl:call-template name="reorderable">
    <xsl:with-param name="indent" select="concat($indent, ' &#xa0;')"/>
    </xsl:call-template>
    <xsl:text> ]</xsl:text>
</xsl:template>

<xsl:template match="multiple">
    <xsl:param name="indent"/>
    <xsl:call-template name="multiple">
    <xsl:with-param name="indent" select="$indent"/>
    </xsl:call-template>
</xsl:template>
<xsl:template name="multiple">
    <xsl:param name="indent"/>
    <xsl:call-template name="operator">
    <xsl:with-param name="operator" select="'||'"/>
    <xsl:with-param name="operator-indent" select="'&#xa0;&#xa0;'"/>
    <xsl:with-param name="indent" select="$indent"/>
    </xsl:call-template>
</xsl:template>

<xsl:template match="reorderable">
    <xsl:param name="indent"/>
    <xsl:call-template name="reorderable">
    <xsl:with-param name="indent" select="$indent"/>
    </xsl:call-template>
</xsl:template>
<xsl:template name="reorderable">
    <xsl:param name="indent"/>
    <xsl:call-template name="operator">
    <xsl:with-param name="operator" select="'&amp;&amp;'"/>
    <xsl:with-param name="operator-indent" select="'&#xa0;&#xa0;'"/>
    <xsl:with-param name="indent" select="$indent"/>
    </xsl:call-template>
</xsl:template>

<xsl:template name="operator">
    <xsl:param name="operator"/>
    <xsl:param name="indent"/>
    <xsl:param name="operator-indent"/>
    <!-- An alternative to this nbsp-based indenting would be to use
    a separate block-level html element per group line, which would
    allow more control over indent of continuation lines.
    However, on a viewport narrow enough to require continuation lines,
    using a zero indent as we do here might be desirable anyway.
    -->
    <xsl:for-each select="*">
    <xsl:choose>
        <xsl:when test="self::group">
        <xsl:if test="position()!=1">
            <xsl:text>
</xsl:text>
            <xsl:copy-of select="$indent"/>
            <xsl:copy-of select="$operator"/>
            <xsl:text>&#xa0;</xsl:text>
        </xsl:if>
        <xsl:call-template name="operator">
            <xsl:with-param name="indent">
            <xsl:copy-of select="$indent"/>
            <xsl:if test="position()!=1">
                <xsl:copy-of select="$operator-indent"/>
                <xsl:text>&#xa0;</xsl:text>
            </xsl:if>
            </xsl:with-param>
            <xsl:with-param name="operator" select="$operator"/>
            <!-- (At time of writing, we don't allow nested groups,
            so no need for operator-indent.)
            -->
        </xsl:call-template>
        </xsl:when>
        <xsl:otherwise>
        <xsl:if test="position()!=1">
            <xsl:text> </xsl:text>
            <xsl:if test="$operator!=''">
            <xsl:copy-of select="$operator"/>
            <xsl:text>&#xa0;</xsl:text>
            </xsl:if>
        </xsl:if>
        <xsl:apply-templates select=".">
            <xsl:with-param name="indent" select="$indent"/>
        </xsl:apply-templates>
        </xsl:otherwise>
    </xsl:choose>
    </xsl:for-each>
</xsl:template>

<xsl:template match="repeat">
    <xsl:param name="indent"/>
    <xsl:choose>
    <xsl:when test="type and count(*)+count(text()[normalize-space(.)!=''])=1">
        <xsl:apply-templates select="*">
        <xsl:with-param name="indent" select="$indent"/>
        </xsl:apply-templates>
    </xsl:when>
    <xsl:otherwise>
        <xsl:text>[ </xsl:text>
        <xsl:call-template name="sequence">
        <xsl:with-param name="indent" select="concat($indent, ' &#xa0;')"/>
        </xsl:call-template>
        <xsl:text> ]</xsl:text>
    </xsl:otherwise>
    </xsl:choose>
    <xsl:if test="@sep">
    <xsl:text>#</xsl:text>
    </xsl:if>
    <xsl:choose>
    <xsl:when test="not(@min)">
        <xsl:message>Error: repeat must specify min</xsl:message>
    </xsl:when>
    <xsl:when test="@min=0 and not(@max) and not(@sep)">
        <!-- Use ‘#?’ instead of ‘#*’ to distinguish from ‘*’ as marker
        for Prince extensions.  If @sep then currently we would use ‘#{0,}’
        (if @min=0 ever occurred), but we could add a special case and
        use ‘#?’ if we wanted.
        -->
        <xsl:text>?</xsl:text>
    </xsl:when>
    <xsl:when test="@min=1 and not(@max)">
        <xsl:if test="not(@sep)">
        <xsl:text>+</xsl:text>
        </xsl:if>
    </xsl:when>
    <xsl:when test="@min=@max">
        <xsl:text>{</xsl:text>
        <xsl:value-of select="@min"/>
        <xsl:text>}</xsl:text>
    </xsl:when>
    <xsl:otherwise>
        <xsl:text>{</xsl:text>
        <xsl:value-of select="@min"/>
        <xsl:text>..</xsl:text>
        <!-- Note: CSS uses e.g. {1,4} as in regexps rather than {1..4}. -->
        <xsl:value-of select="@max"/>
        <xsl:text>}</xsl:text>
    </xsl:otherwise>
    </xsl:choose>
</xsl:template>

<xsl:template match="optional">
    <xsl:param name="indent"/>
    <xsl:choose>
    <xsl:when test="count(*)=1 and (text|attr|keyword|type|ref|integer|percentage|ident|string)">
        <xsl:apply-templates select="*">
        <xsl:with-param name="indent" select="$indent"/>
        </xsl:apply-templates>
    </xsl:when>
    <xsl:otherwise>
        <xsl:text>[ </xsl:text>
        <xsl:call-template name="sequence">
        <xsl:with-param name="indent" select="concat($indent, ' &#xa0;')"/>
        </xsl:call-template>
        <xsl:text> ]</xsl:text>
    </xsl:otherwise>
    </xsl:choose>
    <xsl:text>?</xsl:text>
</xsl:template>

<!-- follows special treatment for certain elements -->

<xsl:template match="ref">
    <xsl:variable name="href" select="."/>
    <i><a href="#prop-{$href}">
      <xsl:if test="starts-with(., 'prince-')"><xsl:text>-</xsl:text></xsl:if>
      <xsl:value-of select="."/>
    </a></i>
</xsl:template>

<xsl:template match="type">
    <i><xsl:value-of select="."/></i>
</xsl:template>

<xsl:template match="percentage[not(@class)]">
    <i>percent</i>
</xsl:template>

<xsl:template match="percentage[@class='ext']">
    <span class="ext"><i>percent</i></span>
</xsl:template>

<xsl:template match="ident">
    <i><xsl:value-of select="."/></i>
</xsl:template>

<xsl:template match="integer">
    <i><xsl:value-of select="."/></i>
</xsl:template>

<xsl:template match="string">
    <xsl:text>"</xsl:text>
    <xsl:value-of select="."/>
    <xsl:text>"</xsl:text>
</xsl:template>

<xsl:template match="url">
    <xsl:text>url(&#xa0;</xsl:text>
    <i><xsl:value-of select="."/></i>
    <xsl:text>&#xa0;)</xsl:text>
</xsl:template>

<xsl:template match="attr">
    <xsl:text>attr(&#xa0;</xsl:text>
    <i><xsl:value-of select="."/></i>
    <xsl:text>&#xa0;)</xsl:text>
</xsl:template>

<xsl:template match="function[not(@class)]">
    <xsl:value-of select="@name"/>
    <xsl:text>(&#xa0;</xsl:text>
    <xsl:for-each select="*">
    <xsl:apply-templates select="."/>
    <xsl:if test="position()!=last()">
        <xsl:text>, </xsl:text>
    </xsl:if>
    </xsl:for-each>
    <xsl:text>&#xa0;)</xsl:text>
</xsl:template>

<xsl:template match="function[@class='ext']">
    <span class="ext"><xsl:value-of select="@name"/>
    <xsl:text>(&#xa0;</xsl:text>
    <xsl:for-each select="*">
    <xsl:apply-templates select="."/>
    <xsl:if test="position()!=last()">
        <xsl:text>, </xsl:text>
    </xsl:if>
    </xsl:for-each>
    <xsl:text>&#xa0;)</xsl:text></span>
</xsl:template>

<xsl:template match="keyword[not(@class)]">
    <xsl:value-of select="."/>
</xsl:template>

<xsl:template match="keyword[@class='ext']">
    <span class="ext"><xsl:value-of select="."/></span>
</xsl:template>

<xsl:template match="text">
    <xsl:value-of select="."/>
</xsl:template>

<xsl:template match="*">
    <xsl:message>
    <xsl:text>unknown element: </xsl:text>
    <xsl:value-of select="name()"/>
    </xsl:message>
</xsl:template>

<xsl:template match="text()">
    <xsl:copy/>
    <xsl:if test="normalize-space(.)!=''">
    <xsl:text>unexpected text in element: </xsl:text>
    <xsl:value-of select="name(..)"/>
    </xsl:if>
</xsl:template>

<!-- copy comments -->

<xsl:template match="*" mode="copy">
    <xsl:copy>
    <xsl:apply-templates select="@*" mode="copy"/>
    <xsl:apply-templates select="node()" mode="copy"/>
    </xsl:copy>
</xsl:template>

<xsl:template match="@*|text()" mode="copy">
    <xsl:copy/>
</xsl:template>

</xsl:stylesheet>


<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template name="show-shorthands">
  <xsl:param name="propid"/>
  <xsl:variable name="nshorthands" select="count(/properties/property[shorthand/prop=$propid])"/>
  <xsl:choose>
    <xsl:when test="$nshorthands = 1">
      <xsl:variable name="shorthand" select="/properties/property[shorthand/prop=$propid]/name"/>
      <p class="note"><xsl:text>This property can also be set by the </xsl:text>
        <code><property name="{$shorthand}"/></code>
        <xsl:text> shorthand</xsl:text>
        <!-- Any indirect shorthand:
            "... by the font-variant shorthand (and hence also by font)." -->
        <xsl:for-each select="/properties/property[shorthand/prop=$shorthand]/name">
          <xsl:choose>
            <xsl:when test="position() = 1">
              <xsl:text> (and hence also by </xsl:text>
            </xsl:when>
            <xsl:otherwise>
              <xsl:text>, </xsl:text>
            </xsl:otherwise>
          </xsl:choose>
          <code><property name="{.}"/></code>
          <xsl:if test="position() = last()">
            <xsl:text>)</xsl:text>
          </xsl:if>
        </xsl:for-each>
        <xsl:text>.</xsl:text>
      </p>
    </xsl:when>
    <xsl:when test="$nshorthands > 1">
      <p class="note"><xsl:text>This property can also be set by the shorthands </xsl:text>
        <xsl:for-each select="/properties/property[shorthand/prop=$propid]/name">
          <xsl:if test="position() = last()">
            <xsl:text> and </xsl:text>
          </xsl:if>
          <xsl:variable name="shorthand" select="."/>
          <code><property name="{$shorthand}"/></code>
          <xsl:if test="position() != last() and last() != 2">
            <xsl:text>, </xsl:text>
          </xsl:if>
        </xsl:for-each>.
      </p>
      <!-- (If we're already listing more than one shorthand for a property,
          then I'm inclined not to further complicate the note by listing
          indirect shorthands, even if there were any - though there aren't
          any at time of writing.) -->
    </xsl:when>
  </xsl:choose>
</xsl:template>

</xsl:stylesheet>
<!-- vi: set autoindent shiftwidth=2 tabstop=8 expandtab softtabstop=2 : -->

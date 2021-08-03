<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template name="wrap-at-rule">
    <xsl:param name="text"/>
    <xsl:choose>
        <xsl:when test="contains($text, '@') and contains(substring-after($text, '@'), ' at-rule')">
            <xsl:value-of select="substring-before($text, '@')"/>
            <xsl:variable name="after-at" select="substring-after($text, '@')"/>
            <code>
                <xsl:text>@</xsl:text>
                <xsl:value-of select="substring-before($after-at, ' ')"/>
            </code>
            <xsl:text> </xsl:text>
            <xsl:call-template name="wrap-at-rule">
                <xsl:with-param name="text" select="substring-after($after-at, ' ')"/>
            </xsl:call-template>
        </xsl:when>
        <xsl:otherwise>
            <xsl:value-of select="$text"/>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>

<xsl:template match="applyto|applyto2">
    <!-- Quite possibly we should use more markup instead of this string
        processing: markup would allow the schema to catch typos, as well as
        reducing lines of code.  Would `<at rule="page">' be acceptable, or
        worse than status quo? -->
    <xsl:call-template name="wrap-at-rule">
        <xsl:with-param name="text" select="."/>
    </xsl:call-template>
</xsl:template>

</xsl:stylesheet>
<!-- vi: set autoindent shiftwidth=4 tabstop=8 expandtab softtabstop=4 : -->

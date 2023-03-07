<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="xml" omit-xml-declaration="yes" indent="yes" />
    <!-- identity template --> 
    <xsl:template match="node() | @*">   
        <xsl:copy>
            <xsl:apply-templates select="node() | @*" />
        </xsl:copy>
    </xsl:template>

    <!-- template for the document element --> 
    <xsl:template match="/*">   
        <xsl:apply-templates select="node()" /> 
    </xsl:template>   
</xsl:stylesheet>

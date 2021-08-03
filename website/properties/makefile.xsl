<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="text"/>

<xsl:template match="/">
    <xsl:text>
all: Makefile
	@$(MAKE) valid
	@$(MAKE) properties

valid:
	jing -c schema.rnc properties.xml

Makefile: properties.xml makefile.xsl
	xsltproc makefile.xsl properties.xml > Makefile

properties: output/properties.hdoc</xsl:text>
    <xsl:for-each select="properties/property[not(alias)]">
	<xsl:text> output/</xsl:text>
	<xsl:value-of select="name"/>
	<xsl:text>.hdoc</xsl:text>
    </xsl:for-each>

    <xsl:text>

output/properties.hdoc: table.xsl properties.xml applyto.xsl shorthands.xsl
	xsltproc table.xsl properties.xml > output/properties.hdoc

</xsl:text>
    
    <xsl:for-each select="properties/property">
	<xsl:text>output/</xsl:text>
	<xsl:value-of select="name"/>
	<xsl:text>.hdoc: property.xsl properties.xml applyto.xsl shorthands.xsl
	xsltproc --stringparam property </xsl:text>
	<xsl:value-of select="name"/>
	<xsl:text> property.xsl properties.xml > </xsl:text>
	<xsl:text>output/</xsl:text>
	<xsl:value-of select="name"/>
	<xsl:text>.hdoc&#xA;&#xA;</xsl:text>
    </xsl:for-each>
</xsl:template>

</xsl:stylesheet>

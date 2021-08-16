.PHONY: all
all: valid output properties selflink noroot
	cp output/css-props.md ../../docs/

valid:
	jing -c schema.rnc properties.xml

output:
	mkdir output

properties: valid output table.xsl properties.xml
	xsltproc table.xsl properties.xml > output/css-props.xml

selflink: properties
	./docs_selflink.py output/css-props.xml

noroot: selflink
	xsltproc noroot.xsl output/css-props.xml > output/css-props.md
	sed -i '1s;^;---\ntitle: CSS Properties\n---\n\n;' output/css-props.md
	cat script >> output/css-props.md

.PHONY: clean
clean:
	rm -rf output

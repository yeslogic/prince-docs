.PHONY: all
all: valid output properties noroot output/_cssPropsHtml.js
	cp output/_cssPropsHtml.js ../../src/pages/css-props/_cssPropsHtml.js

valid:
	jing -c schema.rnc properties.xml

output:
	mkdir -p output

properties: valid output table.xsl properties.xml
	xsltproc table.xsl properties.xml > output/css-props.xml

process: properties
	./docs-process.py output/css-props-out.xml output/css-props.xml

selflink: process
	./docs_selflink.py output/css-props-out.xml

noroot: selflink
	xsltproc noroot.xsl output/css-props-out.xml > output/css-props-partial.html
	
output/_cssPropsHtml.js: noroot
	cat -s css-props-partial-header.txt output/css-props-partial.html css-props-partial-footer.txt > output/_cssPropsHtml.js

.PHONY: clean
clean:
	rm -rf output
	rm -rf __pycache__

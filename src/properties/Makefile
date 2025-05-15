.PHONY: all
all: valid output properties noroot htmltojsx
	cp output/css-props.md ../../docs/

valid:
	jing -c schema.rnc properties.xml

output:
	mkdir output

properties: valid output table.xsl properties.xml
	xsltproc table.xsl properties.xml > output/css-props.xml

process: properties
	./docs-process.py output/css-props-out.xml output/css-props.xml

selflink: process
	./docs_selflink.py output/css-props-out.xml

noroot: selflink
	xsltproc noroot.xsl output/css-props-out.xml > output/css-props.md

htmltojsx: noroot
	yarn run htmltojsx $(CURDIR)/output/css-props.md > output/css-props-out.md
	sed -i "1,3d;/^Done\s/d" output/css-props-out.md
	head -n -2 output/css-props-out.md > output/css-props.md
	sed -i '1s;^;---\ntitle: CSS Properties\n---\n\n;' output/css-props.md

.PHONY: clean
clean:
	rm -rf output
	rm -rf __pycache__

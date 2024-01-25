.PHONY: all
all: valid output properties selflink noroot
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
	sed -i '1s;^;---\ntitle: CSS Properties\n---\n\n<style>\n.navigationSlider .slidingNav ul li:nth-child(3), .navigationSlider .slidingNav ul li:nth-child(3) > a:hover, .navigationSlider .slidingNav ul li.siteNavGroupActive > a { background-color: #fff }\n .nav-site li:nth-child(3) a { color: #333 !important }\n .nav-site li:nth-child(3) a:hover { color: #22b573 !important }\n </style>;' output/css-props.md
	cat script >> output/css-props.md

.PHONY: clean
clean:
	rm -rf output
	rm -rf __pycache__

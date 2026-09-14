.PHONY : all
all : marginboxes-1.full.png marginboxes-1.colour.png
	cp marginboxes-1.colour.png ../../docs/assets/samples/

marginboxes-1.full.png: marginboxes.html
	prince $< --raster-output $@ --raster-dpi=150 --raster-pages=1 --raster-format=png

marginboxes-1.colour.png : marginboxes-1.full.png
	convert $< -resize 421x $@

.PHONY : clean
clean :
	rm *.png

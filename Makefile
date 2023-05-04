.PHONY : all
all :
	$(MAKE) -C src/properties
	$(MAKE) -C src/samples

.PHONY : clean
clean :
	(cd src/properties; make clean)
	(cd src/samples; make clean)

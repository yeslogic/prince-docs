.PHONY : all
all :
	$(MAKE) -C src/properties
	$(MAKE) -C src/samples
	$(MAKE) -C src/js-support

valid :
	$(MAKE) valid -C src/properties

.PHONY : clean
clean :
	(cd src/properties; make clean)
	(cd src/samples; make clean)
	(cd src/js-support; make clean)

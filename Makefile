.PHONY : all
all :
	$(MAKE) -C src/properties
	$(MAKE) -C src/samples

.PHONY : clean
clean :
	(cd properties; make clean)
	(cd samples; make clean)

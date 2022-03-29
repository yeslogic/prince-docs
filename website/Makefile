.PHONY : all
all : properties samples

properties :
	$(MAKE) -C properties

samples :
	$(MAKE) -C samples

.PHONY : clean
clean :
	(cd properties; make clean)
	(cd samples; make clean)

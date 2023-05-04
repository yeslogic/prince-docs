# Prince Documentation

This is the repository of the [Prince documentation](https://www.princexml.com/doc/),
built with the [Docusaurus v2](https://docusaurus.io/) framework.

The CSS properties are however stored *outside* of the Docusaurus framework,
in order to preserve the XML format for the properties' documentation, which is
located in `./src/properties`.

The properties need a special, preliminary step to be created, before creating
the Docusaurus documentation - you first need to run `make` in the
`./src/properties` folder.

There are some little requirements for this:
* The [Jing](https://relaxng.org/jclark/jing.html) RELAX NG validator
* Python
* the xsltproc XSLT processor

(Hint: If *really* need be, you could do without Jing, just fix your Makefile.)

Also the rasterized Page Region image is generated outside of the Docusaurus
framework - you first need to run `make` in the `./src/samples` folder.
Having Prince installed is a requirement.

Both makefiles are called from the Makefile in the root folder. To start
the fully set up documentation, instead of just `yarn run start`, you run
the following command from the root folder:

```
    $ make && yarn run start
```

# Prince Documentation

This is the Prince documentation, built with the [Docusaurus v1](https://v1.docusaurus.io/) framework.

The CSS properties are however stored *outside* of the Docusaurus framework,
in order to preserve the XML format in which the properties' documentation
is stored. They are located in `./website/properties`.

They need a special, preliminary step to be created, before creating
the Docusaurus documentation - you first need to run `make` in the
`./website/properties` folder.

There are some little requirements for this:
* The [Jing](https://relaxng.org/jclark/jing.html) RELAX NG validator
* Python
* the xsltproc XSLT processor

(Hint: If *really* need be, you could do without Jing, just fix your Makefile.)

The quick and lazy thing, is to run, instead of `yarn start`,
just the following command from the `./website` folder:

```
    $ cd ./properties && make && cd - && yarn start
```

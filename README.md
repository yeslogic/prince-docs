# Prince Documentation

This is the repository of the [Prince documentation](https://www.princexml.com/doc/),
built with the [Docusaurus v3](https://docusaurus.io/) framework.

## CSS Properties

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

(Hint: If *really* need be, you could do without Jing, just comment it out in your Makefile.)

## JavaScript Support

The JavaScript Support page uses a build process to combine some files:

- `std.json`: this is a generated file using Prince's information by Prince developers
- `std-annotated.json`: this is a hand-annotated file containing documentation
- `_std-data.json`: this is the merged file resulting from the 2 above, where fields in `std-annotated.json` can override fields in `std.json`

To create the `_std-data.json` file that the `js-support` page needs, you can run `make` in the `./src/js-support/` folder. This process requires:

- [`jq`](https://jqlang.org/download/)

## Page Region samples

Also the rasterized Page Region image is generated outside of the Docusaurus
framework - you first need to run `make` in the `./src/samples` folder.
Having Prince installed is a requirement.

## Root makefile and dev server

All of the makefiles are called from the `Makefile` in the root folder. To start
the fully set up documentation, instead of just `yarn run start`, you run
the following command from the root folder:

```
    $ make && yarn run start
```

Because of how [Docusaurus's dev server](https://docusaurus.io/docs/cli#docusaurus-start-sitedir) works, some functionality (for example, anchor links) will not work in development. Be sure to regularly test the production Docusaurus build locally:

```
make && yarn run build && yarn run serve
```
# Prince Documentation

This is the Prince documentation, run in the Docusaurus v1 framework.

The CSS properties are however stored *outside* the Docusaurus framework,
in order to preserve the XML format in which the properties' documentation
is stored. They are located in `./website/properties`.

They need a special, preliminary step to be created, before creating
the Docusaurus documentation - you first need to run `make` in the
`./website/properties` folder.

The quick and lazy thing is to run, instead of `yarn start`,
just the following command from the `./website` folder:

```
    $ cd ./properties && make && cd - && yarn start
```

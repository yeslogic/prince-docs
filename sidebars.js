module.exports = {
  docs: [
    {
        type: "category",
        label: "Installation Guide",
        link: {
            type: "generated-index",
            title: "Installation Guide",
            description: "Let's get started with Prince!",
            slug: '/category/installation-guide',
        },
        items: [
            "installing",
            "first-doc",
            "help-install",
        ],
    },
    {
        type: "category",
        label: "User Guide",
        link: {
            type: "doc",
            id: "intro-userguide",
        },
        items: [
            "styling",
            "paged",
            "gen-content",
            "javascript",
            "graphics",
            "cookbook",
            "help",
            "prince-input",
            "prince-output",
            "prince-networking",
            "server-integration",
            "prince-for-books"
        ],
    },
    {
        type: "category",
        label: "Reference Guide",
        link: {
            type: "generated-index",
            title: "Reference Guide",
            description: "Prince has a broad support for standards, documented in the following chapters.",
            slug: '/category/reference-guide',
        },
        items: [
            {
                type: "category",
                label: "CSS Support",
                description: "CSS properties, selectors, media queries, functions, at-rules, and more.",
                collapsed: false,
                items: [
                    "css-length-units",
                    "css-props",
                    "css-selectors",
                    "css-media-queries",
                    "css-functions",
                    "css-at-rules",
                    "css-color-names",
                    "css-refs"
                ]
            },
            "js-support",
            "command-line",
            {
                type: "category",
                label: "Miscellaneous",
                description: "Page-size keywords, and special characters",
                items: [
                    "page-size-keywords",
                    "characters"
                ],
            },
            "acknowledgements",
        ],
    },
  ],
};

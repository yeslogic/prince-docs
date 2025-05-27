import {themes as prismThemes} from 'prism-react-renderer';

module.exports = {
  title: 'Prince Documentation',
  tagline: 'User Guide and Reference Manual',
  url: 'https://www.princexml.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'yeslogic', // Usually your GitHub org/user name.
  projectName: 'prince-docs', // Usually your repo name.
  headTags: [
    {
      tagName: 'link',
      attributes: {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'true',
      },
    },
    {
      tagName: 'link',
      attributes: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&amp;display=swap',
      },
    },
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Prince Logo',
        src: 'img/Prince-logo.png',
      },
      items: [
        {
          to: '/purchase/',
          label: 'Buy Prince',
          position: 'right',
        },
        {
          to: '/samples/',
          label: 'Samples',
          position: 'right',
        },
        {
          to: '/doc/',
          label: 'Documentation',
          position: 'right'
        },
        {
          to: '/doc/help/',
          label: 'Help',
          position: 'right'
        },
      ],
    },
    // The Search
    algolia: {
      appId: '9T8TI2GYRX',
      apiKey: '9f574677a5391f7dd2a6044d6dbfcad1',
      indexName: 'princexml',
      algoliaOptions: { 'facetFilters': ["language:en"] }
    },
    footer: {
      style: 'light',
      copyright: `<img src="/img/Prince-logo-footer.png"/><br/>Copyright © ${new Date().getFullYear()} YesLogic Pty. Ltd.`,
      links: [
        {
            label: 'About us',
            to: '../company',
        },
        {
            label: 'Privacy Policy',
            to: '../privacy',
        },
        {
            label: 'Contact us',
            to: '../contact',
        },
      ],
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    prism: {
        additionalLanguages: ['css', 'markup', 'json', 'bash', 'javascript'],
        defaultLanguage: 'css',
        theme: prismThemes.vsDark,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: 'doc',
          // It is recommended to set document id as docs home page (`docs/` path).
          //homePageId: 'intro-userguide',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    //load the script for JS Support and CSS props
    //'./static/js/shiftWindow.js',
  ],
};

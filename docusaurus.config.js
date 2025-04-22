module.exports = {
  title: 'Prince Documentation',
  tagline: 'User Guide and Reference Manual',
  url: 'https://www.princexml.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'yeslogic', // Usually your GitHub org/user name.
  projectName: 'prince-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Prince Logo',
        src: 'img/Prince-logo.png',
      },
      items: [
        {
          to: '/doc/',
          label: 'Documentation',
          position: 'right',
        },
        {
          to: '/doc/help',
          label: 'Help',
          position: 'right'},
        {
          to: '/doc/releases',
          label: 'Release Notes',
          position: 'right',
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
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} YesLogic Pty. Ltd.`,
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    prism: {
        defaultLanguage: 'css',
        theme: require('prism-react-renderer/themes/duotoneLight'),
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

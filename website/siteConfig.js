/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
/*
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];
*/

const siteConfig = {
  title: 'Prince Documentation', // Title for your website.
  tagline: 'User Guide and Reference Manual',
  url: 'https://www.princexml.com', // Your website URL
  baseUrl: '/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'prince-docs',
  organizationName: 'yeslogic',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {href: '/purchase/', label: 'Buy Prince'},
    {href: '/samples/', label: 'Samples'},
    {href: '/doc/', label: 'Documentation'},
    {href: '/doc/help/', label: 'Help'},
//    {href: '/doc/releases', label: 'Release Notes'},
//    {page: 'roadmap', label: 'Roadmap'},
    {search: true},
  ],

  // The Search
  algolia: {
    appId: '9T8TI2GYRX',
    apiKey: '9f574677a5391f7dd2a6044d6dbfcad1',
    indexName: 'princexml',
    algoliaOptions: { 'facetFilters': ["language:en"] }
  },
  // If you have users set above, you add it here:
  //users,

  /* path to images for header/footer */
  headerIcon: 'img/Prince-logo.png',
  footerIcon: 'img/Prince-logo-footer.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#7d146c',
    secondaryColor: '#3b5668',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} YesLogic Pty. Ltd.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
    defaultLang: 'css',
  },

  // Add custom scripts here that would be placed in <script> tags.
  // Please make sure, when bulding a version to be archived, to change
  // the call for scripts with
  // scripts: ['/js/print.js', '/js/warning.js'],
  scripts: ['/js/print.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
  // When archiving a version append version number to docsURL - 'doc/15'
  docsUrl: 'doc',
  disableHeaderTitle: true,

  // Open Graph and Twitter card images.
  //ogImage: 'img/undraw_online.svg',
  //twitterImage: 'img/undraw_tweetstorm.svg',
  //twitterUsername: 'prince_xml',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;

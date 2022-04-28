// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TheTNTLabs',
  tagline: 'Minecraft, with a BANG!',
  url: 'https://www.thetntlabs.tk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'TheTNTLabs', // Usually your GitHub org/user name.
  projectName: 'Website', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogTitle: 'News',
          routeBasePath: 'news',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo.png",
      metadata: [
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:image:alt",
          content: "TheTNTLabs Logo",
        },
      ],
      navbar: {
        title: 'TheTNTLabs',
        logo: {
          alt: 'TheTNTLabs Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/connect', label: 'Connect', position: 'left'},
          {to: '/news', label: 'News', position: 'left'},
          {to: '/chat', label: 'Chat', position: 'left'},
          {to: '/rules', label: 'Rules', position: 'left'},
          {to: '/staff', label: 'Staff', position: 'left'},
          {to: '/issues', label: 'Issues', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} TheTNTLabs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

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
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  trailingSlash: false,
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
          blogDescription: 'News about TheTNTLabs.',
          routeBasePath: 'news',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'TheTNTLabs News',
            description: 'News about TheTNTLabs.',
          },
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
      colorMode: {
        respectPrefersColorScheme: true,
      },
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
          {href: 'https://github.com/TheTNTLabs/Website', position: 'right', className: 'git-link'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© 2022-${new Date().getFullYear()} TheTNTLabs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

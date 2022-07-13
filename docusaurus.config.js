const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'TheTNTLabs',
  tagline: 'Minecraft, with a BANG!',
  url: 'https://www.thetntlabs.tk',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  trailingSlash: false,
  organizationName: 'TheTNTLabs',
  projectName: 'Website',

  presets: [
    [
      'classic',
      ({
        docs: false,
        blog: {
          path: 'news',
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
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
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
        copyright: `Copyright © ${new Date().getFullYear()} TheTNTLabs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

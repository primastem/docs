// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'docs.PrimaSTEM.com',
  tagline: 'Documentation @ PrimaSTEM',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.primastem.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'primastem', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  
  // trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // onBrokenLinks: 'ignore',
  // onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ru'],
    localeConfigs: {
      en: { label: 'English', },
      fr: { label: 'Français', },
      ru: { label: 'Русский', }
    },
  },

  presets: [ 
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/primastem/docs/tree/main/',
        },
        blog: {
          
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/primastem/docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date', // Формат даты для тега <lastmod>: 'date' (YYYY-MM-DD)
          changefreq: 'weekly', // Частота обновления страниц
          priority: 0.5, // Приоритет страниц (от 0.0 до 1.0)
          ignorePatterns: ['/tags/**'], // Исключение путей, соответствующих шаблону
          filename: 'sitemap.xml', // Имя файла карты сайта
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/')); // Фильтрация URL с '/page/'
          },
        },
      }),
    ],
  ],
  
  plugins: [
    'docusaurus-plugin-image-zoom',
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-QGPVQ44DNN', // Ваш идентификатор потока данных
        anonymizeIP: true, // Опционально: анонимизация IP-адресов
      },
    ],
  ],

  scripts: [
    {src: '/js/mailerlite.js', async: true}
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(250, 250, 250)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // margin: '20'
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },

      // Replace with your project's social card
      image: 'img/primastem-social-card.jpg',
      navbar: {
        title: 'docs.PrimaSTEM.com',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://primastem.github.io/update/',
            label: 'Update Firmware',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Main',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
                position: 'left',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/QRZWtpdBQd',
                position: 'center',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'PrimaSTEM.com',
                href: 'https://primastem.com',
                position: 'right',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PrimaSTEM. Built with Docusaurus and Gitlocalize.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },      
    }),
};

export default config;

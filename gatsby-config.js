module.exports = {
  siteMetadata: {
    title: 'Suites By JK',
    siteUrl: 'https://suitesbyjk.com',
  },
  proxy: {
    prefix: '/.netlify',
    url: 'https://suitesbyjk.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-netlify`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `packages`,
        path: `${__dirname}/src/pages/packages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home images`,
        path: `${__dirname}/src/imgs/home`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `package images`,
        path: `${__dirname}/src/imgs/packages`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        // *.css files are included by default.
        // To support another syntax (e.g. SCSS),
        // add `postcss-scss` to your project's devDependencies
        // and add the following option here:
        filetypes: {
          '.scss': { syntax: `postcss-scss` },
        },

        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://shakhorsmith.us16.list-manage.com/subscribe/post?u=9a4bdf66bb80182ea32881a73&amp;id=ffe9fdc02f',
      },
    },
  ],
};

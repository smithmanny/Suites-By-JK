module.exports = {
  siteMetadata: {
    title: 'Suites By JK',
    siteUrl: 'https://suitesbyjk.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    `gatsby-plugin-netlify`,
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
        name: `package images`,
        path: `${__dirname}/src/imgs/packages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};

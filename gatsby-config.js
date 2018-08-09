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
  ],
};

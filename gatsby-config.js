require('dotenv').config({
  path: `.env.${ process.env.NODE_ENV }`,
})

module.exports = {
  siteMetadata: {
    title: 'Suites By JK',
    siteUrl: 'https://suitesbyjk.com',
    menuLinks: [
      {
        name: 'Meet The Owners',
        link: '/meet-the-owners',
        color: '#63ddfb',
      },
      {
        name: 'Packages',
        link: '/packages',
        color: '#ed6eae',
      },
      {
        name: 'Contact',
        link: '/contact',
        color: '#cbfc54',
      }
    ],
    packages: [
      {
        name: 'So you think you can sing',
        link: 'so-you-think-you-can-sing',
        image: 'so-you-think-you-can-sing.jpg'
      },
      {
        name: 'Bridal Transportation',
        link: 'bridal-transportation',
        image: 'bridal-transportation.jpg'
      },
      {
        name: 'All Access',
        link: 'all-access',
        image: 'all-access.jpg'
      },
      {
        name: 'The Glow Up',
        link: 'the-glow-up',
        image: 'the-glow-up.jpg'
      },
      {
        name: 'The Day Camp',
        link: 'the-day-camp',
        image: 'the-day-camp.jpg'
      },
      {
        name: 'Sip and Dip',
        link: 'sip-and-dip',
        image: 'sip-and-dip.jpg'
      },
      {
        name: 'Pampered Princess',
        link: 'pampered-princess',
        image: 'pampered-princess.jpg'
      },
      {
        name: 'Grown-ish',
        link: 'grown-ish',
        image: 'grown-ish.jpg'
      },
      {
        name: 'Adult Transportation',
        link: 'adult-transportation',
        image: 'adult-transportation.jpg'
      },
      {
        name: 'Teen Party',
        link: 'teen-party',
        image: 'teen-party.jpg'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `packages`,
        path: `${ __dirname }/src/packages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slideshow`,
        path: `${ __dirname }/src/slideshow`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_target',
              rel: 'nofollow'
            },
          }
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Suites By JK',
        short_name: 'Suites By JK',
        start_url: '/',
        background_color: '#ED6EAE',
        theme_color: '#F6BE5F',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://suitesbyjk.us19.list-manage.com/subscribe/post?u=f7ff32b77deb0c6f332beb0e6&amp;id=6c0ef38743',
      },
    },
  ],
}

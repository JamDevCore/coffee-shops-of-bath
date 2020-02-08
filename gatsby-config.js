module.exports = {
  siteMetadata: {
    title: `Coffee shops of Bath`,
    description: `Discover the best coffee shops in Bath. Read in (obsessive) details
    about their quirks and charms, and ultimately where to get the best cup.
    Written by a Bath local who spends way too much time (and money) 
    on the good stuff.`,
    author: `JamesVitaly`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic-graphql',
        options: {
          repositoryName: 'coffeeshopsofbath', // (REQUIRED, replace with your own)
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-styled-components',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Playfair Display`,
            variants: [`400`, `600`, '700', '900']
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

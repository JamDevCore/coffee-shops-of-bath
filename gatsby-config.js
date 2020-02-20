
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Coffee shops of Bath`,
    description: `Discover the best coffee shops in Bath. Read in (obsessive) details about their quirks and charms, and ultimately where to get the best cup. Written by a Bath local who spends way too much time (and money) on the good stuff.`,
    author: `JamesVitaly`,
    siteUrl: `https://bathcoffee.co`,
  },
  plugins: [
     {
      resolve: 'gatsby-source-prismic-graphql',
        options: {
          repositoryName: 'coffeeshopsofbath', // (REQUIRED, replace with your own)
          accessToken: process.env.GATSBY_ACCESS_TOKEN,
          previews: false,
          omitScript: true,
          pages: [{ // (optional, builds pages dynamically)
            type: 'Coffeeshop', 
            path: '/:uid',        // TypeName from prismic
            match: '/:uid',  // Pages will be generated under this pattern
            component: require.resolve('./src/templates/review-template.js'),
          }],
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/preview`, `/:uid`],
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + `${edge.node.path}/`,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
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
        name: `The coffee shops of Bath`,
        short_name: `Coffee of Bath`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/open-doodles-coffee.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Playfair Display']
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
  ],
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Muriel Gonzalez',
    description: 'web and mobile developer'
  },
  plugins: [
    `gatsby-transformer-remark` ,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`
  ]
};

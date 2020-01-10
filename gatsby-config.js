module.exports = {
  siteMetadata: {
    title: 'Muriel Gonzalez',
    description: 'web and mobile developer',
    url: `https://murielg.github.io`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-88366603-1",
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `murielg`
      }
    },
    {
      resolve: `gatsby-transformer-remark` ,
      options: {
        plugins: [
          {
            resolve:   `gatsby-remark-prismjs`,
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      }
    },
  ]
};

module.exports = {
  siteMetadata: {
    title: 'blog by muriel gonzalez',
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
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto Mono:400,700']
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/favicon.ico`
      },
    },
  ]
};

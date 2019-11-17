const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = (({graphql, actions}) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/components/Post.js');
    resolve(
      graphql(
        ` query {
               allMarkdownRemark  {
                edges {
                  node {
                    frontmatter {
                      path
                    }
                  }
                }
              }
            }
          `
      ).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
          const path = node.frontmatter.path;
          createPage({
            path: path,
            component: blogPostTemplate,
            context: {
              pathSlug: path
            }
          });
          resolve()
        })
      })
    )
  })
});

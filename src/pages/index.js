import React from "react"
import Layout from '../components/layout';
import {graphql} from 'gatsby';
const HomePage = () => (
  <Layout>

  </Layout>
);

export default HomePage

export const query = graphql`
  query LatestBlogQuery {
     allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date]}
     ) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MM/DD/YY")
            tags
          }
        }
      }
    }
  }
`;

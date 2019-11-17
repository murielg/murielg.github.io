import React from "react";
import  {graphql, Link } from 'gatsby';
import Layout from "../components/layout"

const Blog = ({data}) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      {edges.map(edge => {
        const {frontmatter} = edge.node;
        return  (
          <article className='blogpost' key={frontmatter.path}>
            <Link to={frontmatter.path}>
              {frontmatter.title}
            </Link>
          </article>
        )
      })}
    </Layout>
  )
};

export const query = graphql`
  query HomepageQuery {
     allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date]}
     ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

export default Blog;

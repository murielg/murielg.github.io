import React, {Fragment} from "react";
import  {graphql, Link } from 'gatsby';
import Layout from "../components/layout"
import {Helmet} from 'react-helmet';

const Blog = ({data}) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <Helmet>
        <title>Blog | Muriel Gonzalez</title>
      </Helmet>
      {edges.map(edge => {
        const { frontmatter } = edge.node;
        return  (
          <article className='post' key={frontmatter.path}>

            <Link to={frontmatter.path}>
              {frontmatter.title}
            </Link>
            <ul className='tags'>
            {frontmatter.tags.map(tag => (
                <li key={tag}>
                  #{tag}
                </li>
              ))}
            </ul>
            <p className="post-date">
              {frontmatter.date}
            </p>

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
            date(formatString: "MM/DD/YY")
            tags
          }
        }
      }
    }
  }
`;

export default Blog;

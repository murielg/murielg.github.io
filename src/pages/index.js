import React from "react";
import  {graphql, Link } from 'gatsby';
import {Helmet} from 'react-helmet';
import Layout from "../components/layout"

const Index = ({data}) => {
  const { edges } = data.allMarkdownRemark;
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Helmet>
        <title>Blog | Muriel Gonzalez</title>
      </Helmet>
      {edges.map(edge => {
        const { frontmatter } = edge.node;
        return  (
          <Link to={frontmatter.path} className="article-link">
          <article className='post' key={frontmatter.path}>


            <h2 className="post-title">{frontmatter.title}</h2>

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
          </Link>
        )
      })}
    </Layout>
  )
};

export const query = graphql`
  query BlogPosts {
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

export default Index;

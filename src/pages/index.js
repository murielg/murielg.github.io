import React from "react";
import  {graphql, Link } from 'gatsby';
import HeaderQuery from '../components/Header';
import "../styles/style.scss";
import {Helmet} from "react-helmet";

const Layout = ({data}) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <HeaderQuery/>
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
    </div>
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

export default Layout;

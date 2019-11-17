import React from "react"
import  {graphql, Link } from 'gatsby';
import {Helmet} from 'react-helmet';
import Layout from '../components/layout';
const Post = ({data}) => {
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const date = markdownRemark.frontmatter.date;
  const html = markdownRemark.html;
  return (
    <Layout>
      <Helmet>
        <title>{title} | Muriel Gonzalez</title>
      </Helmet>
        <p>{date}</p>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: html}} >
        </div>
    </Layout>

  )
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;

export default Post;

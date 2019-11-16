import React from "react"
import  {graphql, Link } from 'gatsby';

const Post = ({data}) => {
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const date = markdownRemark.frontmatter.date;
  const html = markdownRemark.html;
  return (
    <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <div dangerouslySetInnerHTML={{__html: html}} >
        </div>
    </div>

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

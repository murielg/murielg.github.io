import React from "react"
import { graphql } from "gatsby"
import {Helmet} from 'react-helmet';
import { Disqus } from 'gatsby-plugin-disqus';
import Layout from '../components/layout';

const Post = (props) => {
  console.log(props);
  const { markdownRemark } = props.data;
  const title = markdownRemark.frontmatter.title;
  const date = markdownRemark.frontmatter.date;
  const html = markdownRemark.html;
  const id = props.path.split('/').slice(-1)[0];

  let disqusConfig = {
    url: `${props.data.meta.siteMetadata.url+props.path}`,
    identifier: id,
    title: title,
  };

  console.log(disqusConfig);
  return (
    <Layout>
      <Helmet>
        <title>{title} | Muriel Gonzalez</title>
      </Helmet>
        <p>{date}</p>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: html}} />
        <Disqus config={disqusConfig} />
    </Layout>

  )
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        title
        date(formatString: "MM/DD/YY")
      }
    }
    meta: site {
          siteMetadata {
            title
            url
          }
        }
  }
`;

export default Post;

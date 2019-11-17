import React, {Fragment} from 'react';
import {graphql, Link, StaticQuery} from 'gatsby';
import Nav from './Nav';
const Header = ({data}) => {
  const {title, description} = data.site.siteMetadata;
  return (
    <Fragment>
        <h2>{title}</h2>
        <p>{description}</p>
        <Nav/>
    </Fragment>
  )
};

const HeaderQuery = () => {
  return (
    <StaticQuery query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={ data => <Header data={data}/>}
    />
  )
};

export default HeaderQuery;

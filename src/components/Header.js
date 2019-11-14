import React, {Fragment} from 'react';
import {graphql, StaticQuery} from 'gatsby';

const Header = ({data}) => {
  const {title, description} = data.site.siteMetadata
  return (
    <Fragment>
      <h2>{title}</h2>
      <p>{description}</p>
    </Fragment>
  )
}

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

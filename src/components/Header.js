import React, {Fragment} from 'react';
import {graphql, Link, StaticQuery} from 'gatsby';
import Nav from './Nav';
import logo from "../assets/mg.png";

const Header = ({data}) => {
  const {title, description} = data.site.siteMetadata;
  return (
    <div className="header-container">
      <header>
        <img className='logo' src={logo} alt="Logo" />
        <h1>{title}</h1>
      </header>
      <Nav/>
    </div>
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

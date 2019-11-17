import React from "react"
import  {graphql, Link } from 'gatsby';
const Nav = () => (
  <nav>
    <Link to='/'>home</Link>
    <Link to='/blog'>blog</Link>
    <Link to='/about'>about</Link>
  </nav>
);

export default Nav

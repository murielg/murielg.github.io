import React from "react"
import  {graphql, Link } from 'gatsby';
const Nav = () => (
  <nav>
    <ul>
    <li>
      <Link to='/' activeClassName="active">home</Link></li>
      <li><Link to='/blog' activeClassName="active">blog</Link></li>
      <li><Link to='/about' activeClassName="active">about</Link></li>
    </ul>
  </nav>
);

export default Nav

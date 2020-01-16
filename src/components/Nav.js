import React from "react"
import  { Link } from 'gatsby';
const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/' activeClassName="active">posts</Link>
        </li>
        <li>
          <Link to='/about' activeClassName="active">about</Link>
        </li>
      </ul>
    </nav>
  );
};


export default Nav

import React from "react"
import  { Link } from 'gatsby';
const Nav = (props) => {
  console.log(props);
  return (
    <nav>
      <ul>
        <li>
          <Link to='/' activeClassName="active">blog</Link>
        </li>
        <li>
          <Link to='/about' activeClassName="active">about</Link>
        </li>
      </ul>
    </nav>
  );
};


export default Nav

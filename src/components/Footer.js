import React from "react";
import  {graphql, Link } from 'gatsby';
const Footer = () => (
  <footer>
    <nav>
      <Link to='https://github.com/murielg'>Github</Link>
      <Link to='www.linkedin.com/in/murielgonzalez'>LinkedIn</Link>
      <Link to='https://stackoverflow.com/story/muriel'>StackOverflow</Link>
    </nav>
  </footer>
);

export default Footer

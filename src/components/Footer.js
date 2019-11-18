import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
const Footer = () => (
  <footer>
    <nav>
      <a href='https://github.com/murielg' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
      <a href='https://www.linkedin.com/in/murielgonzalez/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href='https://stackoverflow.com/story/muriel' target='_blank'><FontAwesomeIcon icon={faStackOverflow} /></a>
    </nav>
    <p>&copy;{(new Date().getFullYear())} Muriel Gonzalez | Built with <a href='https://www.gatsbyjs.com/'>Gatsby</a></p>
  </footer>
);

export default Footer

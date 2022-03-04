import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
config.autoAddCss = false;
const Footer = () => (
  <footer>
    <nav>
      <a href='https://github.com/murielg' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
      <a href='https://www.linkedin.com/in/murielgonzalez/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
    </nav>
    <p>&copy;{(new Date().getFullYear())} Muriel Gonzalez | Built with <a href='https://www.gatsbyjs.com/'  target='_blank'>Gatsby</a></p>
  </footer>
);

export default Footer

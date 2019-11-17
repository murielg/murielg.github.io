import React, { Fragment } from "react"
import {Helmet} from 'react-helmet';
import HeaderQuery from './Header';
import Footer from './Footer';
import "../styles/style.scss";
export default ({ children }) => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Muriel Gonzalez - Web and Mobile Developer</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap" rel="stylesheet"/>
    </Helmet>
    <div className="container">
      <HeaderQuery/>
      {children}
      <Footer/>
    </div>
  </Fragment>
)



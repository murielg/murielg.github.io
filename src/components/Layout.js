import React, { Fragment } from "react"
import {Helmet} from 'react-helmet';
import HeaderQuery from './Header';
import Footer from './Footer';
import "../styles/style.scss";

const Layout = ({children}) => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Muriel Gonzalez - Web and Mobile Developer</title>
      </Helmet>
      <div className="container">
        <HeaderQuery/>
        {children}
        <Footer/>
      </div>
    </Fragment>
  )
};

export default Layout

import React from "react";
import Header from "./header";
import favicon from '../images/favicon.ico'
import Helmet from 'react-helmet'

import "../styles/layout.css";
import * as styles from "./layout.module.css";

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle, props }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <div>{children}</div>
    {props.post == false &&
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.siteInfo}>
            &copy; {new Date().getFullYear()}, All rights reserved {" "}
            <a href="https://voicemix.io">Voicemix.inc</a>
          </div>
        </div>
      </footer>
    }

  </>
);

export default Layout;

import { Link } from "gatsby";
import React from "react";
import logoBlog from "../images/logo_blog_vmx.png";
import logoBlog02 from "../images/logo_blog_vmx-p-500.png";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import * as styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div class="blogheadersection">
  <div class="container w-container">
    <div class="headerleftblock">
    <Link to="/"><div class="logoblock"><img src={logoBlog} loading="lazy" width="366" sizes="150px" srcset={logoBlog02 + "500w", logoBlog + " 732w"}  alt=""/></div></Link>
      <div class="menudropdownbuttonblock">
        <div class="menuitemtext">Argentina</div>
        <div class="div-block"><img src="images/arrow_i.png" loading="lazy" width="20" alt=""/></div>
      </div>
      <div class="menudropdownbuttonblock">
        <div class="menuitemtext">Categorías</div>
        <div class="div-block"><img src="images/arrow_i.png" loading="lazy" width="20" alt=""/></div>
      </div>
    </div>
    <div class="headerrightblock">
      <a href="#" class="actionbutton w-button">Acceder</a>
    </div>
  </div>
</div>
);

export default Header;

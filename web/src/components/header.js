import { Link } from "gatsby";
import React, { Children, render, useState } from "react";
import logoBlog from "../images/logo_blog_vmx.png";
import logoBlog02 from "../images/logo_blog_vmx-p-500.png";
import arrow from "../images/arrow_i.png";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import 'bootstrap/dist/css/bootstrap.min.css';

/*<Dropdown >
<Dropdown.Toggle
childBsPrefix={arrow}
style={{ fontFamily: 'Averta', backgroundColor: '#fff', borderColor: '#fff', fontSize: '13px', fontWeight: 'w600', letterSpacing: '-0.2px', color: '#2b3748' }} id="dropdown-custom-components">
Categorías </Dropdown.Toggle>

<Dropdown.Menu >
<Dropdown.Item style={{ fontSize: '12px', fontWeight: 'w500', }} href="#/carrers">Carrera</Dropdown.Item>
<Dropdown.Item style={{ fontSize: '12px', fontWeight: 'w500', }} href="#/activeVoices">Voces activas</Dropdown.Item>
<Dropdown.Item style={{ fontSize: '12px', fontWeight: 'w500', }} href="#/users">Usuarios</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>*/


const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div class="blogheadersection">
    <div class="container w-container">
      <div class="headerleftblock">
        <Link to="/"><div class="logoblock"><img src={logoBlog} loading="lazy" width="366" sizes="150px" srcset={logoBlog02 + "500w", logoBlog + " 732w"} alt="" /></div></Link>
        <div class="menudropdownbuttonblock">
          

        </div>

      </div>
      <div class="headerrightblock">
        <div style={{cursor: 'pointer'}} onClick={() => window.location = "https://voicemix.io"} class="actionbutton w-button">Acceder</div>
      </div>
    </div>
  </div>
);

export default Header;

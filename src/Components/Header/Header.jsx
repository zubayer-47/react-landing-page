import React from "react";
import {Link} from 'react-router-dom'
import Logo from "./../../img/logo.png";
import Nav from './Nav';
import './Header.css'

const Header = () => {
  return (
    <header className="bg-light">
      <div className="container container-lg d-flex justify-content-between align-items-center">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Header Logo" />
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {NavLink} from 'react-router-dom'
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/* <span className="sr-only">(current)</span> */}
            <NavLink className="nav-link sr-only" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to="/signup">Register</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

// <nav>
//   <ul className="d-flex justify-content-between align-items-center">
//     <li>
//       <NavLink to="/">Home</NavLink>
//     </li>
//     <li>
//       <NavLink to="/about">About</NavLink>
//     </li>
//     <li>
//       <NavLink to="/contact">Contact</NavLink>
//     </li>
//     <li>
//       <NavLink to="/login">Login</NavLink>
//     </li>
//     <li>
//       <NavLink to="/signup">Register</NavLink>
//     </li>
//   </ul>
// </nav>

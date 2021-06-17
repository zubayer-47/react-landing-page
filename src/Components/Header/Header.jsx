/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import "./Header.css";
import Nav from './Nav'

const Header = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/">
					<img src={Logo} alt="Header Logo" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<Nav />
				</div>
			</div>
		</nav>
	);
};

export default Header;

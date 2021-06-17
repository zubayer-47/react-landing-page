/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../img/logo.png";
import "./Header.css";

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
					<div className="custom">
						<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink className="nav-link active" aria-current="page" to="/">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" aria-current="page" to="/about">
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" aria-current="page" to="/contact">
									Contact
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" aria-current="page" to="/login">
									Login
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" aria-current="page" to="/signup">
									Register
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>

		// <header className="bg-light">
		//   <div className="container container-lg d-flex justify-content-between align-items-center">
		//     <div className="logo">

		//     </div>
		//     <Nav />
		//   </div>
		// </header>
	);
};

export default Header;

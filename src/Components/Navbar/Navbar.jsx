import React from "react";
import "./Navbar.css";
import Logo from "../../Logos/Logo.svg";

export default function Navbar() {
	return (
		<>
			<nav className="navbar">
				<div className="navbar-logo-section">
					<img className="navbar-logo" src={Logo} />
					<a href="" className="navbar-title">
						Flottila
					</a>
				</div>
				<ul className="navbar-menu">
					<li className="navbar-links">
						<a href="">about</a>
					</li>
					<li className="navbar-links">
						<a href="">home</a>
					</li>
				</ul>
			</nav>
		</>
	);
}

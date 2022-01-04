import React, { useState } from "react";
// import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FiAlignJustify } from "react-icons/fi";

const Navbar = ({ toggle }) => {
	const [move, setMove] = useState(false);

	const moveNavbar = () => {
		if (window.scrollY >= window.innerHeight) {
			setMove(true);
		} else {
			setMove(false);
		}
	};
	window.addEventListener("scroll", moveNavbar);

	return (
		<nav className={`navbar ${move ? "move" : ""}`}>
			<Link to="/" className="navlink" to="/">
				<div className="desktop">Cakes & CoffeeTee</div>
			</Link>
			<div className="navicon" onClick={toggle}>
				<FiAlignJustify className="icon" />
			</div>
		</nav>
	); 
};

export default Navbar;




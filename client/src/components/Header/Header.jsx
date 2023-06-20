import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Header = () => {

	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav")
	}

	return (
		<header>
			<h2>Lentegeur Hospital</h2>
			<nav ref = {navRef}>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/services">Services</NavLink>
					</li>
					<li>
						<NavLink to="/news">News</NavLink>
					</li>
					<li>
						<NavLink to="/events">Events</NavLink>
					</li>
					<li>
						<NavLink to="/gallery">Gallery</NavLink>
					</li>
					<li>
						<NavLink to="/get-involved">Get Involved</NavLink>
					</li>
					<li>
						<NavLink to="/contact-us">Contact Us</NavLink>
					</li>
					<button className="nav-btn nav-close-btn"  onClick={showNavbar}>
						<FaTimes />
					</button>
				</ul>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
};
export default Header;

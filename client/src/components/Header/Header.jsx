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
				<ul className="ul-container">
					<li >
						<NavLink to="/" className="navlink-text">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about" className="navlink-text">About</NavLink>
					</li>
					<li>
						<NavLink to="/services" className="navlink-text">Services</NavLink>
					</li>
					<li>
						<NavLink to="/news" className="navlink-text">News</NavLink>
					</li>
					<li>
						<NavLink to="/events" className="navlink-text">Events</NavLink>
					</li>
					<li>
						<NavLink to="/gallery" className="navlink-text">Gallery</NavLink>
					</li>
					<li>
						<NavLink to="/get-involved" className="navlink-text">Get Involved</NavLink>
					</li>
					<li>
						<NavLink to="/contact-us" className="navlink-text">Contact Us</NavLink>
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

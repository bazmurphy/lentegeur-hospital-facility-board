import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillCaretUp } from "react-icons/ai";
import { useRef } from "react";

const Header = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const closeNavbar = () => {
		// Check if the window width is less than or equal to 767px (indicating the mobile view)
		if (window.innerWidth <= 767) {
			navRef.current.classList.remove("responsive_nav");
		}
	};

	return (
		<header>
			<div className="header-subcontainer">
				<div className="header-logo-container">
					<div className="header-logo-image-container">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Circle_Davys-Grey_Solid.svg"
							alt="logo"
						/>
					</div>
					<h2 className="header-logo-title">
						Lentegeur Hospital
						<br />
						Facility Board
					</h2>
				</div>
				<nav ref={navRef}>
					<ul>
						<li>
							<NavLink to="/" className="navlink" onClick={closeNavbar}>
								Home
							</NavLink>
							<div className="navlink-image-container">
								<AiFillCaretUp />
							</div>
						</li>
						<li>
							<NavLink to="/about" className="navlink" onClick={closeNavbar}>
								About LSH
							</NavLink>
							<div className="navlink-image-container">
								<AiFillCaretUp />
							</div>
						</li>
						<li>
							<NavLink to="/services" className="navlink" onClick={closeNavbar}>
								Services
							</NavLink>
							<div className="navlink-image-container">
								<AiFillCaretUp />
							</div>
						</li>
						<li>
							<NavLink to="/news" className="navlink" onClick={closeNavbar}>
								News
							</NavLink>
							<div className="navlink-image-container">
								<AiFillCaretUp />
							</div>
						</li>
						<li>
							<NavLink to="/events" className="navlink" onClick={closeNavbar}>
								Events
							</NavLink>
							<div className="navlink-image-container">
								<AiFillCaretUp />
							</div>
						</li>
						<li>
							<NavLink to="/gallery" className="navlink" onClick={closeNavbar}>
								Gallery
							</NavLink>
							<div className="navlink-image-container">
								<AiFillCaretUp />
							</div>
						</li>
						<li>
							<NavLink
								to="/get-involved"
								className="navlink"
								onClick={closeNavbar}
							>
								Get Involved
							</NavLink>
							<div className="navlink-image-container">
								<AiFillCaretUp />
							</div>
						</li>
						<li>
							<NavLink
								to="/contact-us"
								className="navlink"
								onClick={closeNavbar}
							>
								Contact Us
							</NavLink>
							<div className="navlink-image-container">
								<AiFillCaretUp />
							</div>
						</li>
					</ul>
					<button className="nav-btn nav-close-btn" onClick={showNavbar}>
						<FaTimes />
					</button>
				</nav>
				<button className="nav-btn" onClick={showNavbar}>
					<FaBars />
				</button>
			</div>
		</header>
	);
};
export default Header;

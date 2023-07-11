import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillCaretUp } from "react-icons/ai";
import { useState, useEffect } from "react";

const Header = () => {
	const [isNavigationOpen, setIsNavigationOpen] = useState(false);
	//for closing animation
	const [isNavigationClosing, setIsNavigationClosing] = useState(false);

	const navLinks = [
		{ id: 1, to: "/", text: "Home" },
		{ id: 2, to: "/about", text: "About" },
		{ id: 3, to: "/services", text: "Services" },
		{ id: 4, to: "/news", text: "News" },
		{ id: 5, to: "/events", text: "Events" },
		{ id: 6, to: "/gallery", text: "Gallery" },
		{ id: 7, to: "/get-involved", text: "Get Involved" },
		{ id: 8, to: "/contact-us", text: "Contact Us" },
	];

	const showNavbar = () => {
		setIsNavigationOpen(true);
		document.body.classList.add("disable-scroll");
	};

	const closeNavbar = () => {
		document.body.classList.remove("disable-scroll");
		setIsNavigationOpen(false);
		setIsNavigationClosing(true);

		setTimeout(() => {
			setIsNavigationClosing(false);
		}, 1000); // Wait for the animation to complete before removing the classes
	};

	// This useEffect hook adds a resize event listener to the window object
	// to handle changes in the window size. The event listener invokes
	// the handleResize function whenever the window is resized.
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 767) {
				closeNavbar();
				setIsNavigationClosing(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<header>
			<div className="header-subcontainer">
				<div className="header-logo-container">
					<div className="header-logo-image-container">
						<img
							src="./logo.png"
							alt="Lentegeur Hospital Facility Board Logo"
						/>
					</div>
					<h2 className="header-logo-title">
						Lentegeur Hospital
						<br />
						Facility Board
					</h2>
				</div>
				<nav
					className={`${isNavigationOpen ? "navigation-open" : ""} ${
						isNavigationClosing ? "navigation-closing" : ""
					}`}
				>
					<ul>
						{navLinks.map((navLink) => {
							return (
								<li key={navLink.id}>
									<NavLink
										to={navLink.to}
										className="navigation-link"
										onClick={closeNavbar}
									>
										{navLink.text}
									</NavLink>
									<div className="navigation-link-icon-container">
										<AiFillCaretUp />
									</div>
								</li>
							);
						})}
					</ul>
					<button
						className="navigation-menu-button navigation-menu-button-close"
						onClick={closeNavbar}
					>
						<FaTimes className="navigation-menu-button-icon-close" />
					</button>
				</nav>
				<button className="navigation-menu-button" onClick={showNavbar}>
					<FaBars className="navigation-menu-button-icon" />
				</button>
			</div>
		</header>
	);
};

export default Header;

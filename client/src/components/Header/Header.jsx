import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillCaretUp } from "react-icons/ai";
import { useState, useEffect } from "react";

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	//for closing animation
	const [isClosingAdded, setIsClosingAdded] = useState(false);

	const showNavbar = () => {
		setIsNavOpen(true);
		document.body.classList.add("open-nav");
	};

	const closeNavbar = () => {
		document.body.classList.remove("open-nav");
		setIsNavOpen(false);
		setIsClosingAdded(true);

		setTimeout(() => {
			setIsClosingAdded(false);
		}, 1000); // Wait for the animation to complete before removing the classes
	};

	// This useEffect hook adds a resize event listener to the window object
	// to handle changes in the window size. The event listener invokes
	// the handleResize function whenever the window is resized.
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 767) {
				closeNavbar();
				setIsClosingAdded(false);
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
				<nav
					className={`${isNavOpen ? "responsive_nav" : ""} ${
						isClosingAdded ? "closing" : ""
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
					<button className="nav-btn nav-close-btn" onClick={closeNavbar}>
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

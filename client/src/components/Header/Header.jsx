import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<h2>Lentegeur Hospital</h2>
			<nav>
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
				</ul>
			</nav>
		</header>
	);
};
export default Header;

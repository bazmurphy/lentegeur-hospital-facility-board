import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<h2>Header</h2>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/services">Services</Link>
					</li>
					<li>
						<Link to="/news">News</Link>
					</li>
					<li>
						<Link to="/events">Events</Link>
					</li>
					<li>
						<Link to="/gallery">Gallery</Link>
					</li>
					<li>
						<Link to="/get-involved">Get Involved</Link>
					</li>
					<li>
						<Link to="/contact-us">Contact Us</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
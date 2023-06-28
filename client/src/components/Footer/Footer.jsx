import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<div className="footer-container">
				<div className="footer-subcontainer">
					<h3 className="footer-subheading">ADDRESS</h3>
					<p>Lorem Ipsum is simply dummy text of the printing</p>
				</div>
				<div className="footer-subcontainer">
					<h3 className="footer-subheading">CONTACTS</h3>
					<ul className="footer-list">
						<li>
							<a href="tel:+8201453434343">8 201 45 343 4343</a>
						</li>
						<li>
							<a href="tel:+4434334334322">44 343 343 34 322</a>
						</li>
						<li>
							<a href="mailto:info@hospital.com">info@hospital.com</a>
						</li>
					</ul>
				</div>
				<div className="footer-subcontainer">
					<h3 className="footer-subheading">SERVICES</h3>
					<ul className="footer-list">
						<li>
							<a href="/services">Service 1</a>
						</li>
						<li>
							<a href="/services">Service 2</a>
						</li>
						<li>
							<a href="/services">Service 3</a>
						</li>
						<li>
							<a href="/services">Service 4</a>
						</li>
						<li>
							<a href="/services">Service 5</a>
						</li>
						<li>
							<a href="/services">Service 6</a>
						</li>
					</ul>
				</div>
				<div className="footer-subcontainer">
					<h3 className="footer-subheading">PAGES</h3>
					<ul className="footer-list">
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
				</div>
			</div>
		</footer>
	);
};

export default Footer;

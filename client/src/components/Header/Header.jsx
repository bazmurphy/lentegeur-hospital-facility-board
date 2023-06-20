import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav>
				<div className="logo-name">
					<img
						className="logo"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Circle_Davys-Grey_Solid.svg/1200px-Circle_Davys-Grey_Solid.svg.png"
					></img>
					<div className="name">Lentegeur Hospital</div>
				</div>
				<ul className="navigation-links">
					<li>
						<NavLink to="/" className="text-link">
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" className="text-link">
							ABOUT LSH
						</NavLink>
					</li>
					<li>
						<NavLink to="/services" className="text-link">
							SERVICES
						</NavLink>
					</li>
					<li>
						<NavLink to="/news" className="text-link">
							NEWS
						</NavLink>
					</li>
					<li>
						<NavLink to="/events" className="text-link">
							EVENTS
						</NavLink>
					</li>
					<li>
						<NavLink to="/gallery" className="text-link">
							GALLERY
						</NavLink>
					</li>
					<li>
						<NavLink to="/get-involved" className="text-link">
							DONATE
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact-us" className="text-link">
							CONTACT US
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;

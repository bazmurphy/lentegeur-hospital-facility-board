import { useState } from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
	"https://gmail.us21.list-manage.com/subscribe/post?u=062ecc3ec4949eb98966db14b&amp;id=0664e89465&amp;f_id=00da28e7f0";

const Footer = () => {
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

	const [email, setEmail] = useState(""); // Add state for the email input

	const handleSubmit = (subscribe, event) => {
		// Add 'subscribe' as a parameter
		event.preventDefault();
		const formData = new FormData(event.target);
		const submittedEmail = formData.get("email");
		subscribe({ EMAIL: submittedEmail });
		setEmail(""); // Reset the email input
	};

	return (
		<footer>
			<div className="footer-container">
				<div className="footer-subcontainer">
					<h4 className="footer-subheading">ADDRESS</h4>
					<div className="footer-address-container">
						<span>Highlands Drive</span>
						<span>Lentegeur</span>
						<span>Cape Town</span>
						<span>7786</span>
						<span>South Africa</span>
					</div>
				</div>
				<div className="footer-subcontainer">
					<h4 className="footer-subheading">CONTACT</h4>
					<ul className="footer-list">
						<li>
							<a href="tel:+27213701411" className="footer-link">
								+27 21 370 1411
							</a>
						</li>
						<li>
							<a
								href="mailto:board@lentegeurhospital.co.za"
								className="footer-link"
							>
								board@lentegeurhospital.co.za
							</a>
						</li>
					</ul>
				</div>
				<div className="footer-subcontainer">
					<h4 className="footer-subheading">PAGES</h4>
					<ul className="footer-list">
						{navLinks.map((navLink) => (
							<li key={navLink.id}>
								<NavLink to={navLink.to} className="footer-navigation-link">
									{navLink.text}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
				<div className="footer-subcontainer">
					<h4 className="footer-subheading">SUBSCRIBE</h4>
					<MailchimpSubscribe
						url={url}
						render={({ subscribe, status, message }) => (
							<form
								onSubmit={(event) => handleSubmit(subscribe, event)}
								className="footer-subscribe-form"
							>
								<input
									type="email"
									name="email"
									className="footer-subscribe-form-input"
									placeholder="Your email"
									value={email} // Set the value of the email input
									onChange={(e) => setEmail(e.target.value)} // Handle input changes
								/>
								<button type="submit" className="footer-subscribe-form-button">
									Subscribe
								</button>
								{status === "sending" && (
									<div style={{ color: "blue" }}>sending...</div>
								)}
								{status === "error" && (
									<div
										style={{ color: "red" }}
										dangerouslySetInnerHTML={{ __html: message }}
									/>
								)}
								{status === "success" && (
									<div style={{ color: "green" }}>Subscribed!</div>
								)}
							</form>
						)}
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

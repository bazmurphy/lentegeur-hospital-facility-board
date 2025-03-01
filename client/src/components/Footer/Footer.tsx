import { useState } from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";

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

  const [email, setEmail] = useState("");

  const handleSubmit = (
    subscribe: (data: { EMAIL: string }) => void,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const submittedEmail = formData.get("email") as string;
    subscribe({ EMAIL: submittedEmail });
    setEmail("");
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
          <p className="footer-subscribe-info">
            Please subscribe to our Newsletter...
          </p>
          <MailchimpSubscribe
            url={`${import.meta.env.VITE_MAILCHIMP_URL}`}
            render={({ subscribe, status, message }) => {
              return (
                <form
                  onSubmit={(event) => handleSubmit(subscribe, event)}
                  className="footer-subscribe-form"
                >
                  <input
                    type="email"
                    name="email"
                    className="footer-subscribe-form-input"
                    placeholder="Your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <button
                    type="submit"
                    className="footer-subscribe-form-button"
                  >
                    Subscribe
                  </button>
                  {status === "sending" && (
                    <div className="footer-subscribe-form-status-loading">
                      Subscribing...
                    </div>
                  )}
                  {status === "error" && (
                    <div className="footer-subscribe-form-status-error">
                      {message instanceof Error ? message.message : message}
                    </div>
                  )}
                  {status === "success" && (
                    <div className="footer-subscribe-form-status-success">
                      Subscribed!
                    </div>
                  )}
                </form>
              );
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

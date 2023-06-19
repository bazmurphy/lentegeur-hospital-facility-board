import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
		 <div className="footer-container">
			<div className="address">
          <h3>ADDRESS</h3>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
        </div>
        <div className="contact-details">
          <h3>CONTACTS</h3>
          <ul>
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
		 </div>
    </footer>
  );
};

export default Footer;

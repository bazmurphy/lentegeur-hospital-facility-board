import "./HomeGetInvolvedSection.css";
import { Link } from "react-router-dom";
import Line from "../../../../components/Line/Line";
import { animateScroll as scroll } from "react-scroll";
import { FaHandHoldingMedical, FaPerson } from "react-icons/fa6";

const handleLinkClick = () => {
	scroll.scrollToTop({
	duration: 500, // Adjust the scroll duration as needed
	smooth: true, // Enable smooth scrolling animation
	});
  };


const HomeGetInvolvedSection = () => {
	return (
		<section className="home-get-involved-section">
			<h2>Get Involved</h2>
			<Line />
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industrys standard...
			</p>
			<div className="home-get-involved-links-container">
				<Link
					to="/get-involved"
					onClick={handleLinkClick}
					className="home-get-involved-link"
				>
					<FaHandHoldingMedical className="home-get-involved-link-icon" />
					<span className="home-get-involved-link-title">Fundraising</span>
				</Link>
				<Link to="/get-involved" className="home-get-involved-link" onClick={handleLinkClick}>
					<FaPerson className="home-get-involved-link-icon" />
					<span className="home-get-involved-link-title">Volunteer</span>
				</Link>
			</div>
			

		</section>
	);
};

export default HomeGetInvolvedSection;

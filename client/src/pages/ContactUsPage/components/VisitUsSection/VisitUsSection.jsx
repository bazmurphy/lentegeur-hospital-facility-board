import "./VisitUsSection.css";
import Line from "../../../../components/Line/Line";
import VisitUsMap from "../VisitUsMap/VisitUsMap";

const VisitUsSection = () => {
	return (
		<section className="visit-us-section">
			<h2>Visit Us</h2>
			<Line />
			<div className="visit-us-container">
				<div className="visit-us-address-container">
					<h3>ADDRESS</h3>
					<p>
						<span>Lorem, ipsum dolor.</span>
						<span>Lorem, ipsum dolor.</span>
						<span>Lorem, ipsum dolor.</span>
						<span>Lorem, ipsum dolor.</span>
					</p>
				</div>
				<div className="visit-us-contacts-container">
					<h3>CONTACTS</h3>
					<p>
						<span>8 201 45 343 4343</span>
						<span>44 343 343 34 322</span>
						<span>info@hospital.com</span>
					</p>
				</div>
				<VisitUsMap />
			</div>
		</section>
	);
};

export default VisitUsSection;

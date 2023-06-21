import "./VisitUsSection.css";
import VisitUsMap from "./VisitUsMap/VisitUsMap";

const VisitUsSection = () => {
	return (
		<section className="visit-us-section">
			<h2>Visit Us</h2>
			<div className="divider-line"></div>
			<div className="visit-us-container">
				<div className="visit-us-details-container">
					<div className="visit-us-details-subcontainer">
						<h3>ADDRESS</h3>
						<p>
							<span>Lorem, ipsum dolor.</span>
							<span>Lorem, ipsum dolor.</span>
							<span>Lorem, ipsum dolor.</span>
							<span>Lorem, ipsum dolor.</span>
						</p>
					</div>
					<div className="visit-us-details-subcontainer">
						<h3>CONTACTS</h3>
						<p>
							<span>8 201 45 343 4343</span>
							<span>44 343 343 34 322</span>
							<span>info@hospital.com</span>
						</p>
					</div>
				</div>
				<VisitUsMap />
			</div>
		</section>
	);
};

export default VisitUsSection;

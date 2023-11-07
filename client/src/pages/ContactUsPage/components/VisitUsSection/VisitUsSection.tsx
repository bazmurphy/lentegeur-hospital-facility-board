import "./VisitUsSection.css";
import Line from "../../../../components/Line/Line";
import VisitUsMap from "../VisitUsMap/VisitUsMap";

const VisitUsSection = () => {
	return (
		<section className="visit-us-section">
			<h2>Visit Us</h2>
			<Line extraClass={"visit-us-line"} />
			<div className="visit-us-container">
				<div className="visit-us-address-container">
					<h3>ADDRESS</h3>
					<p>
						<span>Highlands Drive</span>
						<span>Lentegeur</span>
						<span>Cape Town</span>
						<span>7786</span>
						<span>South Africa</span>
					</p>
				</div>
				<div className="visit-us-contacts-container">
					<h3>CONTACT</h3>
					<p>
						<span>
							<ul className="contact-us-contacts-list">
								<li>
									<a href="tel:+27213701411" className="contact-link">
										+27 21 370 1411
									</a>
								</li>
							</ul>
						</span>
						<span>
							<ul className="contact-us-contacts-list">
								<li>
									<a
										href="mailto:board@lentegeurhospital.co.za"
										className="contact-link"
									>
										board@lentegeurhospital.co.za
									</a>
								</li>
							</ul>
						</span>
					</p>
				</div>
				<VisitUsMap />
			</div>
		</section>
	);
};

export default VisitUsSection;

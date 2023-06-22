import "./DonateSection.css";
import Line from "../../../../components/Line/Line";

const Donate = () => {
	return (
		<section className="donate-section">
			<h2>Donate</h2>
			<Line />
			<div className="donate-section-subcontainer">
				<p>
					Thank you for your interest in making a donation to Lentegeur Hospital
					Facility Board. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Nostrum aperiam neque consequuntur facere excepturi, iste ex ut
					nihil quo dolorem?
				</p>
				<p>
					<a
						href="https://external-link-to-donation-platform"
						target="_blank"
						className="donate-link"
						rel="noreferrer"
					>
						Click here
					</a>{" "}
					to be taken to our secure donations site through Platform.
				</p>
			</div>
			<div className="donate-account-details-container">
				<p>Donations may be made to:</p>
				<p className="donate-account-detail">
					<span className="donate-account-label">Account Name:</span>
					<span className="donate-account-value">Lorem Ipsum</span>
				</p>
				<p className="donate-account-detail">
					<span className="donate-account-label">TrustAccount Number:</span>
					<span className="donate-account-value">12345678</span>
				</p>
				<p className="donate-account-detail">
					<span className="donate-account-label">Account Type:</span>
					<span className="donate-account-value">Lorem Ipsum</span>
				</p>
				<p className="donate-account-detail">
					<span className="donate-account-label">Bank Name:</span>
					<span className="donate-account-value">Lorem Ipsum</span>
				</p>
				<p className="donate-account-detail">
					<span className="donate-account-label">Branch Name:</span>
					<span className="donate-account-value">Lorem Ipsum</span>
				</p>
				<p className="donate-account-detail">
					<span className="donate-account-label">Sort Code:</span>
					<span className="donate-account-value">123 456</span>
				</p>
				<p className="donate-account-detail">
					<span className="donate-account-label">
						SwiftCode (international):
					</span>
					<span className="donate-account-value">SWIFT CODE</span>
				</p>
			</div>
		</section>
	);
};

export default Donate;

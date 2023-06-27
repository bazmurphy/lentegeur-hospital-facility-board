import "./DonateSection.css";
import Line from "../../../../components/Line/Line";

const Donate = () => {
	return (
		<section className="donate-section">
			<h2>Donate</h2>
			<Line />
			<div className="donate-section-subcontainer">
				<p>
					Thank you for your willingness to donate to the Lentegeur Psychiatric
					Hospital Facility Board.
				</p>
				<p>
					Your financial support will directly impact the lives of all who are
					facing mental health challenges.
				</p>
				{/* <p>
					<a
						href="https://external-link-to-donation-platform"
						target="_blank"
						className="donate-link"
						rel="noreferrer"
					>
						Click here
					</a>{" "}
					to be taken to securely donate through *Platform*.
				</p> */}
			</div>
			<div className="donate-account-details-container">
				<p>Donations may be made to:</p>
				<p className="donate-account-detail">
					<span className="donate-account-label">Name:</span>
					<span className="donate-account-value">
						Lentegeur Hospital Facility Board
					</span>
				</p>
				<p className="donate-account-detail">
					<span className="donate-account-label">Bank:</span>
					<span className="donate-account-value">FNB</span>
				</p>
				<p className="donate-account-detail">
					<span className="donate-account-label">Account Number:</span>
					<span className="donate-account-value">59204188287</span>
				</p>
				<p className="donate-account-detail">
					<span className="donate-account-label">Branch Code:</span>
					<span className="donate-account-value">250555</span>
				</p>
				<p className="donate-account-detail">
					<span className="donate-account-label">SwiftCode:</span>
					<span className="donate-account-value">FIRNAJJ</span>
				</p>
			</div>
		</section>
	);
};

export default Donate;

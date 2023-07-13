import "./DonateSection.css";
import Line from "../../../../components/Line/Line";
import parseContent from "../../../../utils/parseContent";

const Donate = ({
	donateSectionText,
	bankAccountName,
	bankName,
	bankAccountNumber,
	bankBranchCode,
	bankSwiftCode,
}) => {
	return (
		<section className="donate-section">
			<h2 className="donate-title" id="donate">
				Donate
			</h2>
			<Line extraClass={"donate-line"} />
			<div className="donate-section-subcontainer">
				{parseContent(donateSectionText)}
			</div>
			<div className="donate-account-details-container">
				{bankAccountName && (
					<p className="donate-account-detail">
						<span className="donate-account-label">Name:</span>
						<span className="donate-account-value">{bankAccountName}</span>
					</p>
				)}
				{bankName && (
					<p className="donate-account-detail">
						<span className="donate-account-label">Bank:</span>
						<span className="donate-account-value">{bankName}</span>
					</p>
				)}
				{bankAccountNumber && (
					<p className="donate-account-detail">
						<span className="donate-account-label">Account Number:</span>
						<span className="donate-account-value">{bankAccountNumber}</span>
					</p>
				)}
				{bankBranchCode && (
					<p className="donate-account-detail">
						<span className="donate-account-label">Branch Code:</span>
						<span className="donate-account-value">{bankBranchCode}</span>
					</p>
				)}
				{bankSwiftCode && (
					<p className="donate-account-detail">
						<span className="donate-account-label">SwiftCode:</span>
						<span className="donate-account-value">{bankSwiftCode}</span>
					</p>
				)}
			</div>
		</section>
	);
};

export default Donate;

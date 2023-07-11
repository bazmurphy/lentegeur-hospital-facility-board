import "./GovernanceSection.css";
import Line from "../../../../components/Line/Line";
import parseContent from "../../../../utils/parseContent";

const GovernanceSection = ({ governanceSectionText }) => {
	return (
		<section className="governance-section">
			<h2>Governance</h2>
			<Line />
			<div className="governance-text-container">
				{parseContent(governanceSectionText)}
			</div>
		</section>
	);
};

export default GovernanceSection;

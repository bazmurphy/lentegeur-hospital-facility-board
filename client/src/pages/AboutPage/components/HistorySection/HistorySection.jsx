import "./HistorySection.css";
import Line from "../../../../components/Line/Line";
import parseContent from "../../../../utils/parseContent";

const HistorySection = ({ historySectionImage, historySectionText }) => {
	return (
		<section className="history-section">
			<h2>History</h2>
			<Line extraClass="history-line" />
			<div className={"history-container"}>
				<div className="history-image-container">
					<img
						src={historySectionImage.url}
						alt={historySectionImage.alternativeText}
						className="history-image"
					/>
				</div>
				<div className="history-text-container">
					{parseContent(historySectionText)}
				</div>
			</div>
		</section>
	);
};

export default HistorySection;

import "./GetInvolvedSection.css";
import Line from "../../../../components/Line/Line";
import parseContent from "../../../../utils/parseContent";

const GetInvolvedSection = ({ getInvolvedSectionText }) => {
	return (
		<section className="get-involved-section">
			<h1 className="get-involved-title">Get Involved</h1>
			<Line extraClass={"get-involved-line"} />
			<div className="get-involved-subcontainer">
				{parseContent(getInvolvedSectionText)}
			</div>
		</section>
	);
};

export default GetInvolvedSection;

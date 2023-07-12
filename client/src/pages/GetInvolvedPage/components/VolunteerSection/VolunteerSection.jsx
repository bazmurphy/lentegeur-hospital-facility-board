import "./VolunteerSection.css";
import Line from "../../../../components/Line/Line";
import VolunteerForm from "../VolunteerForm/VolunteerForm";
import parseContent from "../../../../utils/parseContent";

const Volunteer = ({ volunteerSectionImage, volunteerSectionText }) => {
	return (
		<section className="volunteer-section">
			<h2 className="volunteer-title">Volunteer</h2>
			<Line extraClass={"volunteer-line"} />
			<div className="volunteer-image-container">
				<img
					className="volunteer-image"
					src={volunteerSectionImage.url}
					alt={volunteerSectionImage.alternativeText}
				/>
			</div>
			<div className="volunteer-subcontainer">
				{parseContent(volunteerSectionText)}
			</div>
			<VolunteerForm />
		</section>
	);
};

export default Volunteer;

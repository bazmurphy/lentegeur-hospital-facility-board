import "./VolunteerSection.css";
import Line from "../../../../components/Line/Line";
import VolunteerForm from "../VolunteerForm/VolunteerForm";
import parseContent from "../../../../utils/parseContent";
import { GetInvolved } from "../../GetInvolvedPage";

export interface VolunteerSectionProps {
  volunteerSectionImage: GetInvolved["volunteerSectionImage"];
  volunteerSectionText: GetInvolved["volunteerSectionText"];
}

const Volunteer = ({
  volunteerSectionImage,
  volunteerSectionText,
}: VolunteerSectionProps) => {
  return (
    <section className="volunteer-section">
      <h2 className="volunteer-title" id="volunteer">
        Volunteer
      </h2>
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

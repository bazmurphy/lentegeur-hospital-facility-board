import "./GetInvolvedSection.css";
import Line from "../../../../components/Line/Line";
import parseContent from "../../../../utils/parseContent";
import { GetInvolved } from "../../GetInvolvedPage";

export interface GetInvolvedSectionProps {
  getInvolvedSectionText: GetInvolved["getInvolvedSectionText"];
}

const GetInvolvedSection = ({
  getInvolvedSectionText,
}: GetInvolvedSectionProps) => {
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

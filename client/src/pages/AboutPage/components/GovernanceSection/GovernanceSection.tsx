import "./GovernanceSection.css";
import Line from "../../../../components/Line/Line";
import parseContent from "../../../../utils/parseContent";
import { AboutPageContent } from "../../AboutPage";

export interface GovernanceSectionProps {
  governanceSectionText: AboutPageContent["governanceSectionText"];
}

const GovernanceSection = ({
  governanceSectionText,
}: GovernanceSectionProps) => {
  return (
    <section className="governance-section">
      <h2 className="governance-title">Governance</h2>
      <Line extraClass="governance-line" />
      <div className="governance-text-container">
        {parseContent(governanceSectionText)}
      </div>
    </section>
  );
};

export default GovernanceSection;

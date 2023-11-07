import "./HistorySection.css";
import Line from "../../../../components/Line/Line";
import parseContent from "../../../../utils/parseContent";
import { AboutPageContent } from "../../AboutPage";

export interface HistorySectionProps {
  historySectionImage: AboutPageContent["historySectionImage"];
  historySectionText: AboutPageContent["historySectionText"];
}

const HistorySection = ({
  historySectionImage,
  historySectionText,
}: HistorySectionProps) => {
  return (
    <section className="history-section">
      <h2 className="history-title">History</h2>
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

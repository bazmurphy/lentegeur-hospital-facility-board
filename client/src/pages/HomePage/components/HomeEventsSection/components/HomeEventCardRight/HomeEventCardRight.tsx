import "./HomeEventCardRight.css";
import { Link } from "react-router-dom";
import { HomeEventCardProps } from "../../HomeEventsSection";

function HomeEventCardRight({
  slug,
  image,
  alternativeText,
  title,
  summary,
  date,
}: HomeEventCardProps) {
  return (
    <>
      <Link to={`/events/${slug}`} className="home-event-container-right">
        <div className="home-event-image-container-right">
          <img
            src={image}
            alt={alternativeText}
            className="home-event-image-right"
          />
        </div>
        <div className="home-event-details-right">
          <h2 className="home-event-title-right">{title}</h2>
          <p className="home-event-summary-right">{summary}</p>
          <span className="home-event-date-right">{date}</span>
        </div>
      </Link>
    </>
  );
}

export default HomeEventCardRight;

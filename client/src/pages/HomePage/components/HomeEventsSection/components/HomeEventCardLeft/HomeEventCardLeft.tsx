import "./HomeEventCardLeft.css";
import { Link } from "react-router-dom";
import { HomeEventCardProps } from "../../HomeEventsSection";

function HomeEventCardLeft({
  slug,
  image,
  alternativeText,
  title,
  summary,
  date,
}: HomeEventCardProps) {
  return (
    <>
      <Link to={`/events/${slug}`} className="home-event-container-left">
        <div className="home-event-image-container-left">
          <img
            src={image}
            alt={alternativeText}
            className="home-event-image-left"
          />
        </div>
        <div className="home-event-details-left">
          <h2 className="home-event-title-left">{title}</h2>
          <p className="home-event-summary-left">{summary}</p>
          <span className="home-event-date-left">{date}</span>
        </div>
      </Link>
    </>
  );
}

export default HomeEventCardLeft;

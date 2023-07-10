import "./EventCard.css";
import { Link } from "react-router-dom";

function EventCard({ slug, image, alternativeText, title, summary, date }) {
	return (
		<>
			<Link to={`/events/${slug}`} className="event-container">
				<div className="event-image-container">
					<img src={image} alt={alternativeText} className="event-image" />
				</div>
				<div className="event-details">
					<h2 className="event-title">{title}</h2>
					<p className="event-summary">{summary}</p>
					<span className="event-date">{date}</span>
				</div>
			</Link>
		</>
	);
}

export default EventCard;

import "./EventsCard.css";
import { Link } from "react-router-dom";

function EventsCard({
	slug,
	title,
	image,
	alternativeText,
	summary,
	date,
	pageName,
}) {
	return (
		<>
			<div className="event-container">
				<div className="event-image-container">
					<Link
						to={{ pathname: `/${pageName}/${slug}` }}
						style={{ textDecoration: "none" }}
					>
						<img src={image} alt={alternativeText} className="event-image" />
					</Link>
				</div>
				<div className="event-details">
					<Link
						to={{ pathname: `/${pageName}/${slug}` }}
						style={{ textDecoration: "none" }}
					>
						<h2 className="event-title">{title}</h2>
					</Link>
					<p className="event-summary">{summary}</p>
					<span className="event-date">{date}</span>
				</div>
			</div>
		</>
	);
}

export default EventsCard;

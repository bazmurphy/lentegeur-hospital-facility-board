import "./NewsCard.css";
import { Link } from "react-router-dom";

function NewsCard({
	slug,
	image,
	alternativeText,
	title,
	date,
	category,
	summary,
}) {
	return (
		<>
			<Link to={`/news/${slug}`} className="news-card-container">
				<div className="news-card-details">
					<h2>{title}</h2>
					<div className="news-card-details-subcontainer">
						<span className="news-card-date">{date}</span>
						<span className="news-card-category">{category}</span>
					</div>
					<p>{summary}</p>
				</div>
				<div className="news-card-image-container">
					<div className="overlay"></div>
					<img src={image} alt={alternativeText} className="news-card-image" />
				</div>
			</Link>
		</>
	);
}

export default NewsCard;

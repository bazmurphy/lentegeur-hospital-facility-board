import "./HomeNewsCard.css";
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
			<Link to={`/news/${slug}`} className="home-news-card-container">
				<div className="home-news-card-details">
					<h2 className="home-news-card-title">{title}</h2>
					<div className="home-news-card-details-subcontainer">
						<span className="home-news-card-date">{date}</span>
						<span className="home-news-card-category">{category}</span>
					</div>
					<p className="home-news-card-summary">{summary}</p>
				</div>
				<div className="home-news-card-image-container">
					<div className="home-news-card-overlay"></div>
					<img
						src={image}
						alt={alternativeText}
						className="home-news-card-image"
					/>
				</div>
			</Link>
		</>
	);
}

export default NewsCard;

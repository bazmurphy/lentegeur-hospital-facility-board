import "./HomeCard.css";
import { Link } from "react-router-dom";

function HomeCard({ title, image, altText, content }) {
	// Truncate the content if it exceeds 100 characters
	const truncatedContent =
		content.length > 350 ? `${content.substring(0, 350)}...` : content;
	return (
		<section className="home-card-container">
			<div className="home-card-image-container">
				<img className="home-card-image" src={image} alt={altText} />
			</div>
			<div className="home-card-content">
				<h2 className="home-card-content-title">{title}</h2>
				<p className="home-card-content-text">{truncatedContent}</p>
				<Link to="/get-involved" className="home-card-content-link">
					Read More
				</Link>
			</div>
		</section>
	);
}

export default HomeCard;

import "./NewsEventsContentBox.css";
import { Link } from "react-router-dom";

function NewsEventContentBox({ title, image, content }) {
	// Truncate the content if it exceeds 100 characters
	const truncatedContent =
		content.length > 350 ? `${content.substring(0, 350)}...` : content;
	return (
		<section className="content-box">
			<div className="content-box-image-container">
				<img className="content-img" src={image} alt="news" />
			</div>
			<div className="card-content">
				<h2 className="content-title">{title}</h2>
				<p className="content-text">{truncatedContent}</p>
				<Link to="/get-involved">
					<a href="./" className="content-button">
						Read More
					</a>
				</Link>
			</div>
		</section>
	);
}

export default NewsEventContentBox;

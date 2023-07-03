import "./Card.css";

function Card({ image, altText, date, tag, title, summary }) {
	// Truncate the content if it exceeds 100 characters
	const truncatedContent =
		summary.length > 200 ? `${summary.substring(0, 200)}...` : summary;
	return (
		<section className="card-container">
			<div className="card-image-container">
				<img className="card-image" src={image} alt={altText} />
			</div>
			<div className="card-subcontainer">
				<h3 className="card-title">{title}</h3>
				<div className="flex-space-between">
					<h4 className="card-date">{date}</h4>
					<span className="card-tag">{tag}</span>
				</div>
				<p className="card-summary">{truncatedContent}</p>
				<button className="card-button">&#8594;</button>
			</div>
		</section>
	);
}

export default Card;

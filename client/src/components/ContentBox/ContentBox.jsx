import "./ContentBox.css";

function ContentBox({ title, image, content, altText }) {
	// Truncate the content if it exceeds 100 characters
	const truncatedContent =
		content.length > 350 ? `${content.substring(0, 350)}...` : content;
	return (
		<section className="content-box">
			<div className="content-box-image-container">
				<img className="content-box-image" src={image} alt={altText} />
			</div>
			<div className="content-box-subcontainer">
				<h3 className="content-box-title">{title}</h3>
				<p className="content-box-text">{truncatedContent}</p>
				<button className="content-box-button">Read More</button>
			</div>
		</section>
	);
}

export default ContentBox;

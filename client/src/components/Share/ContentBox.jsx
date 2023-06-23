import "./ContentBox.css";

function ContentBox({ title, image, content }) {
	// Truncate the content if it exceeds 100 characters
	const truncatedContent =
		content.length > 350 ? `${content.substring(0, 350)}...` : content;
	return (
		<section className="content-box">
			<div className="image-wrapper">
				<img className="content-img" src={image} alt="news" />
			</div>
			<div className="contents">
				<h3 className="content-title">{title}</h3>
				<p className="content-text">{truncatedContent}</p>
				<button className="content-button">Read More</button>
			</div>
		</section>
	);
}

export default ContentBox;

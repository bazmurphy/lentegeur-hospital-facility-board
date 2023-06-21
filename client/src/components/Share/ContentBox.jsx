import "./ContentBox.css";

function ContentBox({ title, image, content }) {
	return (
		<section className="content-box">
			<div className="image-wrapper">
				<img className="content-img" src={image} alt="news" />
			</div>
			<div className="contents">
				<h2 className="content-title">{title}</h2>
				<p className="content-text">{content}</p>
			</div>
		</section>
	);
}

export default ContentBox;

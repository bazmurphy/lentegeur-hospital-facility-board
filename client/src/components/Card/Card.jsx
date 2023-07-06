import "./Card.css";
import { Link } from "react-router-dom";

// i put disable because id is unused
// eslint-disable-next-line no-unused-vars
function Card({
	image,
	alternativeText,
	date,
	tag,
	title,
	summary,
	pageName,
	slug,
}) {
	return (
		<Link
			className="card-link"
			to={{
				pathname: `/${pageName}/${slug}`,
			}}
		>
			<section className="card-container">
				<div className="card-image-container">
					<img className="card-image" src={image} alt={alternativeText} />
				</div>
				<div className="card-subcontainer">
					<h3 className="card-title">{title}</h3>
					<div className="flex-space-between">
						<h4 className="card-date">{date}</h4>
						<span className="card-tag">{tag}</span>
					</div>
					<p className="card-summary">{summary}</p>
					<button className="card-button">&#8594;</button>
				</div>
			</section>
		</Link>
	);
}

export default Card;

import "./Card.css";
import { Link } from "react-router-dom";
import convertToSnakeCase from "../../utils/convertToSnakeCase.js";

// i put disable because id is unused
// eslint-disable-next-line no-unused-vars
function Card({
	id,
	image,
	alternativeText,
	date,
	tag,
	title,
	summary,
	pageName,
}) {
	let convertedTitle;

	//checking if title is not empty
	if (title.length > 0) {
		convertedTitle = convertToSnakeCase(title);
	}

	return (
		<Link
			className="card-link"
			to={{
				pathname: `/${pageName}/${convertedTitle}/${id}`,
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
				</div>
			</section>
		</Link>
	);
}

export default Card;

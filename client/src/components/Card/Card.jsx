import "./Card.css";
import { Link } from "react-router-dom";

function Card({
	slug,
	title,
	image,
	alternativeText,
	category,
	tags,
	date,
	summary,
	pageName,
	passedClass,
}) {
	return (
		<Link
			className="card-link"
			to={{
				pathname: `/${pageName}/${slug}`,
			}}
		>
			<section
				className={`card-container ${
					passedClass === "home"
						? "card-container-home"
						: "card-container-content"
				}`}
			>
				<div
					className={`card-image-container ${
						passedClass === "home"
							? "card-image-container-home"
							: "card-image-container-content"
					}`}
				>
					<img className="card-image" src={image} alt={alternativeText} />
				</div>
				<div className="card-subcontainer">
					<h3 className="card-title">{title}</h3>
					<div className="flex-space-between">
						{date && <h4 className="card-date">{date}</h4>}
						{category && <span className="card-category">{category}</span>}
						{tags && <span className="card-tags">{tags}</span>}
					</div>
					<p className="card-summary">{summary}</p>
					<button className="card-button">&#8594;</button>
				</div>
			</section>
		</Link>
	);
}

export default Card;

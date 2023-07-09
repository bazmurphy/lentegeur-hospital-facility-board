import "./Card.css";
import { Link } from "react-router-dom";

function Card({
	image,
	alternativeText,
	date,
	// category,
	tag,
	title,
	summary,
	pageName,
	slug,
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
				className={
					passedClass === "home"
						? "card-container card-container-home"
						: "card-container card-container-content"
				}
			>
				<div
					className={
						passedClass === "home"
							? "card-image-container card-image-container-home"
							: "card-image-container card-image-container-content"
					}
				>
					<img className="card-image" src={image} alt={alternativeText} />
				</div>
				<div className="card-subcontainer">
					<h3 className="card-title">{title}</h3>
					<div className="flex-space-between">
						<h4 className="card-date">{date}</h4>
						{/* <span className="card-category">{category}</span> */}
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

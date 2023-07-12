import "./Card.css";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

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
					{category && <span className="card-category">{category}</span>}
				</div>
				<div className="card-subcontainer">
					<h3 className="card-title">{title.toUpperCase()}</h3>
					<div className="flex-space-between">
						{date && <h4 className="card-date">{date}</h4>}
						{tags && (
							<p className="card-tags-container">
								{tags.map((tag) => (
									<span key={tag} className="card-tag">
										{tag}
									</span>
								))}
							</p>
						)}
					</div>
					<p className="card-summary">{summary}</p>
					<button className="card-button">
						<MdArrowForwardIos className="card-button-icon" />
					</button>
				</div>
			</section>
		</Link>
	);
}

export default Card;

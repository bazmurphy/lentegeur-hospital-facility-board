import "./ServiceCard.css";
import { Link } from "react-router-dom";

const ServiceCard = ({
	title,
	slug,
	image,
	alternativeText,
	// category,
	// tags,
	// summary,
}) => {
	return (
		<Link
			className="service-card-link"
			to={{
				pathname: `/services/${slug}`,
			}}
		>
			<section className="service-card-container">
				<h2 className="service-card-title">{title}</h2>
				<p className="service-card-learn">LEARN MORE</p>
				<div className="service-card-image-container">
					<img
						className="service-card-image"
						src={image}
						alt={alternativeText}
					/>
					<div className="overlay"></div>

					{/* <span>{category}</span> */}
					{/* <span>{tags}</span> */}
				</div>
			</section>
		</Link>
	);
};

export default ServiceCard;

import "./ServiceCard.css";
import Line from "../../../../components/Line/Line";
import { Link } from "react-router-dom";

const ServiceCard = ({
	title,
	slug,
	image,
	alternativeText,
	// category,
	// tags,
	summary,
	customClassAlignImage,
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
				<Line />
				<div className={`service-card-subcontainer ${customClassAlignImage}`}>
					<div className="service-card-image-container">
						<img
							className="service-card-image"
							src={image}
							alt={alternativeText}
						/>
					</div>
					{/* <span>{category}</span> */}
					{/* <span>{tags}</span> */}
					<p className="service-card-summary">{summary}</p>
				</div>
			</section>
		</Link>
	);
};

export default ServiceCard;

import Line from "../../../../components/Line/Line";
import "./Services.css";
import { Link } from "react-router-dom";
import convertToSnakeCase from "../../../../utils/convertToSnakeCase";

function Services({ id, title, image, description, customClassAlignImage }) {
	let convertedTitle;

	//checking if title is not empty
	if (title.length > 0) {
		convertedTitle = convertToSnakeCase(title);
	}
	return (
		<Link
			className="service-card"
			to={{
				pathname: `/services/${convertedTitle}/${id}`,
			}}
		>
			<section className="services-container">
				<h2 className="service-title">{title}</h2>
				<Line />
				<div className={`${customClassAlignImage} service-subcontainer`}>
					<div className="image-container">
						<img className="service-image" src={image} alt="service" />
					</div>
					<p className="service-description">{description}</p>
				</div>
			</section>
		</Link>
	);
}

export default Services;

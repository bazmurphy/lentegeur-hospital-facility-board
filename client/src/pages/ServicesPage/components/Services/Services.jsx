import Line from "../../../../components/Line/Line";
import "./Services.css";
import { Link } from "react-router-dom";

function Services({ title, image, description, customClassAlignImage, slug }) {
	return (
		<Link
			className="service-link"
			to={{
				pathname: `/services/${slug}`,
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

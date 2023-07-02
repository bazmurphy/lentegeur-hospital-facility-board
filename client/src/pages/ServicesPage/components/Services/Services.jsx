import Line from "../../../../components/Line/Line";
import "./Services.css";
function Services({ title, image, description, customClassAlignImage }) {
	return (
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
	);
}

export default Services;

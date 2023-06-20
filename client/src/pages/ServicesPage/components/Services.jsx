function Services({ title, image, description, customClassAlignImage }) {
	return (
		<section className="services-container">
			<h2 className="service-title">{title}</h2>
			<div className="title-line"></div>
			<div className={`${customClassAlignImage} service-wrapper`}>
				<div className="image-wrapper">
					<img className="service-image" src={image} alt="service" />
				</div>
				<p className="service-description">{description}</p>
			</div>
		</section>
	);
}

export default Services;

function Services({ title, image, description }) {
	return (
		<section>
			<h2>{title}</h2>
            <div>
                <img src={image} alt="service" />
                <p>{description}</p>
            </div>
		</section>
	);

}

export default Services;

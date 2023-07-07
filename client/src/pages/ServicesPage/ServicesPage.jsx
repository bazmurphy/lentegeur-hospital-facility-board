import "./ServicesPage.css";
import Services from "./components/Services/Services";
import servicesData from "../../servicesData.json";

const ServicesPage = () => {
	return (
		<div className="services-page">
			<h1>Services</h1>
			{servicesData.map((service, index) => (
				<Services
					key={index}
					title={service.title}
					image={service.images[0].url}
					description={service.description}
					slug={service.slug}
					customClassAlignImage={index % 2 === 0 ? "align-left" : "align-right"}
				/>
			))}
		</div>
	);
};

export default ServicesPage;

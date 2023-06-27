import "./ServicesPage.css";
import Services from "./components/Services/Services";

const servicesData = [
	{
		title: "Emergency Services",
		image:
			"https://clevelandcliniclondon.uk/-/scassets/images/org/locations/london/hospital-services/hospital-services-feature.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		title: "Surgical Procedures",
		image:
			"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/09/Female_Doctor_Daughter_Mother_1296x728-header-1296x729.jpg?w=1155&h=2268",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		title: "Diagnostic Imaging",
		image:
			"https://s3-prod.modernhealthcare.com/s3fs-public/SPONSORED_170619878_AR_-1_RXMUPRMWBUGI.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
];

const ServicesPage = () => {
	return (
		<div className="services-page">
			<h1>Services</h1>
			{servicesData.map((service, index) => (
				<Services
					key={index}
					title={service.title}
					image={service.image}
					description={service.description}
					customClassAlignImage={index % 2 === 0 ? "align-left" : "align-right"}
				/>
			))}
		</div>
	);
};

export default ServicesPage;

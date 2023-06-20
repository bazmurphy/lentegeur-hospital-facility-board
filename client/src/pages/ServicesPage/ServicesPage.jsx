import "./ServicesPage.css";
import Services from "./components/Services";

const servicesData = [
	{
		title: "Emergency Services",
		image: "https://example.com/emergency.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		title: "Surgical Procedures",
		image: "https://example.com/surgery.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		title: "Diagnostic Imaging",
		image: "https://example.com/imaging.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
];

const ServicesPage = () => {
	return (
		<>
			<h1>Services</h1>
			{servicesData.map((service, index) => (
				<Services
					key={index}
					title={service.title}
					image={service.image}
					description={service.description}
				/>
			))}
		</>
	);
};

export default ServicesPage;

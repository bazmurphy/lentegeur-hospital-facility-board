import "./ServicePage.css";
import { useParams } from "react-router-dom";
import servicesData from "../../servicesData.json";

const ServicePage = () => {
	// eslint-disable-next-line no-unused-vars
	//i don't need anywhere this title
	const { title, id } = useParams();
	console.log("id ", id);
	const element = servicesData.find((el) => el.id === Number(id));

	return (
		<div className="service-page">
			<h1>{element.title}</h1>
			<div className="service-image-container">
				<img
					className="service-image"
					src={element.image}
					alt={element.altText}
				/>
			</div>
			<div className="service-description-container">
				<p>{element.description}</p>
			</div>
		</div>
	);
};

export default ServicePage;

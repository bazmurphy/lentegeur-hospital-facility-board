import "./ServicePage.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton/GoBackButton";

import servicesData from "../../servicesData.json";

const ServicePage = () => {
	const { slug } = useParams();
	const navigate = useNavigate();
	const element = servicesData.find((el) => el.slug === slug);
	const { title, images, altText, description } = element;

	const goBack = () => {
		navigate(-1);
	};

	return (
		<div className="service-page">
			<h1>{title}</h1>
			<div className="service-image-container">
				<img className="service-image" src={images[0].url} alt={altText} />
			</div>
			<div className="service-description-container">
				<p>{description}</p>
			</div>
			<GoBackButton goBack={goBack} />
		</div>
	);
};

export default ServicePage;

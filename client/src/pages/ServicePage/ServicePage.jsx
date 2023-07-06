import "./ServicePage.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { IoArrowBackSharp } from "react-icons";

import servicesData from "../../servicesData.json";
import GoBackButton from "../../components/GoBackButton/GoBackButton";

const ServicePage = () => {
	// eslint-disable-next-line no-unused-vars
	const { title } = useParams();
	const navigate = useNavigate();
	const element = servicesData.find((el) => el.slug === title);

	const goBack = () => {
		navigate(-1);
	};
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

			<GoBackButton goBack={goBack} />
		</div>
	);
};

export default ServicePage;

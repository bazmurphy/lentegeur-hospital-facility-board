import "./ContentPage.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton/GoBackButton";

import newsData from "../../data/newsData.json";
import eventsData from "../../data/eventsData.json";

const ContentPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { slug } = useParams();

	// Extract the page name from the pathname
	const pageName = location.pathname.substring(1).split("/")[0];

	let data = [];
	// checking which page the user is coming from
	if (pageName === "news") {
		data = newsData;
	}
	if (pageName === "events") {
		data = eventsData;
	}

	const element = data.find((item) => item.slug === slug);
	const { title, images, tag, date, description } = element;

	const goBack = () => {
		navigate(-1);
	};

	return (
		<div className="content-page">
			<h1>{title}</h1>
			<div className="content-image-container">
				<img
					className="content-image"
					src={images[0].url}
					alt={images[0].alternativeText}
				/>
			</div>
			<div className="content-page-container">
				<div className="category-date-container">
					<p>{`Category: ${tag}`}</p>
					<p>{`Date: ${date}`}</p>
				</div>
				<p>{description}</p>
			</div>
			<GoBackButton goBack={goBack} />
		</div>
	);
};

export default ContentPage;

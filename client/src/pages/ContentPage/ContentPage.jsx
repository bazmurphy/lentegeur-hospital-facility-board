import "./ContentPage.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import eventsData from "../../newsEventsData.json";
import newsData from "../../newsEventsData.json";
import GoBackButton from "../../components/GoBackButton/GoBackButton";

const ContentPage = () => {
	// eslint-disable-next-line no-unused-vars
	const location = useLocation();
	const navigate = useNavigate();
	const { title } = useParams();
	let data = [];

	// Extract the page name from the pathname
	const pageName = location.pathname.substring(1).split("/")[0];

	// checking from which page user is coming
	pageName === "news" ? (data = newsData) : (data = eventsData);

	const element = data.find((el) => el.slug === title);

	const goBack = () => {
		navigate(-1);
	};
	return (
		<div className="content-page">
			<h1>{element.title}</h1>
			<div className="content-image-container">
				<img
					className="content-image"
					src={element.images[0].url}
					alt={element.images[0].alternativeText}
				/>
			</div>
			<div className="content-page-container">
				<div className="category-date-container">
					<p>{`Category: ${element.tag}`}</p>
					<p>{`Date: ${element.date}`}</p>
				</div>
				<p>{element.description}</p>
			</div>
			<GoBackButton goBack={goBack} />
		</div>
	);
};

export default ContentPage;

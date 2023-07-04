import "./ContentPage.css";
import { useParams } from "react-router-dom";
import eventsData from "../../newsEventsData.json";
import newsData from "../../newsEventsData.json";

const ContentPage = () => {
	// eslint-disable-next-line no-unused-vars
	//i don't need anywhere this title
	const { title, id } = useParams();
	let data = [];

	// Extract the page name from the pathname
	const pageName = location.pathname.substring(1).split("/")[0];

	// checking from which page user is coming
	pageName === "news" ? (data = newsData) : (data = eventsData);

	const element = data.find((el) => el.id === Number(id));

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
		</div>
	);
};

export default ContentPage;

import "./NotFoundPage.css";
import Line from "../../components/Line/Line";

const NotFoundPage = () => {
	return (
		<div className="not-found-page">
			<h1>Page Not Found</h1>
			<Line />
			<p className="page-not-found-message">
				Sorry, that page was not found...
			</p>
		</div>
	);
};

export default NotFoundPage;

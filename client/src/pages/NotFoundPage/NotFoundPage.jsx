import "./NotFoundPage.css";
import { Link } from "react-router-dom";
import Line from "../../components/Line/Line";

const NotFoundPage = () => {
	return (
		<div className="not-found-page">
			<h1 className="not-found-page-title">Page Not Found</h1>
			<Line extraClass={"not-found-page-line"} />
			<div className="not-found-page-subcontainer">
				<p className="not-found-page-message">
					Sorry, that page was not found...
				</p>
				<Link to="/" className="not-found-page-link">
					Return to Home
				</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;

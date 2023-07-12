import "./ErrorPage.css";
import Line from "../../components/Line/Line";
// import { Link } from "react-router-dom";

const ErrorPage = ({ error }) => {
	console.log("ErrorPage error:", error);

	return (
		<div className="error-page">
			<h1 className="error-page-title">Error</h1>
			<Line className="error-page-line" />
			<p className="error-page-message">{error.message}</p>
			{/* <Link to="/" className="not-found-page-link">
				Return to Home
			</Link> */}
		</div>
	);
};

export default ErrorPage;

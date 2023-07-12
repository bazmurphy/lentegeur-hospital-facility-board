import "./LoadingPage.css";
import Line from "../../components/Line/Line";
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";

const LoadingPage = () => {
	return (
		<div className="loading-page">
			<h1 className="loading-page-title">Loading</h1>
			<Line className="loading-page-line" />
			<LoadingIcon size={200} />
		</div>
	);
};

export default LoadingPage;

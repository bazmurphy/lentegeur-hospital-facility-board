import "./LoadingPage.css";
import Line from "../../components/Line/Line";
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";

const LoadingPage = () => {
	return (
		<div className="loading-page">
			<h1 className="loading-page-title">Loading</h1>
			<Line extraClass={"loading-page-line"} />
			<div className="loading-page-subcontainer">
				<LoadingIcon />
			</div>
		</div>
	);
};

export default LoadingPage;

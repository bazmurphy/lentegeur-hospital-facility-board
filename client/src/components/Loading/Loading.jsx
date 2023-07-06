import "./Loading.css";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

const Loading = () => {
	return (
		<div className="loading-container">
			<h3 className="loading-title">Loading...</h3>
			<LoadingIcon size={200} />
		</div>
	);
};

export default Loading;

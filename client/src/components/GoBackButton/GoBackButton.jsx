import "./GoBackButton.css";

const GoBackButton = ({ goBack }) => {
	return (
		<button onClick={goBack} className="go-back-button">
			Back
		</button>
	);
};

export default GoBackButton;

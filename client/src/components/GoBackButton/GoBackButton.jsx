import "./GoBackButton.css";

const GoBackButton = ({ goBack }) => {
	return (
		<button onClick={goBack} className="go-back-button">
			&#8592; Back
		</button>
	);
};

export default GoBackButton;

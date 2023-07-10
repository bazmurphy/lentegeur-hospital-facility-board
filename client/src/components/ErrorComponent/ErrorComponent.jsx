// This Component CANNOT be named "Error" because that is a reserved keyword in JavaScript for an Error object
import "./ErrorComponent.css";

const ErrorComponent = ({ error }) => {
	// console.log("ErrorComponent error:", error);
	return (
		<div className="error-component-container">
			<h3 className="error-component-title">Error</h3>
			<p className="error-component-message">{error.message}</p>
		</div>
	);
};

export default ErrorComponent;

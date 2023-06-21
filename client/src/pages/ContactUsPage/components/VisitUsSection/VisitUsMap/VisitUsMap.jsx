import "./VisitUsMap.css";
import mapImage from "./map.png";

const VisitUsMap = () => {
	return (
		<div className="visit-us-map-container">
			{/* this should eventually be a Map API component */}
			<img
				src={mapImage}
				alt="aerial photograph of the Lentegeur Hospital area"
				className="visit-us-map"
			/>
		</div>
	);
};

export default VisitUsMap;

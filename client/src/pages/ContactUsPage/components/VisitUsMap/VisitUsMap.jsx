import "./VisitUsMap.css";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

const VisitUsMap = () => {
	return (
		<div className="visit-us-map-container">
			<Map
				provider={osm}
				defaultCenter={[-34.026816, 18.615861]}
				defaultZoom={12}
				attribution={false}
			>
				<Marker width={30} anchor={[-34.026816, 18.615861]} color={"red"} />
				<ZoomControl />
			</Map>
		</div>
	);
};

export default VisitUsMap;

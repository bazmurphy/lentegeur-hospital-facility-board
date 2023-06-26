import { Link } from "react-router-dom";
import "./GetInvolvedSection.css";
import SquareImage from "./SquareImage";
import volunteerimage from "../Assets/Volunteer.svg";
import fundraisingimage from "../Assets/Fundraising.svg";
import Line from "../../../../components/Line/Line";

const GetInvolved = () => {
	return (
		<div className="get-involved-container">
			<h2 className="get-involved-title">Get Involved</h2>
			<Line />
			<div className="get-involved-description-container">
				<p className="get-involved-description">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industrys standard...
				</p>
			</div>
			<div className="image-container">
				<Link to="/get-involved">
					<SquareImage src={fundraisingimage} alt="fundraising" />
				</Link>
				<Link to="/get-involved">
					<SquareImage src={volunteerimage} alt="volunteer" />
				</Link>
			</div>
		</div>
	);
};

export default GetInvolved;

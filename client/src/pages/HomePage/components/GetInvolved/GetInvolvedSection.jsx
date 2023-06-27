import { Link } from "react-router-dom";
import "./GetInvolvedSection.css";
import volunteerImage from "../Assets/Volunteer.svg";
import fundraisingImage from "../Assets/Fundraising.svg";
import Line from "../../../../components/Line/Line";

const GetInvolved = () => {
	return (
		<section className="get-involved-container">
			<h2>Get Involved</h2>
			<Line />
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industrys standard...
			</p>
			<div className="icon-container">
				<Link to="/get-involved">
					<div className="get-involved-image-container">
						<img
							src={fundraisingImage}
							alt="fundraising"
							className="square-image"
						/>
					</div>
				</Link>
				<Link to="/get-involved">
					<div className="get-involved-image-container">
						<img
							src={volunteerImage}
							alt="volunteer"
							className="square-image"
						/>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default GetInvolved;

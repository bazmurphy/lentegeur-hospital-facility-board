import "./GetInvolvedPage.css";
import Donate from "./components/Donate/Donate";
import Volunteer from "./components/Volunteer/Volunteer";

const GetInvolvedPage = () => {
	return (
		<div className="get-involved-page">
			<section className="get-involved-section">
				<h1 className="get-involved-heading">Get Involved</h1>
				<div className="line-divider"></div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
					ratione consequatur inventore aliquam atque iste aperiam itaque
					voluptatum at officiis ipsam facilis, nam eaque quisquam quia et
					sapiente quae minima!
				</p>
			</section>
			<Donate />
			<Volunteer />
		</div>
	);
};

export default GetInvolvedPage;

import "./GetInvolvedPage.css";
import GetInvolvedSection from "./components/GetInvolvedSection/GetInvolvedSection";
import DonateSection from "./components/DonateSection/DonateSection";
import VolunteerSection from "./components/VolunteerSection/VolunteerSection";

const GetInvolvedPage = () => {
	return (
		<div className="get-involved-page">
			<GetInvolvedSection />
			<DonateSection />
			<VolunteerSection />
		</div>
	);
};

export default GetInvolvedPage;

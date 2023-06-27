import "./AboutPage.css";
import HistorySection from "./components/HistorySection/HistorySection";
import GovernanceSection from "./components/GovernanceSection/GovernanceSection";
import NetworkingSection from "./components/NetworkingSection/NetworkingSection";

const AboutPage = () => {
	return (
		<div className="about-page">
			<h1>About</h1>
			<HistorySection />
			<GovernanceSection />
			<NetworkingSection />
		</div>
	);
};

export default AboutPage;

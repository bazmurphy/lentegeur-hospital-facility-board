import "./AboutPage.css";
import GovernanceSection from "./components/GovernanceSection";
import HistorySection from "./components/HistorySection";
import NetworkingSection from "./components/NetworkingSections";

const AboutPage = () => {
	return (
		<div>
			<HistorySection />
			<GovernanceSection />
			<NetworkingSection />
		</div>
	);
};

export default AboutPage;

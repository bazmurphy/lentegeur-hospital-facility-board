import "./HomePage.css";
import HomeHero from "./components/HomeHero/HomeHero";
import HomeEventsSection from "./components/HomeEventsSection/HomeEventsSection";
import HomeGetInvolvedSection from "./components/HomeGetInvolvedSection/HomeGetInvolvedSection";

const HomePage = () => {
	return (
		<div className="home-page">
			<HomeHero />
			<HomeEventsSection />
			<HomeGetInvolvedSection />
		</div>
	);
};

export default HomePage;

import "./HomePage.css";
import HomeHero from "./components/HomeHero/HomeHero";
import HomeEventsSection from "./components/HomeEventsSection/HomeEventsSection";
import HomeGetInvolvedSection from "./components/HomeGetInvolvedSection/HomeGetInvolvedSection";
import HomeNewsSection from "./components/HomeNewsSection/HomeNewsSection";

const HomePage = () => {
	return (
		<div className="home-page">
			<HomeHero />
			<HomeEventsSection />
			<HomeNewsSection />
			<HomeGetInvolvedSection />
		</div>
	);
};

export default HomePage;

import "./HomePage.css";
import HomeHero from "./components/HomeHero/HomeHero";
import HomeServicesSection from "./components/HomeServicesSection/HomeServicesSection";
import HomeEventsSection from "./components/HomeEventsSection/HomeEventsSection";
import HomeNewsSection from "./components/HomeNewsSection/HomeNewsSection";
import HomeGetInvolvedSection from "./components/HomeGetInvolvedSection/HomeGetInvolvedSection";

const HomePage = () => {
	return (
		<div className="home-page">
			<HomeHero />
			<HomeServicesSection />
			<HomeEventsSection />
			<HomeNewsSection />
			<HomeGetInvolvedSection />
		</div>
	);
};

export default HomePage;

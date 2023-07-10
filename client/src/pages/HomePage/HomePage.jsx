import "./HomePage.css";
import HomeHero from "./components/HomeHero/HomeHero";
import HomeServicesSection from "./components/HomeServicesSection/HomeServicesSection";
import HomeGetInvolvedSection from "./components/HomeGetInvolvedSection/HomeGetInvolvedSection";

const HomePage = () => {
	return (
		<div className="home-page">
			<HomeHero />
			<HomeServicesSection />
			<HomeGetInvolvedSection />
		</div>
	);
};

export default HomePage;

import "./HomePage.css";
import HomeHero from "./components/HomeHero/HomeHero";
import HomeEvents from "./components/HomeEvents/HomeEvents";
import HomeGetInvolvedSection from "./components/HomeGetInvolvedSection/HomeGetInvolvedSection";

const HomePage = () => {
	return (
		<div className="home-page">
			<HomeHero />
			<HomeEvents path="events" apiRoute="events" />
			<HomeGetInvolvedSection />
		</div>
	);
};

export default HomePage;

import "./HomePage.css";
import HomeHero from "./components/HomeHero/HomeHero";
import HomeCardList from "./components/HomeCardList/HomeCardList";
import HomeGetInvolvedSection from "./components/HomeGetInvolvedSection/HomeGetInvolvedSection";

const HomePage = () => {
	return (
		<div className="home-page">
			<HomeHero />
			<HomeCardList title="Latest News" />
			<HomeCardList title="Latest Events" />
			<HomeGetInvolvedSection />
		</div>
	);
};

export default HomePage;

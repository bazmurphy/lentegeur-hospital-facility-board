import "./HomePage.css";
import HomeHero from "./components/HomeHero/HomeHero";
import HomeCardList from "./components/HomeCardList/HomeCardList";
import HomeGetInvolvedSection from "./components/HomeGetInvolvedSection/HomeGetInvolvedSection";

const HomePage = () => {
	return (
		<div className="home-page">
			<HomeHero />
			<HomeCardList title="Latest News" subroute="news" />
			<HomeCardList title="Latest Events" subroute="events" />
			<HomeGetInvolvedSection />
		</div>
	);
};

export default HomePage;

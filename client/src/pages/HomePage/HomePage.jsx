import "./HomePage.css";
import Carousel from "./components/Carousel/Carousel";
import HomeCards from "./components/HomeCards/HomeCards";
import GetInvolved from "./components/GetInvolved/GetInvolvedSection";

const HomePage = () => {
	return (
		<div className="home-container">
			<Carousel />
			<HomeCards title="Latest News" />
			<HomeCards title="Latest Events" />
			<GetInvolved />
		</div>
	);
};

export default HomePage;

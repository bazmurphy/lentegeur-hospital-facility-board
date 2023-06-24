import "./HomePage.css";
import Carousel from "./components/Carousel/Carousel";
import HomeCards from "./components/HomeCards/HomeCards";
import GetInvolved from "./components/GetInvolved/GetInvolvedSection";

const HomePage = () => {
	return (
		<div className="home-container">
			<section>
				<Carousel />
			</section>
			<HomeCards title="Latest News" />
			<HomeCards title="Latest Events" />
			<section>
				<div className="icon-container">
					<GetInvolved />
				</div>
			</section>
		</div>
	);
};

export default HomePage;

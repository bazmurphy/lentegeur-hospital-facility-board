import "./HomePage.css";
import Carousel from "./components/Carousel/Carousel";
import NewsSection from "./components/Latest-News/NewsSection/NewsSection";
import EventsSection from "./components/Latest-Events/EventsSection";
import GetInvolved from "./components/GetInvolved/GetInvolvedSection";

const HomePage = () => {
	return (
		<div className="container">
			<section>
				<Carousel />
			</section>
			<section>
				<h2>Latest News</h2>
				<div className="card-container">
					<NewsSection />
				</div>
			</section>
			<section>
				<h2>Latest Events</h2>
				<div className="card-container">
					<EventsSection />
				</div>
			</section>
			<section>
				<div className="icon-container">
					<GetInvolved />
				</div>
			</section>
		</div>
	);
};

export default HomePage;

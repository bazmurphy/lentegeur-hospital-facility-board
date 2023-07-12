import "./HomeEventsSection.css";
import Line from "../../../../components/Line/Line";
import HomeEventCardLeft from "./components/HomeEventCardLeft/HomeEventCardLeft";
import HomeEventCardRight from "./components/HomeEventCardRight/HomeEventCardRight";

const HomeEventsSection = ({ eventsData }) => {
	return (
		<section className="home-events-section">
			<h1 className="home-events-title">Upcoming Events</h1>
			<Line extraClass={"home-events-line"} />
			<div className="home-events-container">
				{eventsData.map((homeEvent, index) => {
					const { slug, title, images, startDate, summary } = homeEvent;
					const isEventsCardRight = index % 4 === 2 || index % 4 === 3;
					if (isEventsCardRight) {
						return (
							<HomeEventCardRight
								key={slug}
								title={title}
								slug={slug}
								image={images[0].url}
								alternativeText={images[0].alternativeText}
								date={startDate}
								summary={summary}
							/>
						);
					} else {
						return (
							<HomeEventCardLeft
								key={slug}
								title={title}
								slug={slug}
								image={images[0].url}
								alternativeText={images[0].alternativeText}
								date={startDate}
								summary={summary}
							/>
						);
					}
				})}
			</div>
		</section>
	);
};

export default HomeEventsSection;

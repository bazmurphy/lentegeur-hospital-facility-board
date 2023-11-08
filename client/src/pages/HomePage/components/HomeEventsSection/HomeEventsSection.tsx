import "./HomeEventsSection.css";
import { Link } from "react-router-dom";
import Line from "../../../../components/Line/Line";
import HomeEventCardLeft from "./components/HomeEventCardLeft/HomeEventCardLeft";
import HomeEventCardRight from "./components/HomeEventCardRight/HomeEventCardRight";
import { Event } from "../../../EventsPage/EventsPage";

export interface HomeEventsSectionProps {
  eventsData: Event[];
}

export interface HomeEventCardProps {
  title: Event["title"];
  slug: Event["slug"];
  image: Event["images"][number]["url"];
  alternativeText: Event["images"][number]["alternativeText"];
  summary: Event["summary"];
  date: Event["startDate"];
}

const HomeEventsSection = ({ eventsData }: HomeEventsSectionProps) => {
  return (
    <section className="home-events-section">
      <Link to="/events" className="home-events-title-link">
        <h2 className="home-events-title">Upcoming Events</h2>
      </Link>
      <Line extraClass={"home-events-line"} />
      <div className="home-events-container">
        {eventsData.slice(0, 2).map((homeEvent: Event, index: number) => {
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

import NewsEventContent from "../Latest-News/NewsEventContent";
// import "./NewsContent.css";
import "../Latest-News/NewsEventContent";
import Line from "../../../../components/Line/Line";

const eventsData = [
  {
    title: "Event 1",
    image: "image1.jpg",
    date: "June 25, 2023",
    location: "Venue A",
  },
  {
    title: "Event 2",
    image: "image2.jpg",
    date: "July 1, 2023",
    location: "Venue B",
  },
  {
    title: "Event 3",
    image: "image3.jpg",
    date: "July 8, 2023",
    location: "Venue C",
  },
];

const EventsSection = () => {
  return (
    <section>
      <h2>Latest Events</h2>
      <Line />
      <div className="cards-list-container">
        {eventsData.map((item, index) => (
          <NewsEventContent
            key={index}
            title={item.title}
            image={item.image}
            date={item.date}
            location={item.location}
          />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;

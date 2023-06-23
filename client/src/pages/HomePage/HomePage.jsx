import "./HomePage.css";
import HomeCarousel from "./components/Carousel/Carousel";
import NewsSection from "./components/Latest-News/NewsSection/NewsSection";
import EventsSection from "./components/Latest-Events/EventsSection";
import GetInvolved from "./components/GetInvolved/GetInvolvedSection";

const HomePage = () => {
    return (
    <div className="container">
      <div className="hero">
        <div className="image-carousel">
          <HomeCarousel />
        </div>
      </div>
      <div className="section">
        <h2>Latest News</h2>
        <div className="card-container">
          <NewsSection />
        </div>
      </div>
      <div className="section">
        <h2>Latest Events</h2>
        <div className="card-container">
          <EventsSection />
        </div>
      </div>
      <div className="section">
        <div className="icon-container">
          <GetInvolved />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
import "./HomePage.css";
import HomeCarousel from "./components/Carousel/Carousel";
import NewsSection from "./components/Latest-News/NewsSection";

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
          {/* Add your latest events cards here */}
        </div>
      </div>
      <div className="section">
        <h2>Get Involved</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum lectus eget consectetur laoreet.</p>
        <div className="icon-container">
          {/* Add your icons here */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
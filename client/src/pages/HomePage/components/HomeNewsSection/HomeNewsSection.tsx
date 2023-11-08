import "./HomeNewsSection.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Line from "../../../../components/Line/Line";
import HomeNewsCard from "./components/HomeNewsCard/HomeNewsCard";
import { NewsArticle } from "../../../NewsPage/NewsPage";

export interface HomeNewsSectionProps {
  newsArticlesData: NewsArticle[];
}

const HomeNewsSection = ({ newsArticlesData }: HomeNewsSectionProps) => {
  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="home-news-section">
      <Link to="/news" className="home-news-title-link">
        <h2 className="home-news-title">Latest News</h2>
      </Link>
      <Line extraClass={"home-news-line"} />
      <Slider {...sliderSettings}>
        {newsArticlesData.map((newsArticle) => {
          const { slug, title, images, date, category, summary } = newsArticle;
          return (
            <HomeNewsCard
              key={slug}
              title={title}
              slug={slug}
              image={images[0].url}
              alternativeText={images[0].alternativeText}
              date={date}
              category={category}
              summary={summary}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default HomeNewsSection;

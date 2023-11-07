import "./HomeNewsCard.css";
import { Link } from "react-router-dom";
import { NewsArticle } from "../../../../../NewsPage/NewsPage";

export interface HomeNewsCardProps {
  slug: NewsArticle["slug"];
  image: NewsArticle["images"][number]["url"];
  alternativeText: NewsArticle["images"][number]["alternativeText"];
  title: NewsArticle["title"];
  date: NewsArticle["date"];
  category: NewsArticle["category"];
  summary: NewsArticle["summary"];
}

function HomeNewsCard({
  slug,
  image,
  alternativeText,
  title,
  date,
  category,
  summary,
}: HomeNewsCardProps) {
  return (
    <div className="home-news-card-container">
      <Link to={`/news/${slug}`}>
        <div className="home-news-card-details">
          <h2 className="home-news-card-title">{title}</h2>
          <div className="home-news-card-details-subcontainer">
            <span className="home-news-card-date">{date}</span>
            <span className="home-news-card-category">{category}</span>
          </div>
          <p className="home-news-card-summary">{summary}</p>
        </div>
        <div className="home-news-card-image-container">
          <div className="home-news-card-overlay"></div>
          <img
            src={image}
            alt={alternativeText}
            className="home-news-card-image"
          />
        </div>
      </Link>
    </div>
  );
}

export default HomeNewsCard;

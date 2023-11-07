import "./Card.css";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { NewsArticle } from "../../pages/NewsPage/NewsPage";
import { Event } from "../../pages/EventsPage/EventsPage";

export interface CardProps {
  title: NewsArticle["title"] | Event["title"];
  slug: NewsArticle["slug"] | Event["slug"];
  image: NewsArticle["images"][number]["url"] | Event["images"][number]["url"];
  alternativeText:
    | NewsArticle["images"][number]["alternativeText"]
    | Event["images"][number]["alternativeText"];
  startDate?: Event["startDate"];
  date?: NewsArticle["date"];
  category: NewsArticle["category"] | Event["category"];
  tags: NewsArticle["tags"] | Event["tags"];
  summary: NewsArticle["summary"] | Event["summary"];
  pageName: string;
  passedClass: string;
}

function Card({
  slug,
  title,
  image,
  alternativeText,
  category,
  tags,
  date,
  startDate,
  summary,
  pageName,
  passedClass,
}: CardProps) {
  return (
    <Link
      className="card-link"
      to={{
        pathname: `/${pageName}/${slug}`,
      }}
    >
      <section
        className={`card-container ${
          passedClass === "home"
            ? "card-container-home"
            : "card-container-content"
        }`}
      >
        <div
          className={`card-image-container ${
            passedClass === "home"
              ? "card-image-container-home"
              : "card-image-container-content"
          }`}
        >
          <img className="card-image" src={image} alt={alternativeText} />
          {category && <span className="card-category">{category}</span>}
        </div>
        <div className="card-subcontainer">
          <h3 className="card-title">{title.toUpperCase()}</h3>
          <div className="flex-space-between">
            {date && <h4 className="card-date">{date}</h4>}
            {tags && (
              <p className="card-tags-container">
                {tags.map((tag) => (
                  <span key={tag} className="card-tag">
                    {tag}
                  </span>
                ))}
              </p>
            )}
            {startDate && <h4 className="card-start-date"> {startDate}</h4>}
          </div>
          <p className="card-summary">{summary}</p>
          <button className="card-button">
            <MdArrowForwardIos className="card-button-icon" />
          </button>
        </div>
      </section>
    </Link>
  );
}

export default Card;

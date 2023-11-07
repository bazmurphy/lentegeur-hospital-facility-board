import "./HomeServiceCard.css";
import { Link } from "react-router-dom";
import { Service } from "../../../../../ServicesPage/ServicesPage";

export interface HomeServiceCardProps {
  slug: Service["slug"];
  images: Service["images"];
  title: Service["title"];
  summary: Service["summary"];
}

const HomeServiceCard = ({
  slug,
  images,
  title,
  summary,
}: HomeServiceCardProps) => {
  return (
    <Link to={`/services/${slug}`} className="home-service-card">
      <div className="home-service-card-image-container">
        <img
          src={images[0].url}
          alt={images[0].alternativeText}
          className="home-service-card-image"
        />
      </div>
      <h3 className="home-service-card-title">{title}</h3>
      <p className="home-service-card-summary">{summary}</p>
    </Link>
  );
};

export default HomeServiceCard;

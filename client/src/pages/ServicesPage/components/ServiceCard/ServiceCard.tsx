import "./ServiceCard.css";
import { Link } from "react-router-dom";
import { Service, ServiceImage } from "../../ServicesPage";

export interface ServiceCardProps {
  title: Service["title"];
  slug: Service["slug"];
  image: ServiceImage["url"];
  alternativeText: ServiceImage["alternativeText"];
  // category?: Service["category"];
  // tags?: Service["tags"];
  // summary?: Service["summary"];
}

const ServiceCard = ({
  title,
  slug,
  image,
  alternativeText,
}: // category,
// tags,
// summary,
ServiceCardProps) => {
  return (
    <Link
      className="service-card-link"
      to={{
        pathname: `/services/${slug}`,
      }}
    >
      <section className="service-card-container">
        <h2 className="service-card-title">{title}</h2>
        <p className="service-card-learn">LEARN MORE</p>
        <div className="service-card-image-container">
          <img
            className="service-card-image"
            src={image}
            alt={alternativeText}
          />
          <div className="overlay"></div>
          {/* <span>{category}</span> */}
          {/* <span>{tags}</span> */}
        </div>
      </section>
    </Link>
  );
};

export default ServiceCard;

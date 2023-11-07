import "./GalleryCard.css";
import { Link } from "react-router-dom";
import { GalleryAlbum, GalleryAlbumImage } from "../../GalleryPage";

export interface GalleryCardProps {
  slug: GalleryAlbum["slug"];
  title: GalleryAlbum["title"];
  images: GalleryAlbumImage[];
}

const GalleryCard = ({ slug, title, images }: GalleryCardProps) => {
  return (
    <Link to={`/gallery/${slug}`} className="gallery-card-container">
      <div className="gallery-card-image-container">
        <h2 className="gallery-card-title">{title}</h2>
        <div className="gallery-card-overlay"></div>
        <img
          src={images[0].url}
          alt={images[0].alternativeText}
          className="gallery-card-image"
        />
      </div>
    </Link>
  );
};

export default GalleryCard;

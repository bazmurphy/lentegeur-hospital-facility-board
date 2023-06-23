import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image from "../Assets/grey_image.svg";

const HomeCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src={image} alt="grey wireframe" />
        <p className="legend">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, quos.</p>
      </div>
      <div>
        <img src="image2.jpg" alt="hospital" />
        <p className="legend">Image 2</p>
      </div>
      <div>
        <img src="image3.jpg" alt="doctor" />
        <p className="legend">Image 3</p>
      </div>
    </Carousel>
  );
};

export default HomeCarousel;

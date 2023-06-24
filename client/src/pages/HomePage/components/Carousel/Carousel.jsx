// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
	const settings = {
		dots: true, // Display dots at the bottom indicating image count
		arrows: true, // Display navigation arrows
		autoplay: true, // Automatically transition to the next image
		autoplaySpeed: 3000, // Delay between image transitions (in milliseconds)
	};

	return (
		<Slider {...settings}>
			<div className="slide-container">
				<h2 className="slide-title">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</h2>
				<div className="slide-image-container">
					<img
						src="https://infoguidenigeria.com/wp-content/uploads/2020/01/african-american-black-doctor-man-626x405.jpg"
						alt="one"
					/>
				</div>
			</div>
			<div className="slide-container">
				<div className="slide-image-container">
					<img
						src="https://t4.ftcdn.net/jpg/03/17/85/49/360_F_317854905_2idSdvi2ds3yejmk8mhvxYr1OpdVTrSM.jpg"
						alt="two"
					/>
				</div>
			</div>
			<div className="slide-container">
				<div className="slide-image-container">
					<img
						src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg"
						alt="three"
					/>
				</div>
			</div>
		</Slider>
	);
};

export default Carousel;

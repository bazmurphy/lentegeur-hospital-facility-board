import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeHero.css";
import SliderImage01 from "../../assets/slider01.jpg";
import SliderImage02 from "../../assets/slider02.jpg";
import SliderImage03 from "../../assets/slider03.jpg";

const HomeHero = () => {
	const settings = {
		dots: true, // Display dots at the bottom indicating image count
		arrows: true, // Display navigation arrows
		autoplay: false, // Automatically transition to the next image
		autoplaySpeed: 3000, // Delay between image transitions (in milliseconds)
	};

	return (
		<section className="home-hero-section">
			<Slider {...settings}>
				<div className="slide-container">
					<h2 className="slide-title">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</h2>
					<div className="slide-image-container">
						<img src={SliderImage01} alt="one" />
					</div>
				</div>
				<div className="slide-container">
					<div className="slide-image-container">
						<img src={SliderImage02} alt="two" />
					</div>
				</div>
				<div className="slide-container">
					<div className="slide-image-container">
						<img src={SliderImage03} alt="three" />
					</div>
				</div>
			</Slider>
		</section>
	);
};

export default HomeHero;

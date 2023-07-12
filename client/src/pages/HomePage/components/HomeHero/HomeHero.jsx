import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeHero.css";

const HomeHero = ({ homePageData }) => {
	const {
		heroImageOne,
		heroTitleOne,
		heroImageTwo,
		heroTitleTwo,
		heroImageThree,
		heroTitleThree,
	} = homePageData;

	const settings = {
		dots: true, // Display dots at the bottom indicating image count
		arrows: true, // Display navigation arrows
		autoplay: true, // Automatically transition to the next image
		autoplaySpeed: 3000, // Delay between image transitions (in milliseconds)
	};

	return (
		<section className="home-hero-section">
			<Slider {...settings}>
				{heroImageOne && (
					<div className="slide-container">
						{heroTitleOne && <h2 className="slide-title">{heroTitleOne}</h2>}
						<div className="slide-image-container">
							<img src={heroImageOne.url} alt={heroImageOne.alternativeText} />
						</div>
					</div>
				)}
				{heroImageTwo && (
					<div className="slide-container">
						{heroTitleTwo && <h2 className="slide-title">{heroTitleTwo}</h2>}
						<div className="slide-image-container">
							<img src={heroImageTwo.url} alt={heroImageTwo.alternativeText} />
						</div>
					</div>
				)}
				{heroImageThree && (
					<div className="slide-container">
						{heroTitleThree && (
							<h2 className="slide-title">{heroTitleThree}</h2>
						)}
						<div className="slide-image-container">
							<img
								src={heroImageThree.url}
								alt={heroImageThree.alternativeText}
							/>
						</div>
					</div>
				)}
			</Slider>
		</section>
	);
};

export default HomeHero;

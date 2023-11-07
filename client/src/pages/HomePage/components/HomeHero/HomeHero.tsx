import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeHero.css"; // this has to be after the css imports above to override the defaults
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

export interface HomeHeroImage {
  url: string;
  alternativeText: string;
}

export interface HomePageData {
  heroImageOne: HomeHeroImage;
  heroTitleOne: string;
  heroImageTwo: HomeHeroImage;
  heroTitleTwo: string;
  heroImageThree: HomeHeroImage;
  heroTitleThree: string;
}

export interface HomeHeroProps {
  homePageData: HomePageData;
}

const HomeHero = ({ homePageData }: HomeHeroProps) => {
  const {
    heroImageOne,
    heroTitleOne,
    heroImageTwo,
    heroTitleTwo,
    heroImageThree,
    heroTitleThree,
  } = homePageData;

  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <MdArrowForwardIos />,
    prevArrow: <MdArrowBackIos />,
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

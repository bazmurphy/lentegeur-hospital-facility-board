import "./HomeNewsSection.css";
import { Link } from "react-router-dom";
import Line from "../../../../components/Line/Line";
import Slider from "react-slick";
import NewsCard from "./components/HomeNewsCard/HomeNewsCard";

const HomeNewsSection = ({ newsArticlesData }) => {
	const sliderSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 3000,
				},
			},
			{
				breakpoint: 600,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 3000,
				},
			},
		],
	};
	return (
		<section className="home-news-section">
			<Link to="/news" className="home-news-title-link">
				<h2 className="home-news-title">Latest News</h2>
			</Link>
			<Line extraClass={"home-news-line"} />
			<Slider {...sliderSettings}>
				{newsArticlesData.map((homeNews) => {
					const { slug, title, images, date, category, summary } = homeNews;
					return (
						<NewsCard
							key={slug}
							title={title}
							slug={slug}
							image={images[0].url}
							alternativeText={images[0].alternativeText}
							date={date}
							category={category}
							summary={summary}
						/>
					);
				})}
			</Slider>
		</section>
	);
};

export default HomeNewsSection;

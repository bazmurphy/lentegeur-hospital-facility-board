import "./HomeNewsSection.css";
import { useQuery } from "@tanstack/react-query";
import Line from "../../../../components/Line/Line";
import NewsCard from "./components/NewsCard/NewsCard";
import Loading from "../../../../components/Loading/Loading";
import ErrorComponent from "../../../../components/ErrorComponent/ErrorComponent";
import Slider from "react-slick";

function HomeNewsSection() {
	const fetchEvents = async () => {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/news-articles?populate=images`
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	};

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ["news-articles"],
		queryFn: fetchEvents,
	});
	const newsArticlesData = data?.data;

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
			<h1 className="home-news-title">Latest News</h1>
			<Line />
			{isLoading && <Loading />}
			{isError && <ErrorComponent error={error} />}
			<Slider {...sliderSettings}>
				{!!newsArticlesData &&
					newsArticlesData.map((homeNews) => {
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
}

export default HomeNewsSection;

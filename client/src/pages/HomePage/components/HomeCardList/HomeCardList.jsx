import "./HomeCardList.css";
import { useQuery } from "@tanstack/react-query";
import Line from "../../../../components/Line/Line";
import Loading from "../../../../components/Loading/Loading";
import ErrorComponent from "../../../../components/ErrorComponent/ErrorComponent";
import Card from "../../../../components/Card/Card";
import Slider from "react-slick";

const HomeCardList = ({ title, path, apiRoute }) => {
	const fetchHomeCards = async () => {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/${apiRoute}?populate=images`
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	};

	const { isLoading, isError, data, error } = useQuery({
		queryKey: [`${apiRoute}`],
		queryFn: fetchHomeCards,
	});

	const sliderSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					arrows: true,
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					arrows: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<section className="home-card-list-section">
			<h2>{title}</h2>
			<Line />
			{isLoading && <Loading />}
			{isError && <ErrorComponent errorMessage={error} />}
			{data && (
				<Slider {...sliderSettings}>
					{data?.data.map((item) => {
						const { id, title, slug, images, summary, tag, date } = item;
						return (
							<Card
								key={id}
								id={id}
								title={title}
								image={images[0].url}
								alternativeText={images[0].alternativeText}
								summary={summary}
								tag={tag}
								date={date}
								slug={slug}
								pageName={path}
								passedClass="home"
							/>
						);
					})}
				</Slider>
			)}
		</section>
	);
};

export default HomeCardList;

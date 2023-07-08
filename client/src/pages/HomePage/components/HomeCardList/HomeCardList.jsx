import "./HomeCardList.css";
import Line from "../../../../components/Line/Line";
import Card from "../../../../components/Card/Card";
import Slider from "react-slick";

import newsData from "../../../../data/newsData.json";
import eventsData from "../../../../data/eventsData.json";

const HomeCardList = ({ title, subroute }) => {
	const settings = {
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

	let data = [];
	if (subroute === "news") {
		data = newsData;
	}
	if (subroute === "events") {
		data = eventsData;
	}

	const renderSlides = data.map((item) => {
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
				pageName={subroute}
				passedClass="home"
			/>
		);
	});

	return (
		<section className="home-card-list-section">
			<h2>{title}</h2>
			<Line />
			<Slider {...settings}>{renderSlides}</Slider>
		</section>
	);
};

export default HomeCardList;

import "./HomeCardList.css";
import Line from "../../../../components/Line/Line";
import Card from "../../../../components/Card/Card";
import Slider from "react-slick";

const mockData = [
	{
		id: 1,
		title: "Emergency Services",
		images: [
			{
				url: "https://clevelandcliniclondon.uk/-/scassets/images/org/locations/london/hospital-services/hospital-services-feature.jpg",
				alternativeText: "some alternative text",
			},
		],
		summary:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum semper magna, vitae dapibus felis volutpat. Duis feugiat, mauris a ultricies lobortis, ligula risus viverra massa, nec pellentesque tellus ligula non mi.",
		tag: "Emergency",
		date: "1/1/2023",
	},
	{
		id: 2,
		title: "Surgical Procedures",
		images: [
			{
				url: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/09/Female_Doctor_Daughter_Mother_1296x728-header-1296x729.jpg?w=1155&h=2268",
				alternativeText: "some alternative text",
			},
		],
		summary:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum semper magna, vitae dapibus felis volutpat. Duis feugiat, mauris a ultricies lobortis, ligula risus viverra massa, nec pellentesque tellus ligula non mi.",
		tag: "Surgical",
		date: "2/1/2023",
	},
	{
		id: 3,
		title: "Diagnostic Imaging",
		images: [
			{
				url: "https://s3-prod.modernhealthcare.com/s3fs-public/SPONSORED_170619878_AR_-1_RXMUPRMWBUGI.jpg",
				alternativeText: "some alternative text",
			},
		],
		summary:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum semper magna, vitae dapibus felis volutpat. Duis feugiat, mauris a ultricies lobortis, ligula risus viverra massa, nec pellentesque tellus ligula non mi.",
		tag: "Diagnostic",
		date: "3/1/2023",
	},
];

// id, image, alternativeText, date, tag, title, summary })
const HomeCardList = ({ title }) => {
	const settings = {
		centerMode: true,
		centerPadding: "10px",
		slidesToShow: 3,
		speed: 500,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 1125,
				settings: {
					arrows: true,
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 760,
				settings: {
					arrows: true,
					slidesToShow: 1,
				},
			},
		],
	};

	const renderSlides = mockData.map((item) => (
		<Card
			key={item.id}
			id={item.id}
			title={item.title}
			image={item.images[0].url}
			alternativeText={item.images[0].alternativeText}
			summary={item.summary}
			tag={item.tag}
			date={item.date}
		/>
	));

	return (
		<section className="home-card-list-section">
			<h2>{title}</h2>
			<Line />
			<div className="home-card-list-container">
				<Slider {...settings}>{renderSlides}</Slider>
				{/* {mockData.map((item, index) => {
					return (
						<HomeCard
							key={index}
							title={item.title}
							image={item.image}
							content={item.description}
						/>
					);
				})} */}
			</div>
		</section>
	);
};

export default HomeCardList;

import "./HomeCardList.css";
import HomeCard from "../HomeCard/HomeCard";
import Line from "../../../../components/Line/Line";

const mockData = [
	{
		title: "Emergency Services",
		image:
			"https://clevelandcliniclondon.uk/-/scassets/images/org/locations/london/hospital-services/hospital-services-feature.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		title: "Surgical Procedures",
		image:
			"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/09/Female_Doctor_Daughter_Mother_1296x728-header-1296x729.jpg?w=1155&h=2268",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		title: "Diagnostic Imaging",
		image:
			"https://s3-prod.modernhealthcare.com/s3fs-public/SPONSORED_170619878_AR_-1_RXMUPRMWBUGI.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
];

const HomeCardList = ({ title }) => {
	return (
		<section className="home-card-list-section">
			<h2>{title}</h2>
			<Line />
			<div className="home-card-list-container">
				{mockData.map((item, index) => {
					return (
						<HomeCard
							key={index}
							title={item.title}
							image={item.image}
							content={item.description}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default HomeCardList;

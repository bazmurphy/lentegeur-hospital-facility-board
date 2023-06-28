import "./NewsPage.css";
import ContentBox from "../../components/ContentBox/ContentBox";
import Line from "../../components/Line/Line";
import { useState } from "react";

const newsData = [
	{
		id: 1,
		title: "Emergency Services",
		image:
			"https://clevelandcliniclondon.uk/-/scassets/images/org/locations/london/hospital-services/hospital-services-feature.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		altText: "whatever",
	},
	{
		id: 2,
		title: "Surgical Procedures",
		image:
			"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/09/Female_Doctor_Daughter_Mother_1296x728-header-1296x729.jpg?w=1155&h=2268",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		altText: "whatever",
	},
	{
		id: 3,
		title: "Diagnostic Imaging",
		image:
			"https://s3-prod.modernhealthcare.com/s3fs-public/SPONSORED_170619878_AR_-1_RXMUPRMWBUGI.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		altText: "whatever",
	},
];

const NewsPage = () => {
	const [searchValue, setSearchValue] = useState("");

	const handleSearch = (event) => {
		setSearchValue(event.target.value);
	};

	const filteredNews = newsData.filter((item) => {
		const titleMatches = item.title
			.toLowerCase()
			.includes(searchValue.toLowerCase());
		const descriptionMatches = item.description
			.toLowerCase()
			.includes(searchValue.toLowerCase());
		return titleMatches || descriptionMatches;
	});
	return (
		<div className="news-page">
			<h1>News</h1>
			<Line />
			<form className="search-form">
				<input
					type="text"
					placeholder="Search"
					value={searchValue}
					onChange={handleSearch}
				/>
				<p>{filteredNews.length} news found</p>
			</form>
			<div className="cards-list-container">
				{filteredNews.map((item) => {
					return (
						<ContentBox
							key={item.id}
							title={item.title}
							image={item.image}
							altText={item.altText}
							content={item.description}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default NewsPage;

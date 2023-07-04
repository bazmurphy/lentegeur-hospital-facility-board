import "./NewsPage.css";
import Card from "../../components/Card/Card";
import Line from "../../components/Line/Line";
import { useState } from "react";

const newsData = [
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

const NewsPage = () => {
	const [searchValue, setSearchValue] = useState("");

	const handleSearch = (event) => {
		setSearchValue(event.target.value);
	};

	const filteredNews = newsData.filter((item) => {
		const titleMatches = item.title
			.toLowerCase()
			.includes(searchValue.toLowerCase());
		const summaryMatches = item.summary
			.toLowerCase()
			.includes(searchValue.toLowerCase());
		return titleMatches || summaryMatches;
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
				{filteredNews.map((newsItem) => {
					const { id, title, date, tag, summary } = newsItem;
					const { url, alternativeText } = newsItem.images[0];
					return (
						<Card
							key={id}
							id={id}
							title={title}
							image={url}
							alternativeText={alternativeText}
							summary={summary}
							tag={tag}
							date={date}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default NewsPage;

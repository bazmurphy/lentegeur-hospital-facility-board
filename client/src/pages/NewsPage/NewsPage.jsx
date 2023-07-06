import "./NewsPage.css";
import Card from "../../components/Card/Card";
import Line from "../../components/Line/Line";
import { useState } from "react";
import newsData from "../../newsEventsData.json";

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
					const { id, title, date, tag, summary, slug } = newsItem;
					const { url, alternativeText } = newsItem.images[0];
					return (
						<Card
							key={id}
							title={title}
							image={url}
							alternativeText={alternativeText}
							summary={summary}
							tag={tag}
							date={date}
							pageName="news"
							slug={slug}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default NewsPage;

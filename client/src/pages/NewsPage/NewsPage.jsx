import "./NewsPage.css";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Line from "../../components/Line/Line";
import Card from "../../components/Card/Card";
import queryFetch from "../../utils/queryFetch";

const NewsPage = () => {
	const { isLoading, isError, isSuccess, error, data } = useQuery({
		queryKey: ["news-articles"],
		queryFn: () =>
			queryFetch({
				endPoint: "/news-articles",
				sortBy: "date",
				sortOrder: "DESC",
			}),
	});

	const newsArticlesData = data?.data;

	const [searchValue, setSearchValue] = useState("");
	const [selectedCategory, setselectedCategory] = useState("All");

	const handleSearch = (event) => {
		setSearchValue(event.target.value);
	};

	const handleCategoryChange = (event) => {
		setselectedCategory(event.target.value);
		setSearchValue("");
	};

	const filteredNewsArticles = newsArticlesData?.filter((newsArticle) => {
		const titleMatches = newsArticle.title
			.toLowerCase()
			.includes(searchValue.toLowerCase());
		const summaryMatches = newsArticle.summary
			.toLowerCase()
			.includes(searchValue.toLowerCase());
		const categoryMatches = newsArticle.category
			.toLowerCase()
			.includes(searchValue.toLowerCase());
		return titleMatches || summaryMatches || categoryMatches;
	});

	return (
		<>
			{isLoading && <LoadingPage />}
			{isError && <ErrorPage error={error} />}
			{isSuccess && (
				<div className="news-page">
					<h1>News</h1>
					<Line />
					<form className="search-form">
						<select value={selectedCategory} onChange={handleCategoryChange}>
							<option value="All">All</option>
							{/* make a unique array of categories */}
							{/* then map over it to generate the options */}
							{/* (!) BUT this is very inefficient if there are many Events */}
							{[
								...new Set(data?.data.map((eventItem) => eventItem.category)),
							].map((category) => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
						</select>
						<input
							type="text"
							placeholder="Search"
							value={searchValue}
							onChange={handleSearch}
						/>
						<p>
							{filteredNewsArticles.length} News Article
							{filteredNewsArticles.length > 1 ? "s" : ""} found
						</p>
					</form>
					<div className="cards-list-container">
						{filteredNewsArticles.map((newsArticle) => {
							const { id, title, slug, date, category, tags, summary } =
								newsArticle;
							const { url, alternativeText } = newsArticle.images[0];
							return (
								<Card
									key={id}
									title={title}
									slug={slug}
									image={url}
									alternativeText={alternativeText}
									date={date}
									category={category}
									tag={tags}
									summary={summary}
									pageName="news"
									passedClass="content"
								/>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default NewsPage;

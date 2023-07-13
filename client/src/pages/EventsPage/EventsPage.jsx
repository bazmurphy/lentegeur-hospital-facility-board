import "./EventsPage.css";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Line from "../../components/Line/Line";
import Card from "../../components/Card/Card";
import queryFetch from "../../utils/queryFetch";

const EventsPage = () => {
	const { isLoading, isError, isSuccess, error, data } = useQuery({
		queryKey: ["events"],
		queryFn: () =>
			queryFetch({
				endPoint: "/events",
				sortBy: "startDate",
				sortOrder: "ASC",
			}),
	});

	const eventsData = data?.data;

	const [searchValue, setSearchValue] = useState("");
	const [selectedCategory, setselectedCategory] = useState("All");

	const handleSearch = (event) => {
		setSearchValue(event.target.value);
	};

	const handleCategoryChange = (event) => {
		setselectedCategory(event.target.value);
		setSearchValue("");
	};

	const filteredEvents = eventsData?.filter((eventArticle) => {
		const titleMatches = eventArticle.title
			.toLowerCase()
			.includes(searchValue.toLowerCase());
		const summaryMatches = eventArticle.summary
			.toLowerCase()
			.includes(searchValue.toLowerCase());
		const categoryMatches =
			selectedCategory === "All" || eventArticle.category === selectedCategory;
		return (titleMatches || summaryMatches) && categoryMatches;
	});

	return (
		<>
			{isLoading && <LoadingPage />}
			{isError && <ErrorPage error={error} />}
			{isSuccess && (
				<div className="events-page">
					<h1 className="events-page-title">Events</h1>
					<Line extraClass={"events-page-line"} />
					<form className="events-form">
						<select
							value={selectedCategory}
							onChange={handleCategoryChange}
							className="news-form-category"
						>
							<option value="All">All</option>
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
							className="events-form-search"
						/>
						<p className="events-form-filter-results">
							{filteredEvents.length} Event
							{filteredEvents.length > 1 ? "s" : ""} found
						</p>
					</form>
					<div className="events-cards-list-container">
						{filteredEvents.map((eventItem) => {
							const { id, title, slug, startDate, category, tags, summary } =
								eventItem;
							const { url, alternativeText } = eventItem.images[0];
							return (
								<Card
									key={id}
									title={title}
									slug={slug}
									image={url}
									alternativeText={alternativeText}
									startDate={startDate}
									category={category}
									tags={tags}
									summary={summary}
									pageName="events"
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

export default EventsPage;

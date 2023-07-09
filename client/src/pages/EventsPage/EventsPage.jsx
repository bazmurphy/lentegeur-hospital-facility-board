import "./EventsPage.css";
import Line from "../../components/Line/Line";
import Loading from "../../components/Loading/Loading";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import Card from "../../components/Card/Card";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const EventsPage = () => {
	const fetchEvents = async () => {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/events?populate=images`
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	};

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ["events"],
		queryFn: fetchEvents,
	});
	// need to implement destructuring on "data"
	// that adheres to the philosophy of React Query

	const [searchValue, setSearchValue] = useState("");
	const [selectedCategory, setselectedCategory] = useState("All");

	const handleSearch = (event) => {
		setSearchValue(event.target.value);
	};

	const handleCategoryChange = (event) => {
		setselectedCategory(event.target.value);
		setSearchValue("");
	};

	const filteredEvents = data?.data.filter((eventArticle) => {
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
		<div className="event-page">
			<h1>Events</h1>
			<Line />
			{isLoading && <Loading />}
			{isError && <ErrorComponent errorMessage={error} />}
			{filteredEvents && (
				<>
					<form className="search-form">
						<input
							type="text"
							placeholder="Search"
							value={searchValue}
							onChange={handleSearch}
						/>
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
						<p>
							{filteredEvents.length} Event
							{filteredEvents.length > 1 ? "s" : ""} found
						</p>
					</form>
					<div className="cards-list-container">
						{filteredEvents.map((eventItem) => {
							const { id, title, slug, date, category, tags, summary } =
								eventItem;
							const { url, alternativeText } = eventItem.images[0];
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
									pageName="events"
									passedClass="content"
								/>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
};

export default EventsPage;

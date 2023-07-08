import "./EventsPage.css";
import Line from "../../components/Line/Line";
import Card from "../../components/Card/Card";
import { useState } from "react";

import eventsData from "../../data/eventsData.json";

const EventsPage = () => {
	const [searchValue, setSearchValue] = useState("");
	const [selectedTag, setSelectedTag] = useState("All");

	const handleSearch = (event) => {
		setSearchValue(event.target.value);
	};

	const handleTagChange = (event) => {
		setSelectedTag(event.target.value);
		setSearchValue("");
	};

	const filteredEvents = eventsData.filter((item) => {
		const titleMatches = item.title
			.toLowerCase()
			.includes(searchValue.toLowerCase());
		const summaryMatches = item.summary
			.toLowerCase()
			.includes(searchValue.toLowerCase());
		const categoryMatches = selectedTag === "All" || item.tag === selectedTag;

		return (titleMatches || summaryMatches) && categoryMatches;
	});

	return (
		<div className="event-page">
			<h1>Events</h1>
			<Line />
			<form className="search-form">
				<input
					type="text"
					placeholder="Search"
					value={searchValue}
					onChange={handleSearch}
				/>
				<select value={selectedTag} onChange={handleTagChange}>
					<option value="All">All</option>
					<option value="Emergency">Emergency</option>
					<option value="Surgical">Surgical</option>
					<option value="Diagnostic">Diagnostic</option>
				</select>
				<p>{filteredEvents.length} events found</p>
			</form>
			<div className="cards-list-container">
				{filteredEvents.map((eventItem) => {
					const { id, title, date, tag, summary, slug } = eventItem;
					const { url, alternativeText } = eventItem.images[0];
					return (
						<Card
							key={id}
							title={title}
							image={url}
							alternativeText={alternativeText}
							summary={summary}
							tag={tag}
							date={date}
							pageName="events"
							slug={slug}
							passedClass="content"
						/>
					);
				})}
			</div>
		</div>
	);
};

export default EventsPage;

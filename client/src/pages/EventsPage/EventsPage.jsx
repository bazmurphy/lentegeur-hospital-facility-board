import "./EventsPage.css";
import Card from "../../components/Card/Card";
import Line from "../../components/Line/Line";
import { useState } from "react";

const eventsData = [
	{
		id: 1,
		title: "Emergency Services",
		images: [
            {
                url: "https://clevelandcliniclondon.uk/-/scassets/images/org/locations/london/hospital-services/hospital-services-feature.jpg",
                alternativeText: "some alternative text",
            },
        ],
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum semper magna, vitae dapibus felis volutpat. Duis feugiat, mauris a ultricies lobortis, ligula risus viverra massa, nec pellentesque tellus ligula non mi.",
		tag: "Emergency",
		date:"1/1/2023",
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
		date:"2/1/2023",
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
		date:"3/1/2023",
	},
];

const EventsPage = () => {
	const [searchValue, setSearchValue] = useState("");
	const [selectedTag, setSelectedTag] = useState("All");

	const handleSearch = (event) => {
		setSearchValue(event.target.value);
	};

	const handleCategoryChange = (event) => {
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
		const categoryMatches =
			selectedTag === "All" || item.category === selectedTag;

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
				<select value={selectedTag} onChange={handleCategoryChange}>
					<option value="All">All</option>
					<option value="Emergency">Emergency</option>
					<option value="Surgical">Surgical</option>
					<option value="Diagnostic">Diagnostic</option>
				</select>
				<p>{filteredEvents.length} events found</p>
			</form>
			<div className="cards-list-container">
				{filteredEvents.map((item) => {
					const { url, alternativeText } = item.images[0];
					return (
						<Card
							key={item.id}
							id={item.id}
							title={item.title}
							image={url}
							alternativeText={alternativeText}
							summary={item.summary}
							tag={item.tag}
							date={item.date}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default EventsPage;

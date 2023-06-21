import "./EventsPage.css";
import ContentBox from "../../components/Share/ContentBox";
import { useState } from "react";

const eventsData = [
	{
		title: "Emergency Services",
		image:
			"https://clevelandcliniclondon.uk/-/scassets/images/org/locations/london/hospital-services/hospital-services-feature.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		category: "Emergency",
	},
	{
		title: "Surgical Procedures",
		image:
			"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/09/Female_Doctor_Daughter_Mother_1296x728-header-1296x729.jpg?w=1155&h=2268",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		category: "Surgical",
	},
	{
		title: "Diagnostic Imaging",
		image:
			"https://s3-prod.modernhealthcare.com/s3fs-public/SPONSORED_170619878_AR_-1_RXMUPRMWBUGI.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		category: "Diagnostic",
	},
];

const EventsPage = () => {
	const [searchValue, setSearchValue] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");

	const handleSearch = (event) => {
		setSearchValue(event.target.value);
	};

	const handleCategoryChange = (event) => {
		setSelectedCategory(event.target.value);
		setSearchValue("");
	};

	const filteredEvents = eventsData.filter((item) => {
		const titleMatches = item.title
			.toLowerCase()
			.includes(searchValue.toLowerCase());
		const contentMatches = item.description
			.toLowerCase()
			.includes(searchValue.toLowerCase());
		const categoryMatches =
			selectedCategory === "All" || item.category === selectedCategory;

		return (titleMatches || contentMatches) && categoryMatches;
	});

	return (
		<>
			<h1>Events</h1>
			<div className="tools-bar">
				<input
					type="text"
					placeholder="Search"
					value={searchValue}
					onChange={handleSearch}
				/>
				<select value={selectedCategory} onChange={handleCategoryChange}>
					<option value="All">All</option>
					<option value="Emergency">Emergency</option>
					<option value="Surgical">Surgical</option>
					<option value="Diagnostic">Diagnostic</option>
				</select>
				<p>{filteredEvents.length} events found</p>
			</div>
			{filteredEvents.map((item, index) => {
				return (
					<ContentBox
						key={index}
						title={item.title}
						image={item.image}
						content={item.description}
					/>
				);
			})}
		</>
	);
};

export default EventsPage;

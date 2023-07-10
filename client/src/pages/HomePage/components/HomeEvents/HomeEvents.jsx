import "./HomeEvents.css";
import { useQuery } from "@tanstack/react-query";
import Line from "../../../../components/Line/Line";
import EventsCard from "./components/EventsCard/EventsCard";
import Loading from "../../../../components/Loading/Loading";
import ErrorComponent from "../../../../components/ErrorComponent/ErrorComponent";

function HomeEvents({ path, apiRoute }) {
	const fetchHomeEvents = async () => {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/${apiRoute}?populate=images`
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	};

	const { isLoading, isError, data, error } = useQuery({
		queryKey: [`${apiRoute}`],
		queryFn: fetchHomeEvents,
	});
	const HomeEventsData= data?.data;

	return (
		<section className="home-events-section">
			<h1 className="home-events-title">Upcoming Events</h1>
			<Line />
			{isLoading && <Loading />}
			{isError && <ErrorComponent error={error} />}
			<div className="home-events-container">
				{!!HomeEventsData &&
					HomeEventsData.map((homeEvent) => {
						const { slug, title, images, startDate, summary } = homeEvent;
						return (
							<EventsCard
								key={slug}
								title={title}
								slug={slug}
								image={images[0].url}
								alternativeText={images[0].alternativeText}
								date={startDate}
								summary={summary}
								pageName={path}
							/>
						);
					})}
			</div>
		</section>
	);
}

export default HomeEvents;

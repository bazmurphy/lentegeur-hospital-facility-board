import "./HomeServicesSection.css";
import Line from "../../../../components/Line/Line";
import Loading from "../../../../components/Loading/Loading";
import ErrorComponent from "../../../../components/ErrorComponent/ErrorComponent";
import HomeServiceCard from "../HomeServiceCard/HomeServiceCard";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

const HomeServicesSection = () => {
	const fetchServices = async () => {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/services?populate=images`
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	};

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ["services"],
		queryFn: fetchServices,
	});
	const servicesData = data?.data;

	const [numberOfCards, setNumberOfCards] = useState(null);

	useEffect(() => {
		// this is to set the number of Cards based on the window width
		// i have tried to roughly estimate the transitions
		const handleResize = () => {
			if (window.innerWidth <= 600) {
				setNumberOfCards(3);
			} else if (window.innerWidth <= 1000) {
				setNumberOfCards(4);
			} else if (window.innerWidth <= 1200) {
				setNumberOfCards(6);
			}
		};

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<section className="home-services-section">
			<h2 className="home-services-title">Our Services</h2>
			<Line extraClass={"home-services-line"} />
			{isLoading && <Loading />}
			{isError && <ErrorComponent error={error} />}
			{!!servicesData && (
				<div className="home-services-card-list">
					{servicesData.slice(0, numberOfCards).map((service) => {
						const { slug, images, title, summary } = service;
						return (
							<HomeServiceCard
								key={slug}
								slug={slug}
								images={images}
								title={title}
								summary={summary}
							/>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default HomeServicesSection;

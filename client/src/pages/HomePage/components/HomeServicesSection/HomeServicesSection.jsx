import "./HomeServicesSection.css";
import { useQuery } from "@tanstack/react-query";
import Line from "../../../../components/Line/Line";
import Loading from "../../../../components/Loading/Loading";
import ErrorComponent from "../../../../components/ErrorComponent/ErrorComponent";
import HomeServiceCard from "../HomeServiceCard/HomeServiceCard";

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

	return (
		<section className="home-services-section">
			<h2 className="home-services-title">Our Services</h2>
			<Line extraClass={"home-services-line"} />
			{isLoading && <Loading />}
			{isError && <ErrorComponent error={error} />}
			{!!servicesData && (
				<div className="home-services-card-list">
					{servicesData.map((service) => {
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

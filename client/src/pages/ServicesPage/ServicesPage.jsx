import "./ServicesPage.css";
import Loading from "../../components/Loading/Loading";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import { useQuery } from "@tanstack/react-query";

const ServicesPage = () => {
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
		<div className="services-page">
			<h1 className="services-page-title">Services</h1>
			{isLoading && <Loading />}
			{isError && <ErrorComponent errorMessage={error} />}
			{!!servicesData &&
				servicesData.map((service, index) => {
					const { id, title, slug, images, category, tags, summary } = service;
					const { url, alternativeText } = images[0];
					return (
						<ServiceCard
							key={id}
							title={title}
							slug={slug}
							image={url}
							alternativeText={alternativeText}
							category={category}
							tags={tags}
							summary={summary}
							customClassAlignImage={
								index % 2 === 0 ? "align-left" : "align-right"
							}
						/>
					);
				})}
		</div>
	);
};

export default ServicesPage;

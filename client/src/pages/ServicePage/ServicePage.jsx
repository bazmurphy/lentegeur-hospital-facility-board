import "./ServicePage.css";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Line from "../../components/Line/Line";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import queryFetch from "../../utils/queryFetch";
import parseContent from "../../utils/parseContent";

const ServicePage = () => {
	const { slug } = useParams();

	const { isLoading, isError, isSuccess, error, data } = useQuery({
		queryKey: ["services", slug],
		queryFn: () => queryFetch({ endPoint: "/services", slug: slug }),
	});

	const serviceData = data?.data[0];

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	return (
		<>
			{isLoading && <LoadingPage />}
			{isError && <ErrorPage error={error} />}
			{isSuccess && (
				<div className="service-page">
					<h1>{serviceData.title}</h1>
					<Line />
					<div className="service-page-subcontainer">
						<div className="service-page-image-container">
							<img
								className="service-page-image"
								src={serviceData.images[0].url}
								alt={serviceData.images[0].alternativeText}
							/>
						</div>
						<div className="service-page-category-tag-container">
							{serviceData.category && (
								<span className="service-page-category">{`Category: ${serviceData.category}`}</span>
							)}
							{serviceData.tags && (
								<span className="service-page-tags-container">
									Tags:{" "}
									{serviceData.tags.map((tag) => {
										return (
											<span key={tag} className="service-page-tag">
												{tag}
											</span>
										);
									})}
								</span>
							)}
						</div>
						<div className="service-page-content-container">
							{parseContent(serviceData.content)}
						</div>
					</div>
					<GoBackButton goBack={goBack} />
				</div>
			)}
		</>
	);
};

export default ServicePage;

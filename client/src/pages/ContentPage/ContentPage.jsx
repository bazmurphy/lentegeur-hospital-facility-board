import "./ContentPage.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Line from "../../components/Line/Line";
import Loading from "../../components/Loading/Loading";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import parseContent from "../../utils/parseContent";

const ContentPage = () => {
	const location = useLocation();
	const path = location.pathname.substring(1).split("/")[0];

	let route;
	if (path === "news") {
		route = "news-articles";
	}
	if (path === "events") {
		route = "events";
	}

	const { slug } = useParams();

	const fetchContentPage = async (slug) => {
		const response = await fetch(
			`${
				import.meta.env.VITE_API_URL
			}/${route}?filters[slug][$eq]=${slug}&populate=images`
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	};

	const { isLoading, isError, data, error } = useQuery({
		queryKey: [`${route}`, slug],
		queryFn: () => fetchContentPage(slug),
	});
	const contentData = data?.data[0];

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	return (
		<div className="content-page">
			{isLoading && <Loading />}
			{isError && <ErrorComponent error={error} />}
			{!!contentData && (
				<>
					<h1>{contentData.title}</h1>
					<Line extraClass="content-page-line" />
					<div className="content-page-subcontainer">
						<div className="content-page-image-container">
							<img
								className="content-page-image"
								src={contentData.images[0].url}
								alt={contentData.images[0].alternativeText}
							/>
						</div>

						{/* <div className="content-page-category-tags-date-container"> */}
						{contentData.category && (
							<span className="content-page-category">{`Category: ${contentData.category}`}</span>
						)}

						{contentData.date && (
							<span className="content-page-date">{`Date: ${contentData.date}`}</span>
						)}

						{contentData.tags && (
							<span className="content-page-tags-container">
								Tags:{" "}
								{contentData.tags.map((tag) => {
									return (
										<span key={tag} className="content-page-tag">
											{tag}
										</span>
									);
								})}
							</span>
						)}
						{/* </div> */}
						<div className="content-page-content-container">
							{parseContent(contentData.content)}
						</div>
					</div>

					<GoBackButton goBack={goBack} />
				</>
			)}
		</div>
	);
};

export default ContentPage;

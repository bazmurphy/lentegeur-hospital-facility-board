import "./ContentPage.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Line from "../../components/Line/Line";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import queryFetch from "../../utils/queryFetch";
import parseContent from "../../utils/parseContent";

const ContentPage = () => {
	const location = useLocation();
	const path = location.pathname.substring(1).split("/")[0];

	let dynamicEndPoint;
	let dynamicQueryKey;

	if (path === "news") {
		dynamicQueryKey = "news-articles";
		dynamicEndPoint = "/news-articles";
	} else if (path === "events") {
		dynamicQueryKey = "events";
		dynamicEndPoint = "/events";
	}

	const { slug } = useParams();

	const { isLoading, isError, isSuccess, error, data } = useQuery({
		queryKey: [dynamicQueryKey, slug],
		queryFn: () =>
			queryFetch({
				endPoint: dynamicEndPoint,
				slug: slug,
			}),
	});

	const contentData = data?.data[0];

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	return (
		<>
			{isLoading && <LoadingPage />}
			{isError && <ErrorPage error={error} />}
			{isSuccess && (
				<div className="content-page">
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
				</div>
			)}
		</>
	);
};

export default ContentPage;

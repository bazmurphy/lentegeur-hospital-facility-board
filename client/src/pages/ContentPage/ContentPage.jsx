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

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	return (
		<div className="content-page">
			{isLoading && <Loading />}
			{isError && <ErrorComponent errorMessage={error} />}
			{data && (
				<>
					<h1>{data.data[0].title}</h1>
					<Line />
					<div className="content-page-image-container">
						<img
							className="content-page-image"
							src={data.data[0].images[0].url}
							alt={data.data[0].images[0].alternativeText}
						/>
					</div>
					<div className="content-page-category-date-container">
						<p>{`Category: ${data.data[0].category}`}</p>
						{/* <p>{`Tags: ${data.data[0].tags}`}</p> */}
						<p>{`Date: ${data.data[0].date}`}</p>
					</div>
					<div className="content-page-content-container">
						{parseContent(data.data[0].content)}
					</div>
					<GoBackButton goBack={goBack} />
				</>
			)}
		</div>
	);
};

export default ContentPage;

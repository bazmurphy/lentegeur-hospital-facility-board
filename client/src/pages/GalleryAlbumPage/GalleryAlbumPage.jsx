import "./GalleryAlbumPage.css";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Line from "../../components/Line/Line";
import queryFetch from "../../utils/queryFetch";

const GalleryAlbumPage = () => {
	const { slug } = useParams();

	const { isLoading, isError, isSuccess, error, data } = useQuery({
		queryKey: ["gallery-albums", slug],
		queryFn: () => queryFetch({ endPoint: "/gallery-albums", slug: slug }),
	});
	const galleryAlbumData = data?.data[0];

	return (
		<>
			{isLoading && <LoadingPage />}
			{isError && <ErrorPage error={error} />}
			{isSuccess && (
				<div className="gallery-album-page">
					<h1>Gallery Album Page</h1>
					<Line />
					<div className="gallery-album-container">
						<Link to="/gallery" className="gallery-album-link-back">
							{"< Back"}
						</Link>
						<h2 className="gallery-album-title">{galleryAlbumData.title}</h2>
						<p className="gallery-album-summary">{galleryAlbumData.summary}</p>
						<div className="gallery-album-list">
							{galleryAlbumData.images.map((image) => {
								const { id, url, alternativeText } = image;
								return (
									<div key={id} className="gallery-album-image-container">
										<img
											src={url}
											alt={alternativeText}
											className="gallery-album-image"
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default GalleryAlbumPage;

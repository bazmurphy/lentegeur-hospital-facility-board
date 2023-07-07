import "./GalleryAlbumPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Line from "../../components/Line/Line";
import Loading from "../../components/Loading/Loading";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";

const GalleryAlbumPage = () => {
	const { slug } = useParams();
	// console.log("GalleryAlbumPage slug:", slug);

	const [galleryAlbumData, setGalleryAlbumData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		const fetchGalleryAlbumData = async () => {
			try {
				setIsLoading(true);
				setIsError(false);
				setErrorMessage(null);

				const response = await fetch(
					`${
						import.meta.env.VITE_API_URL
					}/gallery-albums?filters[slug][$eq]=${slug}&populate=images`
				);
				// console.log("fetchGalleryAlbumData response:", response);
				if (!response.ok) {
					throw new Error(`${response.status} ${response.statusText}`);
				}

				const json = await response.json();
				// console.log("fetchGalleryAlbumData json:", json);
				if (json.data.length === 0) {
					throw new Error(`No Gallery Album "${slug}" was was found`);
				}

				// we must array destructure the single object that comes back from the response
				const [data] = json.data;
				// console.log("fetchGalleryAlbumData data:", data);

				setGalleryAlbumData(data);
			} catch (error) {
				setIsError(true);
				setErrorMessage(error.message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchGalleryAlbumData();
	}, [slug]);

	return (
		<div className="gallery-album-page">
			<h1>Gallery Album Page</h1>
			<Line />
			{isLoading && <Loading />}
			{isError && <ErrorComponent errorMessage={errorMessage} />}
			{galleryAlbumData && (
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
			)}
		</div>
	);
};

export default GalleryAlbumPage;

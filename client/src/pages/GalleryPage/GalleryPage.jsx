import "./GalleryPage.css";
import { useState, useEffect } from "react";
import Line from "../../components/Line/Line";
import Loading from "../../components/Loading/Loading";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import GalleryCard from "./components/GalleryCard/GalleryCard";

const GalleryPage = () => {
	const [galleryAlbumsData, setGalleryAlbumsData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		const fetchGalleryAlbumsData = async () => {
			try {
				setIsLoading(true);
				setIsError(false);
				setErrorMessage(null);

				const response = await fetch(
					`${import.meta.env.VITE_API_URL}/gallery-albums?populate=images`
				);
				// console.log("fetchGalleryAlbumData response:", response);
				if (!response.ok) {
					throw new Error(`${response.status} ${response.statusText}`);
				}

				const json = await response.json();
				// console.log("fetchGalleryAlbumData json:", json);
				if (json.data.length === 0) {
					throw new Error("No Gallery Albums were found");
				}

				const { data } = json;
				// console.log("fetchGalleryAlbumData data:", data);

				setGalleryAlbumsData(data);
			} catch (error) {
				setIsError(true);
				setErrorMessage(error.message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchGalleryAlbumsData();
	}, []);

	return (
		<div className="gallery-page">
			<h1 className="gallery-page-title">Gallery Page</h1>
			<Line />
			{isLoading && <Loading />}
			{isError && <ErrorComponent errorMessage={errorMessage} />}
			<div className="gallery-page-list-container">
				{galleryAlbumsData &&
					galleryAlbumsData.map((galleryAlbum) => {
						return <GalleryCard key={galleryAlbum.slug} props={galleryAlbum} />;
					})}
			</div>
		</div>
	);
};

export default GalleryPage;

import "./GalleryPage.css";
import { useQuery } from "@tanstack/react-query";
import Line from "../../components/Line/Line";
import Loading from "../../components/Loading/Loading";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import GalleryCard from "./components/GalleryCard/GalleryCard";

const GalleryPage = () => {
	const fetchGalleryAlbums = async () => {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/gallery-albums?populate=images`
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	};

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ["gallery-albums"],
		queryFn: fetchGalleryAlbums,
	});
	// need to implement destructuring on "data"
	// that adheres to the philosophy of React Query

	return (
		<div className="gallery-page">
			<h1 className="gallery-page-title">Gallery Page</h1>
			<Line />
			{isLoading && <Loading />}
			{isError && <ErrorComponent errorMessage={error} />}
			<div className="gallery-page-list-container">
				{data &&
					data.data.map((galleryAlbum) => {
						return <GalleryCard key={galleryAlbum.slug} props={galleryAlbum} />;
					})}
			</div>
		</div>
	);
};

export default GalleryPage;

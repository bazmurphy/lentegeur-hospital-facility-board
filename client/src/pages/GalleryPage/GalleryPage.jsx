import "./GalleryPage.css";
import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Line from "../../components/Line/Line";
import GalleryCard from "./components/GalleryCard/GalleryCard";
import queryFetch from "../../utils/queryFetch";

const GalleryPage = () => {
	const { isLoading, isError, isSuccess, error, data } = useQuery({
		queryKey: ["gallery-albums"],
		queryFn: () => queryFetch({ endPoint: "/gallery-albums" }),
	});

	const galleryAlbumsData = data?.data;

	return (
		<>
			{isLoading && <LoadingPage />}
			{isError && <ErrorPage error={error} />}
			{isSuccess && (
				<div className="gallery-page">
					<h1 className="gallery-page-title">Gallery Page</h1>
					<Line />
					<div className="gallery-page-list-container">
						{galleryAlbumsData.map((galleryAlbum) => {
							return (
								<GalleryCard key={galleryAlbum.slug} props={galleryAlbum} />
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default GalleryPage;

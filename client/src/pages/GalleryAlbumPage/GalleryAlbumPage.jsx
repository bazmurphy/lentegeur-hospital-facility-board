import "./GalleryAlbumPage.css";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Line from "../../components/Line/Line";
import Loading from "../../components/Loading/Loading";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";

const GalleryAlbumPage = () => {
	const { slug } = useParams();

	const fetchGalleryAlbum = async (slug) => {
		const response = await fetch(
			`${
				import.meta.env.VITE_API_URL
			}/gallery-albums?filters[slug][$eq]=${slug}&populate=images`
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	};

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ["gallery-albums", slug],
		queryFn: () => fetchGalleryAlbum(slug),
	});
	// need to implement destructuring on "data"
	// that adheres to the philosophy of React Query

	return (
		<div className="gallery-album-page">
			<h1>Gallery Album Page</h1>
			<Line />
			{isLoading && <Loading />}
			{isError && <ErrorComponent errorMessage={error} />}
			{data && (
				<div className="gallery-album-container">
					<Link to="/gallery" className="gallery-album-link-back">
						{"< Back"}
					</Link>
					<h2 className="gallery-album-title">{data.data[0].title}</h2>
					<p className="gallery-album-summary">{data.data[0].summary}</p>
					<div className="gallery-album-list">
						{data.data[0].images.map((image) => {
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

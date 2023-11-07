import "./GalleryPage.css";
import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Line from "../../components/Line/Line";
import GalleryCard from "./components/GalleryCard/GalleryCard";
import queryFetch from "../../utils/queryFetch";

export interface GalleryAlbumImage {
  id: string;
  url: string;
  alternativeText: string;
}

export interface GalleryAlbum {
  id: number;
  title: string;
  slug: string;
  tags: string[];
  summary: string;
  images: GalleryAlbumImage[];
}

const GalleryPage = () => {
  const { isLoading, isError, isSuccess, error, data } = useQuery({
    queryKey: ["gallery-albums"],
    queryFn: () => queryFetch({ endPoint: "/gallery-albums" }),
  });

  const galleryAlbumsData: GalleryAlbum[] = data?.data;

  return (
    <>
      {isLoading && <LoadingPage />}
      {isError && <ErrorPage error={error} />}
      {isSuccess && (
        <div className="gallery-page">
          <h1 className="gallery-page-title">Gallery Page</h1>
          <Line extraClass={"gallery-page-line"} />
          <div className="gallery-page-list-container">
            {galleryAlbumsData.map((galleryAlbum: GalleryAlbum) => {
              const { slug, title, images } = galleryAlbum;
              return (
                <GalleryCard
                  key={slug}
                  slug={slug}
                  title={title}
                  images={images}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;

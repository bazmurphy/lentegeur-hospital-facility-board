import "./ServicesPage.css";
import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import queryFetch from "../../utils/queryFetch";
import Line from "../../components/Line/Line";

export interface ServiceImage {
  url: string;
  alternativeText: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  summary: string;
  content: string;
  images: ServiceImage[];
}

const ServicesPage = () => {
  const { isLoading, isError, isSuccess, error, data } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      queryFetch({ endPoint: "/services", sortBy: "id", sortOrder: "ASC" }),
  });

  const servicesData: Service[] = data?.data;

  return (
    <>
      {isLoading && <LoadingPage />}
      {isError && <ErrorPage error={error} />}
      {isSuccess && (
        <div className="services-page">
          <h1 className="services-page-title">Services</h1>
          <Line extraClass="services-page-line" />
          <div className="services-page-cards">
            {servicesData.map((service) => {
              const { id, title, slug, images } = service; // category, tags, summary
              const { url, alternativeText } = images[0];
              return (
                <ServiceCard
                  key={id}
                  title={title}
                  slug={slug}
                  image={url}
                  alternativeText={alternativeText}
                  // category={category}
                  // tags={tags}
                  // summary={summary}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesPage;

import "./HomePage.css";
import { useQueries } from "@tanstack/react-query";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomeHero from "./components/HomeHero/HomeHero";
import HomeServicesSection from "./components/HomeServicesSection/HomeServicesSection";
import HomeEventsSection from "./components/HomeEventsSection/HomeEventsSection";
import HomeNewsSection from "./components/HomeNewsSection/HomeNewsSection";
import HomeGetInvolvedSection from "./components/HomeGetInvolvedSection/HomeGetInvolvedSection";
import queryFetch from "../../utils/queryFetch";
import { HomePageData } from "./components/HomeHero/HomeHero";
import { Service } from "../ServicesPage/ServicesPage";
import { Event } from "../EventsPage/EventsPage";
import { NewsArticle } from "../NewsPage/NewsPage";

const HomePage = () => {
  const [homePageQuery, servicesQuery, eventsQuery, newsArticlesQuery] =
    useQueries({
      queries: [
        {
          queryKey: ["home-page"],
          queryFn: () => queryFetch({ endPoint: "/home-page" }),
        },
        {
          queryKey: ["services"],
          queryFn: () => queryFetch({ endPoint: "/services" }),
        },
        {
          queryKey: ["events"],
          queryFn: () =>
            queryFetch({
              endPoint: "/events",
              sortBy: "startDate",
              sortOrder: "ASC",
            }),
        },
        {
          queryKey: ["news-articles"],
          queryFn: () =>
            queryFetch({
              endPoint: "/news-articles",
              sortBy: "date",
              sortOrder: "DESC",
            }),
        },
      ],
    });

  const isLoading = [
    homePageQuery,
    servicesQuery,
    eventsQuery,
    newsArticlesQuery,
  ].some((query) => query.isLoading);

  const isError = [
    homePageQuery,
    servicesQuery,
    eventsQuery,
    newsArticlesQuery,
  ].some((query) => query.isError);

  const isSuccess = [
    homePageQuery,
    servicesQuery,
    eventsQuery,
    newsArticlesQuery,
  ].every((query) => query.isSuccess);

  const homePageData: HomePageData = homePageQuery.data?.data;
  const servicesData: Service[] = servicesQuery.data?.data;
  const eventsData: Event[] = eventsQuery.data?.data;
  const newsArticlesData: NewsArticle[] = newsArticlesQuery.data?.data;

  return (
    <>
      {isLoading && <LoadingPage />}
      {isError && (
        <ErrorPage
          error={
            homePageQuery.error ||
            servicesQuery.error ||
            eventsQuery.error ||
            newsArticlesQuery.error
          }
        />
      )}
      {isSuccess && (
        <div className="home-page">
          <HomeHero homePageData={homePageData} />
          <HomeNewsSection newsArticlesData={newsArticlesData} />
          <HomeEventsSection eventsData={eventsData} />
          <HomeServicesSection servicesData={servicesData} />
          <HomeGetInvolvedSection />
        </div>
      )}
    </>
  );
};

export default HomePage;

import "./AboutPage.css";
import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import HistorySection from "./components/HistorySection/HistorySection";
import GovernanceSection from "./components/GovernanceSection/GovernanceSection";
import NetworkingSection from "./components/NetworkingSection/NetworkingSection";
import queryFetch from "../../utils/queryFetch";

export interface AboutPageContent {
  historySectionImage: {
    url: string;
    alternativeText: string;
  };
  historySectionText: string;
  governanceSectionText: string;
  networkAffiliatesSectionImage: {
    url: string;
    alternativeText: string;
  };
  networkAffiliatesSectionText: string;
  networkAffiliatesSectionLogos: {
    id: number;
    url: string;
    alternativeText: string;
  }[];
}

const AboutPage = () => {
  const { isLoading, isError, isSuccess, error, data } = useQuery({
    queryKey: ["about-page"],
    queryFn: () => queryFetch({ endPoint: "/about-page" }),
  });

  const aboutPageContent: AboutPageContent = data?.data;

  const {
    historySectionImage,
    historySectionText,
    governanceSectionText,
    networkAffiliatesSectionImage,
    networkAffiliatesSectionText,
    networkAffiliatesSectionLogos,
  } = aboutPageContent || {};
  // the || {} is to prevent a destructuring error since "data" maybe undefined

  return (
    <>
      {isLoading && <LoadingPage />}
      {isError && <ErrorPage error={error} />}
      {isSuccess && (
        <div className="about-page">
          <h1 className="about-page-title">About</h1>
          <HistorySection
            historySectionImage={historySectionImage}
            historySectionText={historySectionText}
          />
          <GovernanceSection governanceSectionText={governanceSectionText} />
          <NetworkingSection
            networkAffiliatesSectionImage={networkAffiliatesSectionImage}
            networkAffiliatesSectionText={networkAffiliatesSectionText}
            networkAffiliatesSectionLogos={networkAffiliatesSectionLogos}
          />
        </div>
      )}
    </>
  );
};

export default AboutPage;

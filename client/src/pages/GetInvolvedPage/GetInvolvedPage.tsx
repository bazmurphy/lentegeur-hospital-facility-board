import "./GetInvolvedPage.css";
import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import GetInvolvedSection from "./components/GetInvolvedSection/GetInvolvedSection";
import DonateSection from "./components/DonateSection/DonateSection";
import VolunteerSection from "./components/VolunteerSection/VolunteerSection";
import queryFetch from "../../utils/queryFetch";

export interface GetInvolved {
  getInvolvedSectionText: string;
  donateSectionText: string;
  bankAccountName: string;
  bankName: string;
  bankAccountNumber: string;
  bankBranchCode: string;
  bankSwiftCode: string;
  volunteerSectionImage: {
    url: string;
    alternativeText: string;
  };
  volunteerSectionText: string;
}

const GetInvolvedPage = () => {
  const { isLoading, isError, isSuccess, error, data } = useQuery({
    queryKey: ["get-involved-page"],
    queryFn: () => queryFetch({ endPoint: "/get-involved-page" }),
  });

  const getInvolvedPageContent: GetInvolved = data?.data;

  const {
    getInvolvedSectionText,
    donateSectionText,
    bankAccountName,
    bankName,
    bankAccountNumber,
    bankBranchCode,
    bankSwiftCode,
    volunteerSectionImage,
    volunteerSectionText,
  } = getInvolvedPageContent || {};
  // the || {} is to prevent a destructuring error since "data" maybe undefined

  return (
    <>
      {isLoading && <LoadingPage />}
      {isError && <ErrorPage error={error} />}
      {isSuccess && (
        <div className="get-involved-page">
          <GetInvolvedSection getInvolvedSectionText={getInvolvedSectionText} />
          <DonateSection
            donateSectionText={donateSectionText}
            bankAccountName={bankAccountName}
            bankName={bankName}
            bankAccountNumber={bankAccountNumber}
            bankBranchCode={bankBranchCode}
            bankSwiftCode={bankSwiftCode}
          />
          <VolunteerSection
            volunteerSectionImage={volunteerSectionImage}
            volunteerSectionText={volunteerSectionText}
          />
        </div>
      )}
    </>
  );
};

export default GetInvolvedPage;

import "./AboutPage.css";
import Loading from "../../components/Loading/Loading";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import HistorySection from "./components/HistorySection/HistorySection";
import GovernanceSection from "./components/GovernanceSection/GovernanceSection";
import NetworkingSection from "./components/NetworkingSection/NetworkingSection";
import { useQuery } from "@tanstack/react-query";

const AboutPage = () => {
	const fetchAboutPage = async () => {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/about-page?populate=*`
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	};

	const { isLoading, isError, isSuccess, data, error } = useQuery({
		queryKey: ["about-page"],
		queryFn: fetchAboutPage,
	});
	const aboutPageContent = data?.data;

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
			{isLoading && <Loading />}
			{isError && <ErrorComponent error={error} />}
			{isSuccess && (
				<div className="about-page">
					<h1>About</h1>
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

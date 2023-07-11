import "./AboutPage.css";
import Loading from "../../components/Loading/Loading";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import HistorySection from "./components/HistorySection/HistorySection";
import GovernanceSection from "./components/GovernanceSection/GovernanceSection";
import NetworkingSection from "./components/NetworkingSection/NetworkingSection";
import { useQuery } from "@tanstack/react-query";

const AboutPage = () => {
	const fetchAboutPageContent = async () => {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/about-page?populate=images`
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	};

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ["about-page"],
		queryFn: fetchAboutPageContent,
	});
	const aboutPageContent = data?.data;

	const {
		historySectionImage,
		historySectionText,
		governanceSectionText,
		networkAffiliatesSectionImage,
		networkAffiliatesSectionText,
		networkAffiliatesSectionLogos,
	} = aboutPageContent;

	return (
		<>
			{isLoading && <Loading />}
			{isError && <ErrorComponent error={error} />}
			{!!aboutPageContent && (
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

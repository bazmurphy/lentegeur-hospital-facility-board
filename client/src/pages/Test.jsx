import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import ServicesPage from "./ServicesPage/ServicesPage";
import NewsPage from "./NewsPage/NewsPage";
import EventsPage from "./EventsPage/EventsPage";
import GalleryPage from "./GalleryPage/GalleryPage";
import GetInvolvedPage from "./GetInvolvedPage/GetInvolvedPage";
import ContactUsPage from "./ContactUsPage/ContactUsPage";

// this is a test to check the file & folder structure
const Test = () => {
  return (
		<>
			<Header />
			<HomePage />
			<AboutPage />
			<ServicesPage />
			<NewsPage />
			<EventsPage />
			<GalleryPage />
			<GetInvolvedPage />
			<ContactUsPage />
			<Footer />
		</>
	);
};

export default Test;
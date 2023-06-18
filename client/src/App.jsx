import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import GetInvolvedPage from "./pages/GetInvolvedPage/GetInvolvedPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";

const App = () => (
	<>
		<Header />
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/services" element={<ServicesPage />} />
			<Route path="/news" element={<NewsPage />} />
			<Route path="/events" element={<EventsPage />} />
			<Route path="/gallery" element={<GalleryPage />} />
			<Route path="/get-involved" element={<GetInvolvedPage />} />
			<Route path="/contact-us" element={<ContactUsPage />} />
		</Routes>
		<Footer />
	</>
);

export default App;

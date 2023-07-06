import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout/RootLayout";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import GetInvolvedPage from "./pages/GetInvolvedPage/GetInvolvedPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import ContentPage from "./pages/ContentPage/ContentPage";
import ServicePage from "./pages/ServicePage/ServicePage";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<HomePage />} />
			<Route path="about" element={<AboutPage />} />
			<Route path="services" element={<ServicesPage />} />
			<Route path="news" element={<NewsPage />} />
			<Route path="events" element={<EventsPage />} />
			<Route path="gallery" element={<GalleryPage />} />
			<Route path="get-involved" element={<GetInvolvedPage />} />
			<Route path="contact-us" element={<ContactUsPage />} />
			<Route path="/news/:title" element={<ContentPage />} />
			<Route path="/events/:title" element={<ContentPage />} />
			<Route path="/services/:title" element={<ServicePage />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router}></RouterProvider>;
};

export default App;

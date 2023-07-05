import "../../styles/globals.css";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollToTopButton from "../../components/ScrollToTop/ScrollToTop";

const RootLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
				<ScrollToTopButton />
			</main>
			<Footer />
		</>
	);
};

export default RootLayout;

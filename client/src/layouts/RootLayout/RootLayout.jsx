import "./RootLayout.css";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const RootLayout = () => {
	return (
		<div className="root-layout">
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default RootLayout;

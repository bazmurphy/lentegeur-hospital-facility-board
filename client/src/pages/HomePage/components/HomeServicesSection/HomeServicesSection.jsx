import "./HomeServicesSection.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Line from "../../../../components/Line/Line";
import HomeServiceCard from "./components/HomeServiceCard/HomeServiceCard";

const HomeServicesSection = ({ servicesData }) => {
	const [numberOfCards, setNumberOfCards] = useState(3);

	useEffect(() => {
		// this is to set the number of Cards based on the window width
		// i have tried to roughly estimate the transitions
		// this is not really a great solution...
		const handleResize = () => {
			if (window.innerWidth <= 1000) {
				setNumberOfCards(2);
			} else {
				setNumberOfCards(3);
			}
		};

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<section className="home-services-section">
			<Link to="/services" className="home-services-title-link">
				<h2 className="home-services-title">Our Services</h2>
			</Link>
			<Line extraClass={"home-services-line"} />
			<div className="home-services-card-list">
				{servicesData.slice(0, numberOfCards).map((service) => {
					const { slug, images, title, summary } = service;
					return (
						<HomeServiceCard
							key={slug}
							slug={slug}
							images={images}
							title={title}
							summary={summary}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default HomeServicesSection;

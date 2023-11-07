import "./ContactUsPage.css";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import VisitUsSection from "./components/VisitUsSection/VisitUsSection";

const ContactUsPage = () => {
	return (
		<div className="contact-us-page">
			<ContactUsSection />
			<VisitUsSection />
		</div>
	);
};

export default ContactUsPage;

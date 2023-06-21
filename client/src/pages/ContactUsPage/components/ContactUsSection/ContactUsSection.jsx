import "./ContactUsSection.css";
import ContactUsForm from "./ContactUsForm/ContactUsForm";

const ContactUsSection = () => {
	return (
		<section className="contact-us-section">
			<h1>Contact Us</h1>
			<div className="divider-line"></div>
			<ContactUsForm />
		</section>
	);
};

export default ContactUsSection;

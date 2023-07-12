import { useRef, useState } from "react";
import "./ContactUsForm.css";

const ContactUsForm = () => {
	// this is deliberately using an "uncontrolled" form
	// we can switch it to a "controlled" form (using State) if required
	const formRef = useRef(null);
	const [result, setResult] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const reasons = [
		{ id: 1, option: "Compliments" },
		{ id: 2, option: "Complaints" },
		{ id: 3, option: "Suggestions" },
	];

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		setIsSubmitting(true); // Disable the submit button
		const formData = new FormData(event.target);

		formData.append("access_key", `${import.meta.env.VITE_WEB3FORMS_KEY}`);

		const response = await fetch(`${import.meta.env.VITE_WEB3FORMS_URL}`, {
			method: "POST",
			body: formData,
		}).then((response) => response.json());

		if (response.success) {
			setResult(response.message);
			formRef.current.reset(); // Reset the form fields
		} else {
			setResult(response.message);
		}
		setIsSubmitting(false); // Enable the submit button
	};
	return (
		<div className="contact-us-form-container">
			<p>Fields marked with an asterisk (*) are required.</p>
			<form ref={formRef} onSubmit={onSubmit} className="contact-us-form">
				<div className="contact-us-form-group">
					<label
						htmlFor="contact-us-form-firstname"
						className="contact-us-form-label"
					>
						First Name *
					</label>
					<input
						type="text"
						id="contact-us-form-firstname"
						name="firstname"
						placeholder="e.g. John"
						required
						className="contact-us-form-input"
					/>
				</div>
				<div className="contact-us-form-group">
					<label
						htmlFor="contact-us-form-lastname"
						className="contact-us-form-label"
					>
						Last Name *
					</label>
					<input
						type="text"
						id="contact-us-form-lastname"
						name="lastname"
						placeholder="e.g. Smith"
						required
						className="contact-us-form-input"
					/>
				</div>
				<div className="contact-us-form-group">
					<label
						htmlFor="contact-us-form-email"
						className="contact-us-form-label"
					>
						Email *
					</label>
					<input
						type="email"
						id="contact-us-form-email"
						name="email"
						placeholder="name@company.name"
						required
						className="contact-us-form-input"
					/>
				</div>
				<div className="contact-us-form-group">
					<label
						htmlFor="contact-us-form-phone"
						className="contact-us-form-label"
					>
						Phone Number
					</label>
					<input
						type="tel"
						id="contact-us-form-phone"
						name="phone"
						placeholder="+27 77 555 4455"
						className="contact-us-form-input"
					/>
				</div>
				<div className="contact-us-form-group">
					<label
						htmlFor="contact-us-form-subject"
						className="contact-us-form-label"
					>
						Subject *
					</label>
					<input
						type="text"
						id="contact-us-form-subject"
						name="subject"
						placeholder="e.g. Donation Inquiry"
						required
						className="contact-us-form-input"
					/>
				</div>
				<div className="contact-us-form-group">
					<label
						htmlFor="contact-us-form-reason"
						className="contact-us-form-label"
					>
						Reason For Contact *
					</label>
					<select
						id="contact-us-form-reason"
						name="reason"
						defaultValue={""}
						className="contact-us-form-select"
						required
					>
						<option disabled value={""} className="contact-us-form-option">
							Please select a reason...
						</option>
						{reasons.map((reason) => {
							return (
								<option
									key={reason.id}
									className="contact-us-form-option"
									value={reason.option}
								>
									{reason.option}
								</option>
							);
						})}
					</select>
				</div>
				<div className="contact-us-form-group contact-us-form-message-container">
					<label
						htmlFor="contact-us-form-message"
						className="contact-us-form-label"
					>
						What would you like to discuss? *
					</label>
					<textarea
						type="textarea"
						id="contact-us-form-message"
						name="message"
						placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, a!"
						required
						className="contact-us-form-textarea"
					/>
				</div>
				<div className="contact-us-form-submit-container">
					<span className="contact-us-form-submit-result">{result}</span>
					<button
						type="submit"
						disabled={isSubmitting}
						className={`contact-us-form-submit ${
							isSubmitting ? "disabled" : ""
						}`}
					>
						{isSubmitting ? "Submitting..." : "SUBMIT"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactUsForm;

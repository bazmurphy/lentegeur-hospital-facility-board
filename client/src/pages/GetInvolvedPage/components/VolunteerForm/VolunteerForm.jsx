import "./VolunteerForm.css";
import { useRef, useState } from "react";

const VolunteerForm = () => {
	// this is deliberately using an "uncontrolled" form
	// we can switch it to a "controlled" form (using State) if required
	const formRef = useRef(null);
	const [result, setResult] = useState("");
	// mocking a form submission (to test disabling the submit button)
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending");
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
		<div className="volunteer-form-container">
			<h3>Do you want to become a Volunteer?</h3>
			<p>Fields marked with an asterisk (*) are required.</p>
			<form ref={formRef} onSubmit={onSubmit} className="volunteer-form">
				<div className="volunteer-form-group">
					<label
						htmlFor="volunteer-form-firstname"
						className="volunteer-form-label"
					>
						First Name *
					</label>
					<input
						type="text"
						name="firstname"
						id="volunteer-form-firstname"
						placeholder="e.g. John"
						required
						className="volunteer-form-input"
					/>
				</div>
				<div className="volunteer-form-group">
					<label
						htmlFor="volunteer-form-lastname"
						className="volunteer-form-label"
					>
						Last Name *
					</label>
					<input
						type="text"
						name="lastname"
						id="volunteer-form-lastname"
						placeholder="e.g. Smith"
						required
						className="volunteer-form-input"
					/>
				</div>
				<div className="volunteer-form-group">
					<label
						htmlFor="volunteer-form-email"
						className="volunteer-form-label"
					>
						Email *
					</label>
					<input
						type="email"
						name="email"
						id="volunteer-form-email"
						placeholder="e.g. name@company.name"
						required
						className="volunteer-form-input"
					/>
				</div>
				<div className="volunteer-form-group">
					<label
						htmlFor="volunteer-form-phone"
						className="volunteer-form-label"
					>
						Phone Number
					</label>
					<input
						type="tel"
						name="phone"
						id="volunteer-form-phone"
						placeholder="+27 77 555 4455"
						className="volunteer-form-input"
					/>
				</div>
				<div className="volunteer-form-group volunter-form-message-container">
					<label
						htmlFor="volunteer-form-message"
						className="volunteer-form-label"
					>
						Tell us more about yourself and which skill you wish to share whilst
						volunteering *
					</label>
					<textarea
						name="message"
						id="volunteer-form-message"
						placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, a!"
						required
						className="volunteer-form-textarea"
					/>
				</div>
				<div className="volunteer-form-submit-container">
					<span className="volunteer-form-submit-result">{result}</span>
					<button
						type="submit"
						disabled={isSubmitting}
						className={`volunteer-form-submit ${
							isSubmitting ? "disabled" : ""
						}`}
					>
						{isSubmitting ? "Submitting" : "Submit"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default VolunteerForm;

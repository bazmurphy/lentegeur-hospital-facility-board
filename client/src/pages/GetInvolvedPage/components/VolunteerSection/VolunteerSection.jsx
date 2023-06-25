import "./VolunteerSection.css";
import Line from "../../../../components/Line/Line";
import VolunteerForm from "../VolunteerForm/VolunteerForm";

const Volunteer = () => {
	return (
		<section className="volunteer-section">
			<h2>Volunteer</h2>
			<Line />
			<div className="volunteer-image-container">
				<img
					className="volunteer-image"
					src="https://wcva.cymru/wp-content/uploads/2021/05/shutterstock_1215144616-1.jpg"
					alt="a group of volunteers celebrating"
				/>
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
				ipsam pariatur sapiente nam assumenda adipisci architecto eius
				repellendus voluptas, quidem earum, quo in incidunt. Obcaecati quibusdam
				asperiores in quod atque ipsam sapiente, fugiat dolore impedit
				perferendis ipsa animi soluta assumenda laudantium et adipisci
				voluptatibus doloribus dolorum mollitia reiciendis illum consequatur. Et
				dolor reiciendis laudantium, modi architecto vel tenetur rem ducimus.
			</p>
			<VolunteerForm />
		</section>
	);
};

export default Volunteer;

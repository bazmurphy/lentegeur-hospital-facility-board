import placeholderNetworkingImage from "../../../../assets/grey_circle_image.svg";
import image from "../../../../assets/grey_image.svg";
import Affiliate from "../Affiliate/Affiliate";
import "./NetworkingSection.css";
import Line from "../../../../components/Line/Line";

const NetworkingSection = () => {
	//adding  6 affiliates to the array
	const affiliates = Array.from({ length: 6 }, (_, index) => ({
		name: `Affiliate Name ${index + 1}`,
		image: placeholderNetworkingImage,
		altText: `Affiliate alternate text ${index + 1}`,
	}));

	return (
		<section className="networking-section">
			<h2>Networking Affiliates</h2>
			<Line />
			<div className="networking-container">
				<div className="networking-image-container">
					<img src={image} alt="grey square" />
				</div>

				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industrys standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</p>
			</div>
			<div className="affiliates">
				{affiliates.length > 0 &&
					affiliates.map((affiliate) => (
						<Affiliate
							key={affiliate.name}
							image={affiliate.image}
							name={affiliate.name}
							altText={affiliate.altText}
						/>
					))}
			</div>
		</section>
	);
};

export default NetworkingSection;

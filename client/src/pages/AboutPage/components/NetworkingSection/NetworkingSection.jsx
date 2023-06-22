import image from "../../../../assets/grey_circle_image.svg";
import placeholderNetworkingImage from "../../../../assets/grey_image.svg";
import Affiliate from "../Affiliate/Affiliate";
import "./NetworkingSection.css";

const NetworkingSection = () => {
	const affiliates = [];

	//adding  6 the same affiliates to the array
	for (let i = 0; i < 6; i++) {
		affiliates.push({ image: image, name: "Lorem Ipsum name" });
	}
	return (
		<div className="networking-section">
			<h1 className="networking-title">Networking Affiliates </h1>
			<div className="title-line"></div>
			<div className="networking-wrapper">
				<img src={placeholderNetworkingImage} alt="grey square" />
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
					affiliates.map((affiliate, index) => (
						<Affiliate
							key={index}
							image={affiliate.image}
							name={affiliate.name}
						/>
					))}
			</div>
		</div>
	);
};

export default NetworkingSection;

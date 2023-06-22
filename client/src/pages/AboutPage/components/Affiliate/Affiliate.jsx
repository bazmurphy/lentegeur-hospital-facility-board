import "./Affiliate.css";

const Affiliate = ({ image, name }) => {
	return (
		<div className="affiliate">
			<div className="affiliate-image-container">
				<img src={image} alt="Networking alternate text" />
			</div>
			<p>{name}</p>
		</div>
	);
};

export default Affiliate;

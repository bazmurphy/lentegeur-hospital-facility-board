import "./Affiliate.css";

const Affiliate = ({ image, name, altText }) => {
	return (
		<div className="affiliate">
			<div className="affiliate-image-container">
				<img src={image} alt={altText} />
			</div>
			<p>{name}</p>
		</div>
	);
};

export default Affiliate;

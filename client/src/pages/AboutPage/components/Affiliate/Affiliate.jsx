import "./Affiliate.css";

const Affiliate = ({ url, alternativeText }) => {
	return (
		<div className="networking-affiliate">
			<div className="networking-affiliate-image-container">
				<img
					src={url}
					alt={alternativeText}
					className="networking-affiliate-image"
				/>
			</div>
			<p className="networking-affiliate-name">{alternativeText}</p>
		</div>
	);
};

export default Affiliate;

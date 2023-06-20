const Affiliate = ({ image, name }) => {
    return <div>
        <img src={image} alt="circle" className="circle_image" />
        <p>{name}</p>
    </div>;
};

export default Affiliate;
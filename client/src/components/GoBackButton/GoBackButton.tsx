import "./GoBackButton.css";

export interface GoBackProps {
  goBack: () => void;
}

const GoBackButton = ({ goBack }: GoBackProps) => {
  return (
    <button onClick={goBack} className="go-back-button">
      &#8592; Back
    </button>
  );
};

export default GoBackButton;

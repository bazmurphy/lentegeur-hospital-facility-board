import "./Line.css";

export interface LineProps {
  extraClass: string;
}

const Line = ({ extraClass }: LineProps) => {
  return <div className={`line ${extraClass}`}></div>;
};

export default Line;

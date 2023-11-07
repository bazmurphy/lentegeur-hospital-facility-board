import "./ErrorPage.css";
import Line from "../../components/Line/Line";

export interface ErrorPageProps {
  error: Error | null;
}

const ErrorPage = ({ error }: ErrorPageProps) => {
  console.log("ErrorPage error:", error);

  return (
    <div className="error-page">
      <h1 className="error-page-title">Error</h1>
      <Line extraClass={"error-page-line"} />
      <div className="error-page-subcontainer">
        <p className="error-page-message">{error?.message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;

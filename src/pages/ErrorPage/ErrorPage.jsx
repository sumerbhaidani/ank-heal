import "./ErrorPage.scss";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function ErrorPage() {
  return (
    <>
      <Header />
      <div className="error-page">
        <h1 className="error-page__instruction">
          Error 404: This Page Doesn't Exist
        </h1>
        <p className="error-page__instruction">
          Please click the back button or one of the links above
        </p>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;

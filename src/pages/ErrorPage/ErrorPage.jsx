import "./ErrorPage.scss";

function ErrorPage() {
  return (
    <div className="error-page">
      <h1 className="error-page__instruction">
        Error 404: This Page Doesn't Exist
      </h1>
      <p className="error-page__instruction">
        Please click the back button or one of the links above
      </p>
    </div>
  );
}

export default ErrorPage;

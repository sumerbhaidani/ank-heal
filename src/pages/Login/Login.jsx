import "./Login.scss";

function Login() {
  return (
    <form action="" className="login-form">
      <label htmlFor="" className="login-form__label">
        Username
      </label>
      <input type="text" className="login-form__input" placeholder="Username" />
      <label htmlFor="" className="login-form__label">
        Password
      </label>
      <input type="text" className="login-form__input" placeholder="Password" />
      <button className="login-form__submit-button">Login</button>
    </form>
  );
}

export default Login;

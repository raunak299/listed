import "./Authentication.css";
import { useHistory } from "react-router-dom";
function Authentication() {
  const history = useHistory();

  const handleLogIn = () => {
    history.push("./dashboard");
  };

  return (
    <div className="auth-root">
      <div className="auth-banner">Board.</div>
      <div className="register-card-root">
        <div className="register-card">
          <h1 className="register-card-title">Sign In</h1>
          <h1 className="register-card-subTitle">Sign in to your account</h1>
          <div className="external-register-btn">
            <button id="signInbtn" onClick={handleLogIn}>
              <img src="./google.svg" alt="google" />
              Sign in with Google
            </button>
            <button onClick={handleLogIn}>
              <img src="./apple.svg" alt="apple" />
              Sign in with Apple
            </button>
          </div>
          <form className="register-form">
            <div className="form-field">
              <label>Email Address</label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label>Password</label>
              <input type="text" />
            </div>
            <a className="forget-password" href="#signInBtn">
              {" "}
              forget Password?
            </a>
            <button className="sign-in-btn" onClick={handleLogIn}>
              Sign In
            </button>
          </form>
          <div className="no-account">
            Don’t have an account?&nbsp;
            <span onClick={handleLogIn}>Register here</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authentication;

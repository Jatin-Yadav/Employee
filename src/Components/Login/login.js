import React, { useState } from "react";
import "./login.css";

function Login({ setDashboard }) {
  const [signup, setSignup] = useState(false);
  const [forgotpass, setForgotpass] = useState(false);
  const handlesubmit = () => {
    setDashboard(true);
  };
  const handleSigniup = () => {
    setSignup(!signup);
  };
  const handleForgotPass = (str) => {
    if (str === "forgotPassword") {
      setForgotpass(!forgotpass);
    } else {
      if (str === "login") {
        setForgotpass(false);
        setSignup(false);
      } else {
        setForgotpass(false);
        setSignup(true);
      }
    }
  };
  return (
    <div className="loginwrapper">
      {forgotpass && (
        <div class="main">
          <p class="sign" align="center">
            Forgot Your Password ?
          </p>
          <form class="form1">
            <input
              className="user"
              type="text"
              align="center"
              placeholder="Email"
            />
            <button className="submitbtn">Reset Password</button>
            <p class="signup" align="center">
              <a href="/#">
                "Already a member?"
                <span
                  onClick={() => {
                    handleForgotPass("login");
                  }}
                >
                  "Log In?"
                </span>
              </a>
            </p>
            <p class="signup" align="center">
              <a href="/#">
                "Not a member?"
                <span
                  onClick={() => {
                    handleForgotPass("signup");
                  }}
                >
                  "SignUp?"
                </span>
              </a>
            </p>
          </form>
        </div>
      )}
      {!forgotpass && (
        <div class="main">
          <p class="sign" align="center">
            {signup ? "Sign Up" : "Log In"}
          </p>
          <form class="form1">
            {signup && (
              <input
                className="user"
                type="text"
                align="center"
                placeholder="User Name"
              />
            )}
            <input
              className="user"
              type="text"
              align="center"
              placeholder={signup ? "Email" : "Username"}
            />
            <input
              className="pass"
              type="password"
              align="center"
              placeholder={signup ? "Set Password" : "Password"}
            />
            {!signup && (
              <div className="forgot">
                <p>
                  <a
                    href="/#"
                    onClick={() => {
                      handleForgotPass("forgotPassword");
                    }}
                  >
                    Forgot Password?
                  </a>
                </p>
              </div>
            )}
            <button className="submitbtn" onClick={handlesubmit}>
              {signup ? "Sign Up" : "Log In"}
            </button>
            <p class="signup" align="center">
              <a href="/#">
                {signup ? "Already a member?" : "Not a member?"}
                <span onClick={handleSigniup}>
                  {signup ? "Log In?" : "SignUp?"}
                </span>
              </a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;

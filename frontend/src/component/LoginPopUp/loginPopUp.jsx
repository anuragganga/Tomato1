import React, { useState } from 'react'
import './loginPopUp.css'
import { assets } from '../../assets/assets';

const LoginPopUp = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="text" placeholder="Your Email" required />
          <input type="text" placeholder="Your Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-checkbox">
          <input type="checkbox" />
          <p>
            By continuing, I agree to the terms and condition and privacy policy
          </p>
        </div>
        <div>
          {currState === "Login" ? (
            <p>
              Create a new account{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account{" "}
              <span onClick={() => setCurrState("Login")}>Click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginPopUp

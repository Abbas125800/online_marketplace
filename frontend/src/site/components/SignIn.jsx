import React from "react";
import "../css/SignIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
const SignIn = () => {
  return (
    <div className="auth-form-container">
      <h2 className="text-center mb-3">Sign In or Create Account</h2>

      {/* دکمه ورود با گوگل */}
      <button className="btn google-btn w-100 mb-3 d-flex align-items-center justify-content-center">
        <FcGoogle size={24} className="me-2" />
        Continue With Google
      </button>

      <div className="text-center mb-3">or</div>

      {/* فرم اصلی */}
      <form className="auth-form">
        <input
          type="email"
          placeholder="Email Address..."
          className="form-control mb-2"
        />
        <input
          type="password"
          placeholder="Enter your Password..."
          className="form-control mb-2"
        />
        <input
          type="password"
          placeholder="Confirm Your Password..."
          className="form-control mb-3"
        />
        <button type="submit" className="btn continue-btn w-100">
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignIn;

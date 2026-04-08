import React from "react";
import "../css/SignUpForm.css"; // فایل استایل جدا
import googleIcon from "../../assets/icon/googleIcon.svg"; // آیکن گوگل

const SignUpForm = () => {
  return (
    <div className="auth-form-container">
      <h2 className="text-center mb-3">Sign Up Or Create Account</h2>

      {/* دکمه ورود با گوگل */}
      <button className="btn google-btn w-100 mb-3 d-flex align-items-center justify-content-center">
        <img
          src={googleIcon}
          alt="google"
          width={24}
          height={24}
          className="me-2"
        />
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
        <button type="submit" className="btnSave w-100">
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;

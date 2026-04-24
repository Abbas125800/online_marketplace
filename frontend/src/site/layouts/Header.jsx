import React from "react";
import "../css/Header.css";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import ChooseLanguage from "../components/ChooseLanguage";
import ChooseLocation from "../components/ChooseLocation";
import { useState } from "react";
// آیکن‌های لوکال
import userIcon from "../../assets/icon/user_21.svg";
import languageIcon from "../../assets/icon/globe-language-svgrepo-com.svg";
import ShopSlider from "../components/ShopSlider";
import NewSlider from "../components/NewSlider";
import BestProductSlider from "../components/BestProductSlider";
// import { ShopSlider } from "../components/ShopSlider";
const Header = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [showChooseLocation, setShowChooseLocation] = useState(false);
  return (
    <header className="header bg-light border-bottom">
      {/* منوی بالا کل هدر */}
      <div className="container-fluid d-flex justify-content-between align-items-center py-2 topMenu">
        {/* سمت چپ: لوگو و جستجو */}
        <div id="leftMenu" className="d-flex align-items-center gap-3">
          {/* لوگو فروشگاه */}
          <img id="logoShop" className="logoShop" src="" alt="Logo Shop" />

          {/* نوار جستجو */}
          <button
            id="chooseLocation"
            className="btn "
            onClick={() => setShowChooseLocation(true)}
          >
            <p>Deliver To</p>
            <span className="locationIcon">📍</span>
            choose
          </button>
        </div>
        {/* مودال برای انتخاب موقعیت */}
        {showChooseLocation && (
          <div className="location-modal">
            <button
              className="close-btn"
              onClick={() => setShowChooseLocation(false)}
            >
              ✖
            </button>
            <ChooseLocation />
          </div>
        )}

        {/* سمت راست: زبان و حساب کاربری */}
        <div id="rightMenu" className="d-flex align-items-center gap-3">
          {/* انتخاب زبان */}
          <div
            id="languageSelector"
            className="d-flex align-items-center gap-1 position-relative"
          >
            <img src={languageIcon} width={24} height={24} alt="Language" />
            <button
              id="selectLang"
              className="btn btn-outline-secondary btn-sm"
              onClick={() => setShowLanguageSelector(true)}
            >
              Language
            </button>
          </div>
          {/* =============== */}
          {/* مودال برای انتخاب زبان */}
          {showLanguageSelector && (
            <div className="language-modal">
              <button
                className="close-btn"
                onClick={() => setShowLanguageSelector(false)}
              >
                ✖
              </button>
              <ChooseLanguage />
            </div>
          )}

          {/* منوی کاربر */}
          <div id="userMenu" className="d-flex align-items-center ">
            <img src={userIcon} width={24} height={24} alt="User" />
            <button
              id="signInBtn"
              className="btn"
              onClick={() => setShowSignInForm(true)}
            >
              Sign in
            </button>
          </div>
          {/* مودال برای ورود */}
          {showSignInForm && (
            <div className="auth-overlay">
              <div className="auth-modal">
                <button
                  className="close-btn"
                  onClick={() => setShowSignInForm(false)}
                >
                  ✖
                </button>
                <SignInForm />
              </div>
            </div>
          )}
          {/* دکمه ثبت‌نام */}
          <button
            id="signUpBtn"
            className="btn btn-primary btn-sm"
            onClick={() => setShowSignUpForm(true)}
          >
            Create Account
          </button>
          {/* -- مودال برای کریت اکونت---- */}
          {showSignUpForm && (
            <div className="auth-overlay">
              <div className="auth-modal">
                <button
                  className="close-btn"
                  onClick={() => setShowSignUpForm(false)}
                >
                  ✖
                </button>
                <SignUpForm />
              </div>
            </div>
          )}
        </div>
      </div>
       
      
    </header>
  );
};

export default Header;

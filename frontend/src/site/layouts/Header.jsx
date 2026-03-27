import React from "react";
import "../css/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

// آیکن‌های لوکال
import userIcon from "../../assets/icon/user_21.svg";
import languageIcon from "../../assets/icon/globe-language-svgrepo-com.svg";

const Header = () => {
  return (
    <header className="header bg-light border-bottom">
      {/* منوی بالا کل هدر */}
      <div className="container-fluid d-flex justify-content-between align-items-center py-2 topMenu">

        {/* سمت چپ: لوگو و جستجو */}
        <div id="leftMenu" className="d-flex align-items-center gap-3">
          {/* لوگو فروشگاه */}
          <img id="logoShop" className="logoShop" src="" alt="Logo Shop" />

          {/* نوار جستجو */}
          <button id="chooseLocation" className="btn ">
            <p>Deliver To</p>
            <span className="locationIcon">📍</span>
            choose
          </button>
        </div>

        {/* سمت راست: زبان و حساب کاربری */}
        <div id="rightMenu" className="d-flex align-items-center gap-3">
          
          {/* انتخاب زبان */}
          <div id="languageSelector" className="d-flex align-items-center gap-1">
            <img src={languageIcon} width={24} height={24} alt="Language" />
            <button id="selectLang" className="btn btn-outline-secondary btn-sm">
              Language
            </button>
          </div>

          {/* منوی کاربر */}
          <div id="userMenu" className="d-flex align-items-center ">
            <img src={userIcon} width={24} height={24} alt="User" />
            <button id="signInBtn" className="btn">
              Sign in
            </button>
          </div>

          {/* دکمه ثبت‌نام */}
          <button id="signUpBtn" className="btn btn-primary btn-sm">
            Create Account
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

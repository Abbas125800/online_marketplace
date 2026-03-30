import React from "react";
import "../css/Header.css";

// آیکن‌های لوکال
import userIcon from "../../assets/icon/user_21.svg";
import languageIcon from "../../assets/icon/globe-language-svgrepo-com.svg";

const Header = () => {
  const changeBackground = (event) => {
    const buttons = document.querySelectorAll(".ChangeBackground");
    const header = document.querySelector(".header");

    let clickedBtn = event.target;

    // اگر همین دکمه قبلاً فعال بود → خاموش کن
    if (clickedBtn.classList.contains("backgroundChange")) {
      clickedBtn.classList.remove("backgroundChange");
      header.classList.remove("bg-change");
      return;
    }

    // در غیر این صورت
    buttons.forEach((btn) => btn.classList.remove("backgroundChange"));

    clickedBtn.classList.add("backgroundChange");
    header.classList.add("bg-change");
  };

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
            <p>Location </p>
            <span className="locationIcon">📍</span>
            choose
          </button>
        </div>

        {/* سمت راست: زبان و حساب کاربری */}
        <div id="rightMenu" className="d-flex align-items-center gap-3">
          {/* انتخاب زبان */}
          <div
            id="languageSelector"
            className="d-flex align-items-center gap-1"
          >
            <img src={languageIcon}  width={24} height={24} alt="Language" />
            <button
              id="selectLang"
              className="btn btn-outline-secondary btn-sm"
            >
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
      {/* ناو بار منو اصلی */}
      <div className="container-fluid d-flex flex-column align-items-start py-2 topMenu">
        <ul
          className="nav nav-tabs"
          id="myTab"
          role="tablist"
          style={{ borderBottom: "0" }}
        >
          <li className="nav-item">
            <button
              className="nav-link ChangeBackground"
              id="all-category-tab"
              data-bs-toggle="tab"
              data-bs-target="#all-category"
              onClick={changeBackground}
            >
              All Categories
            </button>
          </li>

          <li className="nav-item">
            <button
              className="nav-link ChangeBackground"
              id="shop-tab"
              data-bs-toggle="tab"
              data-bs-target="#shop"
              onClick={changeBackground}
            >
              Shops
            </button>
          </li>

          <li className="nav-item">
            <button
              className="nav-link ChangeBackground"
              id="app-tab"
              data-bs-toggle="tab"
              data-bs-target="#app"
              onClick={changeBackground}
            >
              App
            </button>
          </li>

          <li className="nav-item">
            <button
              className="nav-link ChangeBackground"
              id="create-shop-tab"
              data-bs-toggle="tab"
              data-bs-target="#create-shop"
              onClick={changeBackground}
            >
              Create Shop
            </button>
          </li>

          <li className="nav-item">
            <button
              className="nav-link ChangeBackground"
              id="about-tab"
              data-bs-toggle="tab"
              data-bs-target="#about"
              onClick={changeBackground}
            >
              About
            </button>
          </li>
        </ul>
        <div className="tab-content px-3 py-2">
          <div
            style={{ backgroundColor: "red", padding: "8px 12px" }}
            className="tab-pane fade show"
            id="all-category"
            aria-labelledby="all-category-tab"
          >
            All Categories Content
          </div>

          <div className="tab-pane fade" id="shop" aria-labelledby="shop-tab">
            Shops Content
          </div>

          <div className="tab-pane fade" id="app" aria-labelledby="app-tab">
            App Content
          </div>

          <div
            className="tab-pane fade"
            id="create-shop"
            aria-labelledby="create-shop-tab"
          >
            Create Shop Content
          </div>

          <div className="tab-pane fade" id="about" aria-labelledby="about-tab">
            About Content
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useRef, useEffect } from "react";
import "../css/ChooseLanguage.css";

const ChooseLanguage = () => {
  return (
    <div className="ChooseFormContainer">
      <h2 className="text-star mb-3">Choose your language</h2>
      <div class="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Choose Language
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button className="dropdown-item" type="button">
            English
          </button>
          <button className="dropdown-item" type="button">
            دری
          </button>
          <button className="dropdown-item" type="button">
            پشتو
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseLanguage;

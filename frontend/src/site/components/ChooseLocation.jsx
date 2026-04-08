import React from "react";
import "../css/ChooseLocation.css"; // فایل استایل جدا
const ChooseLocation = () => {
  return (
    <div className="ChooseFormContainer">
      <h2 className="text-start mb-3">Choose Your Location</h2>
      <p>please select your curent location for your location</p>
       <div class="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Choose Your province
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button className="dropdown-item" type="button">
            Kabul
          </button>
          <button className="dropdown-item" type="button">
            Herat   
          </button>
          <button className="dropdown-item" type="button">
            Kandahar
          </button>
          <button className="dropdown-item" type="button">
            Kandahar
          </button>
          <button className="dropdown-item" type="button">
            Kandahar
          </button>
        </div>
      </div>
      <button type="submit" className="saveBtn mt-2 w-100">
        save
      </button>
    </div>
  );
};

export default ChooseLocation;

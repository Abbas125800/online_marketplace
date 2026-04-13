import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNotification } from "../../components/context/NotificationContext.jsx";

import AdminHeader from "../../components/Header.jsx";
import AdminSidebar from "../../components/Sidebar.jsx";
import AdminFooter from "../../components/Footer.jsx";

import "../../styles/CreateUserStyle.css";
import "../../styles/tooltip.css";

import Backicon from "../../../assets/Adminicons/back.svg";
import Saveicon from "../../../assets/Adminicons/save.svg";

import { useLang } from "../../components/context/LangContext.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

const CreateUser = () => {
  const { showNotification, hideNotification } = useNotification();

const { t } = useLang();

// ---------------- STATE ----------------
const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  identityNumber: "",
  location: "",
  password: "",
  province: "",
  district: "",
  role: "",
  verified: false,
  userImage: null,
  backgroundImage: null,
};

const [formData, setFormData] = useState(initialState);

const [provinces, setProvinces] = useState([]);
const [districts, setDistricts] = useState([]);
const [roles, setRoles] = useState([]);

// ---------------- HANDLERS ----------------
const handleChange = (e) => {
  const { name, value, type, checked, files } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
  }));
};

// ---------------- FETCH DATA ----------------
const fetchProvinces = async () => {
  try {
     const API_URL = import.meta.env.VITE_API_URL;
     const res = await axios.get(`${API_URL}/provinces`);

    setProvinces(res.data);
  } catch (err) {
    console.error("Provinces Error:", err);
  }
};

const fetchRoles = async () => {
  try {
     const API_URL = import.meta.env.VITE_API_URL;
     const res = await axios.get(`${API_URL}/roles`);

    setRoles(res.data);
  } catch (err) {
    console.error("Roles Error:", err);
  }
};

const fetchDistricts = async (provinceId) => {
  try {
     const API_URL = import.meta.env.VITE_API_URL;
     const res = await axios.get(`${API_URL}/districts/${provinceId}`);

    
    setDistricts(res.data);
  } catch (err) {
    console.error("Districts Error:", err);
  }
};

// ---------------- EFFECTS ----------------
useEffect(() => {
  fetchProvinces();
  fetchRoles();
}, []);

useEffect(() => {
  if (!formData.province) {
    setDistricts([]);
    setFormData((prev) => ({ ...prev, district: "" }));
    return;
  }

  fetchDistricts(formData.province);

  setFormData((prev) => ({
    ...prev,
    district: "",
  }));
}, [formData.province]);

// ---------------- SUBMIT ----------------
const handleSubmit = async (e) => {
  e.preventDefault();
//  
  showNotification(t("loadingAlert"), "loading");

  const data = new FormData();

  Object.keys(formData).forEach((key) => {
    if (key === "province") return; 

    if (key === "verified") {
      data.append(key, formData[key] ? 1 : 0);
    } else if (formData[key] !== null) {
      data.append(key, formData[key]);
    }
  });

  try {
     const API_URL = import.meta.env.VITE_API_URL;
     await axios.get(`${API_URL}/users`, data, {
       headers: {
         "Content-Type": "multipart/form-data",
       },
     });

     hideNotification();
     showNotification(t("saveUserAlert"), "success");

    setFormData(initialState);
    setDistricts([]);
  } catch (err) {
   hideNotification();
   showNotification(t("errorSaveUserAlert"), "error");

   console.error(err);
  }
};
  return (
    <div>
      <AdminHeader />
      <main className="d-flex pt-2">
        <AdminSidebar />
        <div className="form-container items-start text-end">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>{t("createUser")}</h4>
            <NavLink
              to="/admin/users"
              className="btn btn-info action-btn"
              data-tooltip={t("back")}
            >
              <img src={Backicon} className="icons" alt="" />
            </NavLink>
          </div>

          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-4">
              <label for="firstName" className="form-label">
                {t("firstName")}
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                className="form-control"
                id="firstName"
                required
              />
            </div>

            <div className="col-md-4">
              <label for="lastName" className="form-label">
                {t("lastName")}
              </label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                className="form-control"
                id="lastName"
                required
              />
            </div>

            <div className="col-md-4">
              <label for="phone" className="form-label">
                {t("phone")}
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="number"
                className="form-control"
                id="phone"
                placeholder="07xxxxxxxx"
                required
              />
            </div>

            <div className="col-md-4">
              <label for="email" className="form-label">
                {t("email")}
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="form-control"
                id="email"
                placeholder="user@example.com"
                required
              />
            </div>

            <div className="col-md-4">
              <label for="identityNumber" className="form-label">
                {t("identityNumber")}
              </label>
              <input
                name="identityNumber"
                value={formData.identityNumber}
                onChange={handleChange}
                type="number"
                className="form-control"
                id="identityNumber"
                placeholder="123456789"
                required
              />
            </div>

            <div className="col-md-4">
              <label for="location" className="form-label">
                {t("location")}
              </label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                type="text"
                className="form-control"
                id="location"
                placeholder={t("placeholderLocation")}
                required
              />
            </div>

            <div className="col-md-4">
              <label for="userImage" className="form-label">
                {t("userImage")}
              </label>
              <input
                name="userImage"
                onChange={handleChange}
                type="file"
                className="form-control"
                id="userImage"
                required
              />
            </div>

            <div className="col-md-4">
              <label for="backgroundImage" className="form-label">
                {t("backgroundImage")}
              </label>
              <input
                name="backgroundImage"
                onChange={handleChange}
                type="file"
                className="form-control"
                id="backgroundImage"
                required
              />
            </div>

            <div className="col-md-4">
              <label for="password" className="form-label">
                {t("password")}
              </label>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                className="form-control"
                id="password"
                required
              />
            </div>

            {/* Grouped selects in one row */}
            <div className="col-md-4">
              <select
                className="form-select"
                name="province"
                value={formData.province}
                onChange={handleChange}
                id="province"
              >
                <option value="">{t("selectProvince")}</option>
                {provinces.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-4">
              <select
                className="form-select"
                name="district"
                value={formData.district}
                onChange={handleChange}
                id="district"
              >
                <option value="">انتخاب ولسوالی</option>
                {districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-4">
              <select
                className="form-select"
                name="role"
                value={formData.role}
                onChange={handleChange}
                id="role"
              >
                <option value="">{t("selectRole")}</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-auto">
              <div className="form-check">
                <input
                  name="verified"
                  className="form-check-input"
                  type="checkbox"
                  checked={formData.verified}
                  onChange={handleChange}
                  placeholder=""
                  id="verified"
                  required
                />
                <label className="form-check-label" for="verified">
                  {t("verified")}
                </label>
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn btn-success action-btn"
                type="submit"
                data-tooltip={t("saveButton")}
              >
                <img src={Saveicon} className="icons" alt="" />
              </button>
            </div>
          </form>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default CreateUser;

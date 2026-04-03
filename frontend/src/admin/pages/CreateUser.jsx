import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/Header.jsx";
import AdminSidebar from "../components/Sidebar.jsx";
import AdminFooter from "../components/Footer.jsx";
import "../styles/UserLayoutStyle.css";
import { useLang } from "../components/context/LangContext";

import "bootstrap/dist/css/bootstrap.min.css";

const CreateUser = () => {
  const { t } = useLang();
  return (
    <div>
      <AdminHeader />
      <main className="d-flex pt-2">
        <AdminSidebar />
        <div className="container items-start  text-end">
          <h2>{t("createUser")}</h2>
          <form class="row g-3">
            <div class="col-md-4">
              <label for="firstName" class="form-label">
                {t("firstName")}
              </label>
              <input type="text" class="form-control" id="firstName" required />
            </div>
            <div class="col-md-4">
              <label for="lastName" class="form-label">
                {t("lastName")}
              </label>
              <input type="text" class="form-control" id="lastName" required />
            </div>
            <div class="col-md-4">
              <label for="phone" class="form-label">
                {t("phone")}
              </label>
              <input
                type="number"
                class="form-control"
                id="phone"
                placeholder="07xxxxxxxx"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="email" class="form-label">
                {t("email")}
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="user@example.com"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="identityNumber" class="form-label">
                {t("identityNumber")}
              </label>
              <input
                type="number"
                class="form-control"
                id="identityNumber"
                placeholder="123456789"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="location" class="form-label">
                {t("location")}
              </label>
              <input
                type="text"
                class="form-control"
                id="location"
                placeholder={t("placeholderLocation")}
                required
              />
            </div>
            <div class="col-md-4">
              <label for="userImage" class="form-label">
                {t("userImage")}
              </label>
              <input type="file" class="form-control" id="userImage" required />
            </div>
            <div class="col-md-4">
              <label for="backgroundImage" class="form-label">
                {t("backgroundImage")}
              </label>
              <input
                type="file"
                class="form-control"
                id="backgroundImage"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="password" class="form-label">
                {t("password")}
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                required
              />
            </div>
            {/* Grouped selects in one row */}
              <div className="col-md-4">
                <select className="form-select" name="province" id="province">
                  <option value="">{t("selectProvince")}</option>
                  <option value="kabul">Kabul</option>
                  <option value="kandahar">Kandahar</option>
                  <option value="herat">Herat</option>
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-select" name="district" id="district">
                  <option value="">{t("selectDistrict")}</option>
                  <option value="district1">District 1</option>
                  <option value="district2">District 2</option>
                  <option value="district3">District 3</option>
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-select" name="role" id="role">
                  <option value="">{t("selectRole")}</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
          
            <div class="col-auto">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  placeholder=""
                  id="verified"
                  required
                />
                <label class="form-check-label" for="verified">
                  {t("verified")}
                </label>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                {t("createUserbtn")}
              </button>
            </div>
          </form>
        </div>
        <Outlet />
      </main>
      <AdminFooter />
    </div>
  );
};

export default CreateUser;

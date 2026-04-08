
import { useLang } from "../../components/context/LangContext.jsx";

import AdminHeader from "../../components/Header.jsx";
import AdminSidebar from "../../components/Sidebar.jsx";
import AdminFooter from "../../components/Footer.jsx";

import "../../styles/CreateUserStyle.css";
import "../../styles/tooltip.css";

import Backicon from "../../../assets/Adminicons/back.svg";
import Saveicon from "../../../assets/Adminicons/save.svg";

import "bootstrap/dist/css/bootstrap.min.css";

const EditUser = () => {
  const { t } = useLang();

  return (
    <div>
      <AdminHeader />
      <main className="d-flex pt-2">
        <AdminSidebar />
        <div className="form-container items-start text-end">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>{t("editUser")}</h4>
            <NavLink
              to="/admin/users"
              className="btn btn-info action-btn"
              data-tooltip={t("back")}
            >
              <img src={Backicon} className="icons" alt="" />
            </NavLink>
          </div>

          <form onSubmit={handleSubmit} className="row g-3">
            {/* Inputs مشابه CreateUser */}
            <div className="col-md-4">
              <label htmlFor="firstName" className="form-label">
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
              <label htmlFor="lastName" className="form-label">
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
              <label htmlFor="phone" className="form-label">
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
              <label htmlFor="email" className="form-label">
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
              <label htmlFor="identityNumber" className="form-label">
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
              <label htmlFor="location" className="form-label">
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
              <label htmlFor="userImage" className="form-label">
                {t("userImage")}
              </label>
              <input
                name="userImage"
                onChange={handleChange}
                type="file"
                className="form-control"
                id="userImage"
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="backgroundImage" className="form-label">
                {t("backgroundImage")}
              </label>
              <input
                name="backgroundImage"
                onChange={handleChange}
                type="file"
                className="form-control"
                id="backgroundImage"
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="password" className="form-label">
                {t("password")}
              </label>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                className="form-control"
                id="password"
                placeholder="Leave empty if no change"
              />
            </div>

            {/* Selects */}
            <div className="col-md-4">
              <select
                className="form-select"
                name="province"
                value={formData.province}
                onChange={handleChange}
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
              >
                <option value="">{t("selectDistrict")}</option>
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
                  id="verified"
                />
                <label className="form-check-label" htmlFor="verified">
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

export default EditUser;

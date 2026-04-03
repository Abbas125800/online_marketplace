import { Outlet } from "react-router-dom";
import AdminHeader from "../components/Header";
import AdminFooter from "../components/Footer";
import AdminSidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AdminLayoutStyle.css";
import { useLang } from "../components/context/LangContext";

const UserLayout = () => {
  const { t } = useLang();

  return (
    <div>
      <AdminHeader />
      <main className="d-flex pt-2">
        <AdminSidebar />

        <div className="container mt-4">
          {/* Title */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <NavLink to="/admin/create-user" className="btn btn-success">
              {t("createUser")}
            </NavLink>
            <h3> {t("usersManagement")}</h3>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover text-center align-middle mb-0 shadow table-light table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>{t("profile")}</th>
                  <th>{t("firstName")}</th>
                  <th>{t("lastName")}</th>
                  <th>{t("email")}</th>
                  <th>{t("phone")}</th>
                  <th>{t("role")}</th>
                  <th>{t("status")}</th>
                  <th>{t("actions")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <img
                      src="https://i.pravatar.cc/40"
                      alt="Profile"
                      className="avatar"
                    />
                  </td>
                  <td>name</td>
                  <td>lastName</td>
                  <td>email</td>
                  <td>phone</td>
                  <td>
                    <span>admin</span>
                  </td>
                  <td>
                    <span className="text-success">✔ تایید شده</span>
                  </td>
                  <td className="">
                    <button className="btn btn-sm btn-warning me-1 mx-2">
                      {t("edit")}
                    </button>
                    <button className="btn btn-sm btn-danger">
                      {t("delete")}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Outlet />
      </main>
      <AdminFooter />
    </div>
  );
};

export default UserLayout;

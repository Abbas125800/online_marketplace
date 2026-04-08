import { Navigate, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import AdminHeader from "../components/Header";
import AdminFooter from "../components/Footer";
import AdminSidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/UserLayoutStyle.css";
import "../styles/tooltip.css";
import React, { useState, useEffect } from "react";

import { useNotification } from "../components/context/NotificationContext";

import Addicon from "../../assets/Adminicons/Add";
import Deleteicon from "../../assets/Adminicons/Delete";
import Editicon from "../../assets/Adminicons/Edit";

import { useLang } from "../components/context/LangContext";

const UserLayout = () => {
  const { showNotification, hideNotification } = useNotification();
  const { t } = useLang();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // گرفتن کاربران از API
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError("");
      try {
        const API_URL = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${API_URL}/users`);

        setUsers(res.data);
      } catch (err) {
        addNotification(
          "danger",
          t("errorLoadingData") || "Failed to fetch users",
        );
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [t]);

  // حذف کاربر
  const handleDelete = async (id) => {
    if (!window.confirm(t("confirmDelete"))) return;
    showNotification(t("loadingDelete"), "loading");

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      await axios.delete(`${API_URL}/users/${id}`);

      // حذف از state بعد از موفقیت
      setUsers(users.filter((u) => u.id !== id));
      hideNotification();
      showNotification(t("deleteSuccess"), "success");
    } catch (err) {
      hideNotification();
      showNotification(t("errorDelete"), "error");
      console.error(err);
    }
  };

  const navigate = useNavigate();

  // ویرایش کاربر
  const handleEdit = (id) => {
    // ریدایرکت به مسیر ویرایش با id کاربر
    navigate(`/admin/users/edit/${id}`);
  };

  if (loading) return <p>{t("loading") || "Loading..."}</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <AdminHeader />
      <main className="d-flex pt-2">
        <AdminSidebar />

        <div className="container mt-4">
          {/* Title */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <NavLink
              to="/admin/create-user"
              className="btn btn-success action-btn"
              data-tooltip={t("createUser")}
            >
              <Addicon />
            </NavLink>
            <h3> {t("usersManagement")}</h3>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table custom-table align-middle">
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
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={user.profile || "https://i.pravatar.cc/40"}
                          alt="Profile"
                          className="avatar"
                        />
                      </td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        <span className="text-primary">{user.admin}</span>
                      </td>
                      <td>
                        <span
                          className={`status ${user.status === "active" ? "success" : "warning"}`}
                        >
                          {user.status === "active" ? "active" : "Inactive"}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn action-btn edit-btn"
                          data-tooltip={t("edit")}
                          onClick={() => handleEdit(user.id)}
                        >
                          <Editicon />
                        </button>

                        <button
                          className="btn action-btn delete-btn"
                          data-tooltip={t("delete")}
                          onClick={() => handleDelete(user.id)}
                        >
                          <Deleteicon />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center">
                      {t("noData")}
                    </td>
                  </tr>
                )}
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

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/SidebarStyle.css";
import { useLang } from "./context/LangContext";


const AdminSidebar = () => {
  const { t } = useLang();

  return (
    <aside className="sidebar rounded-3">
      <h2 className="logo">{t("admin")}</h2>

      <nav className="menu">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `nav-link item ${isActive ? "active" : ""}`
          }
        >
          {t("dashboard")}
        </NavLink>

        <NavLink
          to="/admin/users"
          end
          className={({ isActive }) =>
            `nav-link item ${isActive ? "active" : ""}`
          }
        >
          {t("users")}
        </NavLink>

        <NavLink
          to="/admin/products"
          end
          className={({ isActive }) =>
            `nav-link item ${isActive ? "active" : ""}`
          }
        >
          {t("products")}
        </NavLink>

        <NavLink
          to="/admin/orders"
          end

          className={({ isActive }) =>
            `nav-link item ${isActive ? "active" : ""}`
          }
        >
          {t("orders")}
        </NavLink>

        <NavLink
          to="/admin/settings"
          end
          className={({ isActive }) =>
            `nav-link item ${isActive ? "active" : ""}`
          }
        >
          {t("settings")}
        </NavLink>
      </nav>
    </aside>
  );
}
export default AdminSidebar;
import React from "react";
import "../styles/HeaderStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLang } from "./context/LangContext";

const AdminHeader = () => {
  const { lang, setLang, t } = useLang();
  

  const languages = [
    { code: "fa", label: "دری" },
    { code: "ps", label: "پشتو" },
    // بعداً اضافه می‌کنیم
    { code: "en", label: "English" },
  ];
  return (
    <header className="AdminHeader d-flex items-center justify-content-between p-3 bg-light">
      {/* سمت چپ */}
      <div className="d-flex items-center">
        <h5 className="m-0">{t("dashboard")}</h5>
      </div>

      {/* سمت راست */}
      <div className="d-flex items-center gap-3">
        <input type="text" placeholder={t("searchPlaceholder")} className="search" />

        {/* Language Selector */}
        <select
          className="form-select w-auto"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          {languages.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>

        <span className="icon">🔔</span>

        <div className="profile">
          <img src="https://i.pravatar.cc/40" alt="user" className="avatar" />
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
};
export default AdminHeader;

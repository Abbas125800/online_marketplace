import { useEffect } from "react";
import api from "./services/api";
import { useLang, LangProvider } from "./admin/components/context/LangContext";

import { NotificationProvider } from "./admin/components/context/NotificationContext.jsx";
import Notification from "./admin/components/Notification.jsx";


import MainLayout from "./site/layouts/MainLayouts.jsx";
import Home from "./site/pages/Home.jsx";

import AdminLayout from "./admin/layouts/AdminLayout.jsx";
import UserLayout from "./admin/layouts/UserLayout.jsx";
import CreateUser from "./admin/pages/userPages/CreateUser.jsx";
import EditUser from "./admin/pages/userPages/EditUser.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// 👇 این کامپوننت داخلی است (خیلی مهم)
function AppContent() {
  const { lang } = useLang();

  // ✅ اتصال زبان به html
  useEffect(() => {
    document.documentElement.setAttribute("data-lang", lang);
  }, [lang]);

  // API تست
  useEffect(() => {
    api
      .get("/test")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* SHOP */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* ADMIN */}
        <Route path="/admin">
          <Route index element={<AdminLayout />} />
          <Route path="users" element={<UserLayout />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="users/edit/:id" element={<EditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// 👇 این App اصلی
function App() {
  return (
    <NotificationProvider>
      <Notification />
      <LangProvider>
        <AppContent />
      </LangProvider>
    </NotificationProvider>
  );
}


 

export default App;

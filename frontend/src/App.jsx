import { useEffect } from "react";
import api from "./services/api";
import "./App.css";

import { LangProvider } from "./admin/components/context/LangContext.jsx"; // مسیر را با پروژه خودت درست کن


import AdminLayout from "./admin/layouts/AdminLayout.jsx";
import UserLayout from "./admin/layouts/UserLayout.jsx";
import MainLayout from "./site/layouts/MainLayouts.jsx";
import CreateUser from "./admin/pages/CreateUser.jsx";

import Home from "./site/pages/Home.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    api
      .get("/test")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <LangProvider>
      {" "}
      {/* <-- این باید دور همه کامپوننت‌ها باشد */}
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
          </Route>
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
}

export default App;

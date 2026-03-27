import { useEffect } from "react";
import api from "./services/api";
import "./App.css";

import AdminLayout from "./admin/layouts/AdminLayouts.jsx";
import MainLayout from "./site/layouts/MainLayouts.jsx";

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
    <BrowserRouter>
      <Routes>
        {/* SHOP */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<h2>Dashboard</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import AdminHeader from "../components/Header";
import AdminFooter from "../components/Footer";
import AdminSidebar from "../components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AdminLayoutStyle.css";

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <main className="d-flex pt-2">
        <AdminSidebar />
        <Outlet />
      </main>
      <AdminFooter />
    </div>
  );
};
export default AdminLayout;

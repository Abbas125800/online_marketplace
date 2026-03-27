import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <>
      <header>Admin Header</header>
      <Outlet />
      <footer>Admin Footer</footer>
    </>
  );
};
export default AdminLayout;

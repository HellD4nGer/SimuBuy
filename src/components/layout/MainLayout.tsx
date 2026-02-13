import { Outlet, NavLink } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex gap-6">
        <NavLink to="/" className="hover:text-blue-400">
          Home 
        </NavLink>

        <NavLink to="/dashboard" className="hover:text-blue-400">
         Dashboard
        </NavLink>

      </nav>


      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

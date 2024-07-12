import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "/logo.svg";
import SidebarIcon from "/sozlamalar.svg";
import AdminIcon from "/tovar.svg";
// import "../../../src/index.css";

const AdminPanel = () => {
  return (
    <div className="flex">
      <div className="fixed flex flex-col w-[97px] bg-[#5B5CE2] h-screen z-10 items-center">
        <img src={Logo} alt="Logo" className="mt-9 mb-9" />
        <NavLink
          className="w-[50px] h-[50px] text-center items-center my-2"
          to="/">
          <img
            src={SidebarIcon}
            alt="Sidebar"
            className="text-center py-[15px] px-[15px]"
          />
        </NavLink>
        <NavLink
          className="w-[50px] h-[50px] text-center items-center my-2"
          to="/admin">
          <img
            src={AdminIcon}
            alt="Admin"
            className="text-center py-[15px] px-[15px]"
          />
        </NavLink>
      </div>
      <div className="ml-[97px] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;

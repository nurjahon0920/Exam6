import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "/logo.svg";
import Sidebar from "/sozlamalar.svg";
import Admin from "/tovar.svg";
// import "../../../src/index.css";

const AdminPanel = () => {
  return (
    <div>
      <div className="fixed flex  w-[97px] bg-[#5B5CE2] h-screen  z-10">
        <div className="ml-5 mt-9">
          <div className="flex flex-col items-center">
            <img src={Logo} alt="" className="mb-9" />
            <NavLink
              className="w-[50px] h-[50px text-center items-center m-auto"
              to="/">
              <img
                src={Sidebar}
                alt=""
                className=" text-center py-[15px] px-[15px]"
              />
            </NavLink>
            <NavLink
              className="w-[50px] h-[50px] text-center items-center m-auto"
              to="/admin">
              <img
                src={Admin}
                alt=""
                className="text-center py-[15px] px-[15px]"
              />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;

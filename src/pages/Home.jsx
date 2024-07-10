import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#EEEEF5]">
      <div className="text-left bg-white py-4 pl-10">
        <h3 className="mb-1 text-[18px] font-bold">Товары</h3>
        <div
          className="flex text-[#B5B5C3] gap-2"
          style={{ boxShadow: "0px 5px 40px 0px #2121210D " }}>
          <Link to="/" className="text-[13px]">
            Главная
          </Link>
          <p className="text-[12px]">/</p>
          <Link to="/Товары" className="text-[13px]">
            Товары
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

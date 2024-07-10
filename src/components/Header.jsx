import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import sozlamalar from "../assets/sozlamalar.svg";
import tovar from "../assets/tovar.svg";

const Header = () => {
  return (
    <div
      className="bg-[#5B5CE2] pt-[30px] px-6 max-w-[100px] h-screen flex flex-col items-center"
      style={{ boxShadow: "10px 0px 50px 0px #0000000D" }}>
      <Link to="/">
        <img src={logo} alt="" className="w-8 h-8 mb-9" />
      </Link>
      <NavLink to="/" className="h-[50px] pt-[15px]">
        <img
          src={sozlamalar}
          alt=""
          className="w-5 h-5 items-center text-center mx-auto"
        />
      </NavLink>
      <NavLink to="/NewProduct" className="h-[50px] pt-[15px]">
        <img
          src={tovar}
          alt=""
          className="w-5 h-5 items-center text-center mx-auto"
        />
      </NavLink>
    </div>
  );
};

export default Header;

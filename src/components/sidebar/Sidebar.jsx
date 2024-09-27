import React, { useContext } from "react";
import autozoomimg from "../../assets/autozoomimg.png";
import { NavLink } from "react-router-dom";
import { LiaHomeSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { SiAtandt } from "react-icons/si";
import { SiModx } from "react-icons/si";
import { FaMapLocationDot } from "react-icons/fa6";
import { BiSolidCity } from "react-icons/bi";
import { IoCarSport } from "react-icons/io5";
import { ValueContext } from "../wrapper/Wrapper";

import "./Sidebar.css";

const Sidebar = () => {
  const { showBtn } = useContext(ValueContext);

  return (
    <div
      className={`bg-[#001529] ${
        showBtn ? "w-[8%]" : "w-1/5"
      } text-gray-400 font-semibold flex flex-col px-1 py-3 text-left ease-in-out duration-700`}
    >
      <h3
        className={`text-center  mt-3 mb-5 text-[24px] ${
          showBtn && "mx-auto"
        } hover:text-white delay-1000 cursor-pointer`}
      >
        {showBtn ? (
          <img src={autozoomimg} className="w-[50px]" />
        ) : (
          "AvtozoomAdmin"
        )}
      </h3>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? `active ${showBtn && "mx-auto"}`
            : `px-[30px] ${
                showBtn && "mx-auto"
              } py-3 rounded-lg flex items-center gap-3 hover:text-white hover:duration-1000`
        }
        to={"/dashboard"}
      >
        <LiaHomeSolid className="text-[22px]" />
        {!showBtn && "Dashboard"}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? `active ${showBtn && "mx-auto"}`
            : `px-[30px] ${
                showBtn && "mx-auto"
              } py-3 rounded-lg flex items-center gap-3 hover:text-white hover:duration-1000`
        }
        to={"/settings"}
      >
        <IoSettingsOutline className="text-[20px]" />
        {!showBtn && "Settings"}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? `active ${showBtn && "mx-auto"}`
            : `px-[30px] ${
                showBtn && "mx-auto"
              } py-3 rounded-lg flex items-center gap-3 hover:text-white hover:duration-1000`
        }
        to={"/brands"}
      >
        <SiAtandt className="text-[20px]" />
        {!showBtn && "Brands"}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? `active ${showBtn && "mx-auto"}`
            : `px-[30px] ${
                showBtn && "mx-auto"
              } py-3 rounded-lg flex items-center gap-3 hover:text-white hover:duration-1000`
        }
        to={"/models"}
      >
        <SiModx className="text-[20px]" />
        {!showBtn && "Models"}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? `active ${showBtn && "mx-auto"}`
            : `px-[30px] ${
                showBtn && "mx-auto"
              } py-3 rounded-lg flex items-center gap-3 hover:text-white hover:duration-1000`
        }
        to={"/locations"}
      >
        <FaMapLocationDot className="text-[20px]" />
        {!showBtn && "Locations"}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? `active ${showBtn && "mx-auto"}`
            : `px-[30px] ${
                showBtn && "mx-auto"
              } py-3 rounded-lg flex items-center gap-3 hover:text-white hover:duration-1000`
        }
        to={"/cities"}
      >
        <BiSolidCity className="text-[20px]" />
        {!showBtn && "Cities"}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? `active ${showBtn && "mx-auto"}`
            : `px-[30px] ${
                showBtn && "mx-auto"
              } py-3 rounded-lg flex items-center gap-3 hover:text-white hover:duration-1000`
        }
        to={"/cars"}
      >
        <IoCarSport className="text-[20px]" />
        {!showBtn && "Cars"}
      </NavLink>
    </div>
  );
};

export default Sidebar;

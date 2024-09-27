import React, { useContext } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { FaRegUser } from "react-icons/fa6";
import { ValueContext } from "../wrapper/Wrapper";

const Navbar = () => {
  const { setShowBtn, showBtn } = useContext(ValueContext);

  return (
    <div
      className={`py-2.5 bg-white sticky top-0 flex justify-between items-center px-7`}
    >
      <button
        onClick={() => setShowBtn(!showBtn)}
        className="py-0 px-4 rounded-[6px] hover:bg-[#1677ffaa] ease-in-out duration-500 h-[35px] bg-[#1677ff]"
      >
        <AiOutlineMenuFold className="text-[20px] text-white" />
      </button>

      <Tooltip title="LogOut" arrow>
        <Button
          sx={{
            textTransform: "none",
            width: "160px",
            border: "1px solid #E2E2E2",
            borderRadius: "8px",
            backgroundColor: "transparent",
            color: "#3e3e3e",
            fontSize: "20px",
            fontFamily: "monospace",
            display: "flex",
            gap: "20px",
            padding: "4px 0",
          }}
        >
          <FaRegUser />
          Admin
        </Button>
      </Tooltip>
    </div>
  );
};

export default Navbar;

import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import { useContext } from "react";
import { ValueContext } from "../wrapper/Wrapper";

const Layouts = () => {
  const { showBtn } = useContext(ValueContext);

  return (
    <div
      className={`relative h-screen flex flex-col justify-between ease-in-out duration-700 ${
        showBtn ? "w-[92%] z-50 ease-in-out duration-700" : "w-[80%]"
      }`}
    >
      <Navbar />
      <div className="flex-grow overflow-y-auto p-[30px] bg-[#4094f726]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layouts;

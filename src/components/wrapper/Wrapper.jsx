import React, { createContext, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Layouts from "../layouts/Layouts";
export const ValueContext = createContext();

const Wrapper = () => {
  const [showBtn, setShowBtn] = useState(false);
  return (
    <div className="flex h-screen justify-between w-[1280px] mx-auto">
      <ValueContext.Provider value={{ showBtn, setShowBtn }}>
        <Sidebar />
        <Layouts />
      </ValueContext.Provider>
    </div>
  );
};

export default Wrapper;

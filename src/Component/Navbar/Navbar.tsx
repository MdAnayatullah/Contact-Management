import React from "react";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="grid place-items-center bg-blue-400 text-white shadow-xl  h-[5rem] text-center w-[100%] sticky top-0">
      <h1 className="text-2xl font-bold capitalize">
        {location.pathname.substring(1) || "Contact Page"}
      </h1>
    </div>
  );
};

export default Navbar;

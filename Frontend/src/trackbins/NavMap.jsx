import React from "react";
import Logo from "../assets/neuroBin.png";
import BinLogo from "../assets/logo_bin.png";

const Navbar = () => {
  return (
    <div className="w-full flex flex-row justify-between px-8 py-4 m-0 items-center">
      <a href="/">
        <img src={Logo} className="h-[30px]" />
      </a>

      {/* <span>
        <img
          src={BinLogo}
          className="h-[30px] border-[2px] border-secondary p-0.5 rounded-md hover:bg-secondary/25 cursor-pointer"
        />
      </span> */}
    </div>
  );
};

export default Navbar;

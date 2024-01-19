import React from "react";
import logo from "../assets/neuroBin.png";
import Bin from "../assets/logo_bin.png";

const Navbar = () => {
  return (
    <div className="w-full flex flex-row justify-between p-8 m-0 items-center bg-zinc-50">
      <img src={logo} className="h-[30px]" />
      <ul className="flex gap-8 items-center h-auto">
        <li>Home</li>
        <li>Predict</li>
        <li>About</li>
      </ul>
      <span>
        <img
          src={Bin}
          className="h-[30px] border-[2px] border-secondary p-0.5 rounded-md hover:bg-secondary/25 cursor-pointer"
        />
      </span>
    </div>
  );
};

export default Navbar;

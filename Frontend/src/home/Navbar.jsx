import React from "react";
import logo from "../assets/neuroBin.png";
import Bin from "../assets/logo_bin.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex flex-row justify-between p-8 m-0 items-center bg-zinc-50 shadow-xl">
      <img src={logo} className="h-[30px]" />
      <ul className="flex gap-8 items-center h-auto">
        <li className="cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/predict" className="cursor-pointer">
            Predict
          </Link>
        </li>
        <li>
          <Link to="/" className="cursor-pointer">
            Track Bins
          </Link>
        </li>
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

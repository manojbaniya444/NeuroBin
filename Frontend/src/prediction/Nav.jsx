import React from "react";
import logo from "../assets/neuroBin.png";
import Bin from "../assets/logo_bin.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

const Nav = () => {
  const { setOpenBin } = useGlobalContext();

  return (
    <div className="flex justify-between py-[20px] px-[5%] bg-zinc-50">
      <Link to="/">
        <img src={logo} alt="logo image" className="h-[30px] cursor-pointer" />
      </Link>
      <div onClick={() => setOpenBin(true)}>
        <img
          src={Bin}
          alt="my-bin"
          className="h-[30px] cursor-pointer border-2"
        />
      </div>
    </div>
  );
};

export default Nav;

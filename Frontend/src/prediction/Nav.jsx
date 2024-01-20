import React from "react";
import logo from "../assets/neuroBin.png";
import Bin from "../assets/logo_bin.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

const Nav = () => {
  const { setOpenBin, streak } = useGlobalContext();

  return (
    <div className="flex justify-between py-4 px-[5%] backdrop-blur-md">
      <Link to="/">
        <img src={logo} alt="logo image" className="h-[30px] cursor-pointer" />
      </Link>
      <div onClick={() => setOpenBin(true)} className=" cursor-pointer w-[50px] h-[50px] rounded-md flex flex-row justify-center items-center relative group">
        <img
          src={Bin}
          alt="my-bin"
          className="h-[30px]"
        />
        <span className="text-xl font-extrabold absolute top-0 right-0 shadow-lg">{streak}</span>
        <span className="bg-slate-800/75 text-white border-[1px] border[black] rounded-md text-xs -bottom-4 hidden group-hover:block min-w-24 max-w-32  p-1 absolute">Your Points: {streak * 15}</span>
      </div>
    </div>
  );
};

export default Nav;

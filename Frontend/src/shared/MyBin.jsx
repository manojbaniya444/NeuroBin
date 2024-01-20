import React from "react";
import { useGlobalContext } from "../Context";
import { IoIosClose } from "react-icons/io";
import List from "./bincomps/list";

const MyBin = () => {
  const { openBin, setOpenBin } = useGlobalContext();

  return (    
    <div className="">
    <div className="flex flex-row justify-between items-center">
      <h1 className="font-bold text-3xl">My Bin</h1>
      <span className="font-mono text-lg border-2 rounded-full w-8 h-8 items-center justify-center flex p-2 hover:bg-white hover:text-black cursor-pointer border-white my-4" onClick={() => setOpenBin(false)}>
        x
      </span>
    </div>
    <div className="my-4">
      <List />
    </div>
    <button className="w-full bg-white text-black p-2 rounded-md active:ring-2 active:ring-black">Click Me</button>
  </div>
  );
};

export default MyBin;

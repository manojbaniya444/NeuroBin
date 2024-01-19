import React from "react";
import { useGlobalContext } from "../Context";
import { IoIosClose } from "react-icons/io";

const MyBin = () => {
  const { openBin, setOpenBin } = useGlobalContext();

  return (
    <div className="bg-orange-500 w-[300px] h-[100vh] absolute right-0 z-30">
      <div
        className=" absolute right-5 top-5 cursor-pointer"
        onClick={() => setOpenBin(false)}
      >
        <IoIosClose className="text-4xl" />
      </div>
      MyBin
    </div>
  );
};

export default MyBin;

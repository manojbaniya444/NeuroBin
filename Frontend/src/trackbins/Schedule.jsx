import React from "react";
import { IoMdNotifications } from "react-icons/io";

const Schedule = () => {
  return (
    <div className="py-4 gap-4 flex flex-col px-[2%]">
      <span className="text-xl font-semibold flex gap-2 items-center">
        Upcoming Trucks <IoMdNotifications />
      </span>
      <div className="flex gap-8">
        <div className="w-1/2 border-2 rounded-md p-2 justify-between flex">
          <span className="font-semibold">Recycle Gadi (every Tuesday)</span>
          <span className="text-sm text-slate-600">in 2 days</span>
        </div>
        <div className="w-1/2 border-2 rounded-md p-2 justify-between flex">
          <span className="font-semibold">
            Non-Recycle Gadi (every Thursday)
          </span>
          <span className="text-sm text-slate-600">in 4 days</span>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

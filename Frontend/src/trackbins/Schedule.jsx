import React from "react";

const Schedule = () => {
  return (
    <div className="py-4 gap-4 flex flex-col px-[2%]">
      <span className="text-xl font-semibold">Upcoming Trucks</span>
      <div className="flex gap-8">
        <div className="w-1/2 border-2 rounded-md p-2 justify-between flex">
          <span className="font-semibold">Recycle Gadi</span>
          <span className="text-sm text-slate-600">in 3 days</span>
        </div>
        <div className="w-1/2 border-2 rounded-md p-2 justify-between flex">
          <span className="font-semibold">Non-Recycle Gadi</span>
          <span className="text-sm text-slate-600">in 5 days</span>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

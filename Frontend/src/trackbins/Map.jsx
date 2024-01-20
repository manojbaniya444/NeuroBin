import React from "react";
import NavMap from "./navMap";
import MapFull from "./MapFull";
import Schedule from "./Schedule";

const MapPage = () => {
  return (
    <div>
      <NavMap />
      <div className="px-8 py-4 rounded-md">
        <MapFull />
      </div>
      <Schedule />
    </div>
  );
};

export default MapPage;

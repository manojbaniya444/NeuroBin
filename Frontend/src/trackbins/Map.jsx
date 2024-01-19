import React from "react";
import NavMap from "./navMap";
import MapFull from "./MapFull";

const MapPage = () => {
  return (
    <div>
      <NavMap />
      <div className="px-8 py-4 rounded-md">
        <MapFull />
      </div>
    </div>
  );
};

export default MapPage;

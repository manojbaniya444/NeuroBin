import React from "react";
import LandingImage from "../assets/landing_image.png";
import { Link } from "react-router-dom";

const BodyComp = () => {
  return (
    <div className=" px-[2%] flex flex-row w-full justify-between items-center bg-transparent flex-1">
      <div className="w-2/3 flex flex-col gap-4">
        <h1 className="font-bold text-4xl">
          Welcome to <span className="text-primary">NeuroBin</span>
        </h1>
        <p className="text-justify text-lg font-semibold ">
          Transforming Waste into a Greener Tomorrow.
        </p>
        <p className="pt-3 text-base font-light text-zinc-900">
          Our intelligent waste management app empowers you to identify,
          categorize, and dispose of waste responsibly. Effortlessly contribute
          to a cleaner environment with waste detection and find the nearest
          disposal bins. Join us in making a positive impact.
        </p>
        <button className="px-4 py-2 rounded-md bg-green-900 text-white self-start">
          <Link to="/predict">Classify now</Link>
        </button>
      </div>
      <div className="w-1/3 items-end">
        <img src={LandingImage} className="w-full float-right" />
      </div>
    </div>
  );
};

export default BodyComp;

// Our intelligent waste
// management app empowers you to identify, categorize, and dispose of
// waste responsibly. Effortlessly contribute to a cleaner environment
// with waste detection and find the nearest disposal bins. Join us in
// making a positive impact.

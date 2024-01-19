import React from "react";
import LandingImage from "../assets/landing_image.png";

const BodyComp = () => {
  return (
    <div className="pt-8 px-[5%] flex flex-row w-full justify-between items-center py-12 bg-zinc-100 flex-1">
      <div className="w-2/3 flex justify-center flex-col gap-4">
        <h1 className="font-bold text-4xl">
          Welcome to <span className="text-primary">NeuroBin</span>
        </h1>
        <p className="text-justify text-lg ">
          Transforming Waste into a Greener Tomorrow. Our intelligent waste
          management app empowers you to identify, categorize, and dispose of
          waste responsibly. Effortlessly contribute to a cleaner environment
          with waste detection and find the nearest disposal bins. Join us in
          making a positive impact.
        </p>
        <button className="text-xl font-semibold bg-primary w-fit px-2 py-1 rounded-md text-blue-400 flex items-center gap-2 justify-center">
          <span className="text-white">Predict</span>{" "}
        </button>
      </div>
      <div className="w-1/3 items-end">
        <img src={LandingImage} className="w-full float-right" />
      </div>
    </div>
  );
};

export default BodyComp;

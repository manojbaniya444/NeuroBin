import React from "react";
import Nav from "./Nav";
import MainPrediction from "./MainPrediction";

const PredictPage = () => {
  return (
    <div className="h-[100vh] flex flex-col">
      <Nav />
      <MainPrediction />
    </div>
  );
};

export default PredictPage;

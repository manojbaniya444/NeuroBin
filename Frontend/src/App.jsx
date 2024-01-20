import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./home/Homepage";
import PredictPage from "./prediction/PredictPage";
import MyBin from "./shared/MyBin";
import Map from "./trackbins/Map";
import { useGlobalContext } from "./Context";

const App = () => {
  const { openBin } = useGlobalContext();

  return (
    <BrowserRouter>
      {/* {openBin && <MyBin />} */}
      <div className={`fixed ${openBin ? "right-0" : "-right-96"} top-0 z-10 w-96 px-2 py-4 bg-slate-600 h-screen text-white ease-in-out delay-75 duration-300`}><MyBin /></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/predict" element={<PredictPage />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

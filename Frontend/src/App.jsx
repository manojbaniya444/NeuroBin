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
      {openBin && <MyBin />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/predict" element={<PredictPage />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

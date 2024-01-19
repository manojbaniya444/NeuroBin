import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PredictPage from "./Predict/PredictPage";
import HomePage from "./home/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/predict" element={<PredictPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { useState } from "react";
import Navbar from "./Navbar";
import BodyComp from "./Body";
import Gradient from "../assets/gradient.jpeg";

function App() {
  return (
    <div
      className="w-[100%] h-screen text-lg flex flex-col "
      style={{ backgroundImage: `url(${Gradient})` }}
    >
      <Navbar />
      <BodyComp />
    </div>
  );
}

export default App;

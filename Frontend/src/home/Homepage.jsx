import { useState } from "react";
import Navbar from "./Navbar";
import BodyComp from "./Body";

function App() {
  return (
    <div className="w-[100%] h-screen text-lg flex flex-col">
      <Navbar />
      <BodyComp />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { useGlobalContext } from "../Context";

const MainPrediction = () => {
  const [form, setForm] = useState(null);

  const { predictImage, base64, isDetecting, setBase64 } = useGlobalContext();

  let url = null;

  if (form) {
    url = URL.createObjectURL(form);
  }

  console.log(url);

  return (
    // Main Prediction Section
    <div className="flex flex-col gap-2 items-center py-4 px-[5%] bg-zinc-100 flex-1">
      {/* input */}
      <div className="self-center bg-zinc-100">
        <input
          type="file"
          className="w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4 file:rounded-md
            file:border-0 file:text-sm file:font-semibold
            file:bg-green-500 file:text-white
            hover:file:bg-green-700 file:cursor-pointer"
          onChange={(e) => {
            setBase64(null);
            setForm(e.target.files[0]);
          }}
        />
      </div>

      {/* result */}
      <div className="flex justify-center flex-col gap-2 relative">
        {/* scanning animation */}
        {isDetecting && (
          <div className="w-full h-[5px] bg-green-500 animate-scanning absolute top-0"></div>
        )}

        {base64 ? (
          <img
            src={`data:image/png;base64,${base64}`}
            alt="result"
            className=" h-[350px] w-[300px] border-2"
          />
        ) : url ? (
          <img src={url} className="h-[350px] w-[300px] border-2" />
        ) : (
          <div className="h-[350px] w-[350px] flex items-center justify-center bg-green-100 font-bold border-2 rounded-sm">
            No Image Selected
          </div>
        )}
        <button
          onClick={() => predictImage(form)}
          className="bg-green-900 px-4 py-2 text-white rounded-md cursor-pointer self-center"
          disabled={!form}
        >
          Classify waste
        </button>
      </div>
    </div>
  );
};

export default MainPrediction;

import React, { useState } from "react";
import { useGlobalContext } from "../Context";

const MainPrediction = () => {
  const {
    predictImage,
    base64,
    isDetecting,
    setBase64,
    error,
    setStreak,
    form,
    setForm,
    visible,
    setVisible,
  } = useGlobalContext();

  let url = null;

  if (form) {
    url = URL.createObjectURL(form);
  }

  return (
    // Main Prediction Section
    <div className="flex flex-col gap-2 items-center py-4 px-[5%] bg-zinc-100 flex-1">
      {/* input */}
      <div className="self-center bg-zinc-100">
        <input
          type="file"
          accept="image/*"
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

      {/* error */}
      {error && (
        <p className="text-center font-normal p-2 text-red-500">
          Error occured: {error}
        </p>
      )}

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
          onClick={() => {
            predictImage(form);
            setVisible(true);
          }}
          className={`bg-green-900 px-4 py-2 text-white rounded-md cursor-pointer self-center `}
          disabled={!form}
        >
          Classify waste
        </button>
      </div>
      {base64 && (
        <div className="flex items-center justify-center flex-col">
          <div>
            Your waste is non-biodegradable. Put it in your nearby NeuroBin for
            recycling.{" "}
            <a href="/map" className="text-green-500">
              View Map
            </a>
          </div>
          <button
            className={`bg-green-500 px-4 py-2 rounded-md w-fit text-white text-base ${
              visible ? "block" : "hidden"
            }`}
            onClick={() => {
              setVisible(false);
              setStreak((prev) => prev + 1);
            }}
          >
            Put in bin
          </button>
        </div>
      )}
    </div>
  );
};

export default MainPrediction;

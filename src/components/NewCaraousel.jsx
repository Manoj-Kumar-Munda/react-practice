import React, { useState } from "react";
import lake from "../assets/lake.jpg";
import mountains from "../assets/mountains.jpg";
import rafting from "../assets/rafting.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const NewCaraousel = () => {
  const slides = [lake, mountains, rafting];
  const [curr, setCurr] = useState(0);

  const moveLeft = () => {
    if (curr === 0) {
      setCurr(slides.length - 1);
    } else {
      setCurr(curr - 1);
    }
  };

  const moveRight = () => {
    if (curr === slides.length - 1) {
      setCurr(0);
    } else {
      setCurr(curr + 1);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="overflow-hidden relative max-w-lg">
        <div className="absolute inset-0 flex justify-between items-center z-50">
          <button
            className="rounded-full bg-slate-400/50" onClick={() => moveLeft()}
          >
            <ChevronLeftIcon width={30} color="#ffffff" />
          </button>
          <button
            className="rounded-full bg-slate-400/50" onClick={() => moveRight()}
          >
            <ChevronRightIcon width={30} color="#ffffff" />
          </button>
        </div>
        <div
          className="flex transition-transform ease-out duration-500 "
          style={{ transform: ` translate(-${curr * 100}%)` }}
        >
          {slides.map((i, index) => (
            <img
              loading="lazy" src={i} alt="slides"
              className={
                index !== curr
                  ? "scale-75 origin-center transition-transform duration-500 brightness-50"
                  : "origin-center scale-100 transition-transform duration-500 brightness-90"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCaraousel;

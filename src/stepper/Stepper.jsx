import React, { useState } from "react";

const Stepper = () => {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <div className="relative w-3/4 mx-auto border my-4 h-4">
        <div className={`bg-orange-500 h-full transition-all  w-percent-${progress}`}></div>
      </div>
      <div>
        <span>{progress}</span>
        <button
          onClick={() => {
            setProgress((prev) => prev + 25);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Stepper;

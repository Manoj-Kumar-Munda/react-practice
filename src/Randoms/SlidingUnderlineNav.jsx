import React, { useState } from "react";

const SlidingUnderlineNav = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  return (
    <div className="mt-10 flex justify-center items-center">
      <nav className="basis-2/5">
        <div className="border flex relative">
          <div
            className={`absolute bg-red-400 h-1 bottom-0 w-1/3 transition-transform translate-x-full-${activeBtn}`}
          ></div>

          <button
            className="py-2 basis-1/3 text-center "
            onClick={() => setActiveBtn(0)}
          >
            Mango
          </button>
          <button
            className="py-2 basis-1/3 text-center "
            onClick={() => setActiveBtn(1)}
          >
            Apple
          </button>
          <button
            className="py-2 basis-1/3 text-center "
            onClick={() => setActiveBtn(2)}
          >
            Orange
          </button>
        </div>
      </nav>
    </div>
  );
};

export default SlidingUnderlineNav;

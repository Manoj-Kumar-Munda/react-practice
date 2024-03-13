import React, { useState } from "react";

const Hamburgur = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="p-8">
      <div className="relative py-3">
        <button className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out  
              ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
            ></span>
            <span
              aria-hidden="true"
              className={
                `block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0":"opacity-100"}`
              }
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out
                ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}
                `}
            ></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hamburgur;

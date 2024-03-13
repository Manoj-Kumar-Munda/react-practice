import React, { useState } from "react";
import Header from "./Header";
import { HERO_BG_LINK } from "../utils/links";

const Login = () => {
  const [showInput, setShowInput] = useState(false);

  const [inputText, setInputText] = useState("");

  const handleShowInput = (e) => {
    e.stopPropagation();
    setShowInput(true)
  };
  return (
    <div className="relative">
      <Header />
      <div className="relative w-full h-auto">
        <img
          src={HERO_BG_LINK}
          alt="hero-image"
          loading="lazy"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-layer"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-center text-white flex flex-col justify-center items-center">
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold">
              Unlimited movies, TV shows and more
            </h1>
            <p className="text-lg">Watch anywhere. Cancel anytime.</p>
          </div>

          <div className="space-y-2 max-w-[max-content]">
            <p className="text-lg">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form className="flex gap-1 px-2">
              <div
                id="form-element"
                className="overflow-hidden relative cursor-text px-2 py-1 flex-1 flex flex-col justify-center border bg-transparent border-gray-400/70 rounded-md focus-within:ring-2 focus-within:ring-white"
                onClick={(e) => handleShowInput(e)}
              >
                <label
                  className={`cursor-text text-start font-semibold leading-none text-gray-400/80 transition-all ease-in duration-150 ${
                    showInput ? "text-xs" : "text-lg"
                  }`}
                >
                  Email address
                </label>
                {showInput && (
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full outline-none text-white bg-transparent"
                    autoFocus
                    onBlur={() => setShowInput(false)}
                  />
                )}
              </div>
              <button
                type="submit"
                className="bg-red-600 xl:py-3 px-4 border border-red-600 rounded-md"
              >
                <span className="text-lg">Get Started</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

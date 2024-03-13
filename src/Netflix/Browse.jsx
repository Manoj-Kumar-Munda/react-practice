import React, { useState } from "react";

const Browse = () => {
    const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="w-full max-h-screen overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/70 to-gray-800/60">
        <div className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 bottom-[10%] text-center  md:mx-0 md:text-start md:bottom-[25%] md:left-20 w-full max-w-lg space-y-3">
          <h1 className="md:text-7xl text-5xl font-bold text-white">Thoda Thoda</h1>
          <p className={`overflow-hidden text-sm md:text-base transition-[max-height] ease-linear ${showInfo?" max-h-[100px]":"md:max-h-12 max-h-10 "} text-white pl-4`}>
            Ke Thoda Thoda Pyaar Hua Tumse Ke Thoda Thoda Ikraar Hua Tumse Ke
            Ke Thoda Thoda Pyaar Hua Tumse Ke Thoda Thoda Ikraar Hua Tumse Ke
            Ke Thoda Thoda Pyaar Hua Tumse Ke Thoda Thoda Ikraar Hua Tumse Ke
            Zyaada Bhi Hoga Tumhi Se Ke Thoda Thoda Pyaar Hua Tumse
          </p>
          <div className="flex md:justify-start justify-center gap-2 px-2">
            <button className="text-lg px-8 py-3 bg-red-600 text-white font-bold rounded-lg">Play</button>
            <button className="text-lg px-8 py-3 bg-white font-bold rounded-lg"
            onClick={() => setShowInfo(!showInfo)}
            >More info</button>


          </div>
        </div>
      </div>
      <iframe
        className="w-full md:aspect-video aspect-square"
        src="https://www.youtube.com/embed/JM_CdCPrlMM?&autoplay=1&controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Browse;

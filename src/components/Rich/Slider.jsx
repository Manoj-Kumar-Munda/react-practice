import React, { useEffect, useState } from "react";
import img1 from "../../assets/Caraousel/img-1.jpeg";
import img2 from "../../assets/Caraousel/img-2.jpeg";
import img3 from "../../assets/Caraousel/img-3.jpeg";
import img4 from "../../assets/Caraousel/img-4.jpeg";
import img5 from "../../assets/Caraousel/img-5.jpeg";
import img6 from "../../assets/Caraousel/img-6.jpeg";

const Slider = () => {
  const slides = [img1, img2, img3, img4, img5, img6];
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setTimeout(function fn() {
      next();
      setTimeout(fn, 5000);
    }, 5000);
    return () => clearTimeout(slideInterval);
  }, []);

  return (
    <div className="sm:mx-6 flex overflow-hidden">
      <div
        style={{ transform: ` translate(-${curr * 100}%)` }}
        className="flex transition-all duration-1000"
      >
        {slides.map((i, index) => (
          <img key={index} className="object-contain w-full" src={i} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Slider;

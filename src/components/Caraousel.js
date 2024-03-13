import React, { useEffect, useState } from "react";
import lake from "../assets/lake.jpg";
import mountains from "../assets/mountains.jpg";
import rafting from "../assets/rafting.jpg";
const Caraousel = () => {
  const slides = [lake,mountains,rafting];
  const [curr,setCurr] = useState(0);


  const prev = () => setCurr( (curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr( (curr) => (curr === slides.length - 1 ? 0 : curr+1))


  useEffect(
    () => {
      const slideInterval = setTimeout(
        function fn(){
          next();
          setTimeout(fn,1000)
        } , 1000
      )
      return () => clearTimeout(slideInterval);
    },
    []
  )

  
  return (
    <div className="max-w-lg flex justify-center">
      <div className="overflow-hidden relative">
        <div 
          className="flex transition-transform ease-out duration-500"
          style={{transform : ` translate(-${curr*100}%)`}}
        >
          {
            slides.map( (i) => <img src={i} alt="sliding"/>)
          }
        </div>
        <div>
          <button onClick={prev}>⬅️</button>
          <button onClick={next}>➡️</button>
        </div>

        <div className="absolute bottom-8 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {
              slides.map( (_, i) => (
                <div
                  className={`
                    transition-all w-3 h-3 bg-white rounded-full 
                    ${curr === i ? "p-2" : "bg-opacity-50"}

                  `}  
                >

                </div>
              ))
            }

          </div>

        </div>
        
      </div>


    </div>
  );
};

export default Caraousel;

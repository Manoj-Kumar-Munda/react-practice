import React from "react";
import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/24/solid';


const CardSlider = () => {

    const moveForward = () => {
        const element = document.getElementById('scrollableDiv');
        console.log(element);
        element.scrollLeft += 350;

    }

    const moveBackward = () => {
        const element = document.getElementById('scrollableDiv');
        element.scrollLeft -= 350;
    }
    const buttons = [
        "Javascript","Rihana","Top 50","Trending","Gaming","BGMI","Bollywood","React","Node JS","Tailwind","DSA"
    ]
  return (
    <div className="min-h-screen flex justify-center items-center bg-cyan-300">
      <div className="max-w-lg relative w-full border border-slate-50 flex ">
        
            <div className="overflow-hidden scroll-smooth flex space-x-4 items-center px-4" id="scrollableDiv">
                {
                    buttons.map(
                        (i,index) => {
                            return (
                                <button className="px-2 whitespace-nowrap" key={i}>
                                    {i}
                                </button>
                            )
                        }
                    )
                }


            </div>

          
          
        
        <div className="absolute w-full h-full flex justify-between ">
                <button className="px-2 bg-gradient-to-r from-white to-white/30" onClick={() => moveBackward()}>
                    <ChevronLeftIcon width={20} />
                </button>
                <button className="px-2 bg-gradient-to-l from-white to-white/30" onClick={() => moveForward()}>
                    <ChevronRightIcon width={20} />
                </button>

            </div>
      </div>
    </div>
  );
};

export default CardSlider;

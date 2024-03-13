import React, { useState } from "react";

const Accordion = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggle = (item) => {
    if (openItem !== item) {
      setOpenItem(item);
    } else {
      setOpenItem(null);
    }
  };
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-1/2 space-y-2">
        <div
          className="cursor-pointer bg-sky-400 p-2 rounded-lg overflow-hidden hover:bg-sky-500"
          onClick={() => toggle(0)}
        >
          <h1 className=" font-semibold text-lg">What is Lorem Ipsum? </h1>
          
          
            <p className={openItem === 0 ? "content show":"content"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          
        </div>
        <div
          className="cursor-pointer bg-sky-400 p-2 rounded-lg hover:bg-sky-500"
          onClick={() => toggle(1)}
        >
          <h1 className="font-semibold text-lg">Where does it come from?</h1>
        
            <p className={openItem === 1 ? "content show":"content"}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur,
            </p>
          
        </div>
        <div
          className="cursor-pointer bg-sky-400 p-2 rounded-lg hover:bg-sky-500"
          onClick={() => toggle(2)}
        >
          <h1 className="font-semibold text-lg">Why do we use it?</h1>
          
            <p className={openItem === 2 ? "content show":"content"}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
        
        </div>
      </div>

      
    </div>

    
  );
};

export default Accordion;

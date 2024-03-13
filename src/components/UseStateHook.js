import React, { useState } from "react";

const UseStateHook = () => {
  const [isActive, setActive] = useState(false);
  const toggle = () => {
    setActive(!isActive)
    
  
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex items-center relative px-1">
        <button 
          className="w-10 h-6 bg-slate-200 rounded-xl relative"
          onClick={() => toggle()}
        >
          <div className={(isActive)?("btn-circle active"):("btn-circle inactive")}>

          </div>
        </button>
   
       
      </div>
    </div>
  );
};

export default UseStateHook;

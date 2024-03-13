import React, { useState } from "react";
import { motion } from "framer-motion";
const Animation1 = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  return ( 
    <>
      <div className="my-8 px-6">
        <motion.div 
          className="w-52 h-52 bg-violet-700 rounded-3xl shadow-2xl"
          animate={{
            x:isAnimating ? 1200 : 0, 
            opacity:isAnimating ? 1 : 0.5, 
            rotate: isAnimating? 360: 0
          }}
          initial = {{opacity:0.25}}
          transition={{ type:"spring", duration:2.5 , stiffness:40}}
          onClick={() => setIsAnimating(!isAnimating)}
          >
          
        </motion.div>
      </div>
    </>
  );
};

export default Animation1;

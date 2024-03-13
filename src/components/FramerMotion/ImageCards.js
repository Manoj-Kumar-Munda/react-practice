import React from "react";
import lake from "../../assets/lake.jpg";
import mountains from "../../assets/mountains.jpg";
import rafting from "../../assets/rafting.jpg";
import { delay, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const ImageCards = () => {
  const list = [lake, mountains, rafting, rafting,lake, mountains, rafting,lake, mountains, rafting,];

  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      
      transition: {
        type : "spring",
        ease : "linear",
        
        delay: i * 0.256,
        duration : 0.9,
        stiffness:100,
    
      },
    }),
    hidden: {
      opacity: 0,
    
      y: -30,
    },
  };
  return (
    <div className="min-h-screen flex flex-col my-20 gap-14 ml-10">
      <div className="flex flex-wrap gap-4 justify-center">
        {list.map((item, i) => (
          <motion.div
            key={i}
            className="w-60 h-auto overflow-hidden"
            custom={i}
            variants={variants}
            initial= "hidden"
            animate= "visible"
        
          >
            <img
              className="aspect-[3/2] object-cover object-center rounded-2xl transition-all hover:scale-110"
              src={item}
            />
          </motion.div>
        ))}

        
      </div>

      {/* <div className="max-w-lg flex flex-col rounded-md gap-4">
        <motion.div
          whileTap={{ scale: 0.97 }}
          className="flex justify-between px-4 py-2 font-semibold text-white cursor-pointer bg-violet-700 rounded-xl"
        >
          <h1>Menu</h1>
          <div>
            <FontAwesomeIcon icon={faCaretUp} />
          </div>
        </motion.div>

        <motion.div className=" h-96 bg-violet-700 text-white flex flex-col rounded-xl  p-4">
          <motion.a
            className="py-2 cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Home
          </motion.a>
          <motion.a className="py-2 cursor-pointer">Help</motion.a>
          <motion.a className="py-2 cursor-pointer">Blog</motion.a>
          <motion.a className="py-2 cursor-pointer">Contact</motion.a>
        </motion.div>
      </div> */}
    </div>
  );
};

export default ImageCards;

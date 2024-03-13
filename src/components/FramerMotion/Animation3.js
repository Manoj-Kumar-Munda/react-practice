import React from "react";
import { motion } from "framer-motion";

const Animation3 = () => {
  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  const listVariants = {
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.256,
      },
    }),
    hidden: { opacity: 0, scale: 0.7 },
  };

  return (
    <>
      <div className="my-8 px-6">
        <motion.div
          className="relative w-52 h-52 bg-violet-700 rounded-3xl shadow-2xl p-4 flex gap-6 justify-between "
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3, 4].map((item, i) => (
            <motion.div
              key={i}
              className="relative w-6 h-6 bg-white rounded-full  border-2"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={listVariants}
            ></motion.div>
          ))}
        </motion.div>
        =
      </div>
    </>
  );
};

export default Animation3;

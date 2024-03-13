import React from 'react'
import { motion } from 'framer-motion'
const Animation2 = () => {
  return (
    <>
      <div className="my-8 px-6">
        <motion.div 
          className="w-52 h-52 bg-violet-700 rounded-3xl shadow-2xl"
          drag
          dragConstraints={{
            right: 20,
            left : -20
          }}
          whileHover={{scale : 1.2}}
          whileTap={{scale: 0.65}}
          
          >
          
        </motion.div>
      </div>
    </>
  )
}

export default Animation2
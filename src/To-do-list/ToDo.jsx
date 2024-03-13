import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ToDo = ({ task, toggleComplete, deleteTask, editTask }) => {
  const parent = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const child = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="flex justify-between items-center py-2 px-2"
          initial="hidden"
          animate="visible"
          variants={parent}
          transition={{ ease: "easeIn" }}
          exit={{opacity:0}}
        >
          <motion.span
            className={
              task.completed
                ? "cursor-pointer [text-decoration:line-through]"
                : "cursor-pointer"
            }
            variants={child}
            onClick={() => toggleComplete(task.id)}
          >
            {task.task}
          </motion.span>

          <motion.div className="space-x-2" variants={child}>
            <button
              className="border px-4 py-1 font-semibold border-violet-600 rounded-lg"
              onClick={() => editTask(task.id)}
            >
              Edit
            </button>
            <button
              className="border px-4 py-1 font-semibold border-violet-600 rounded-lg"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ToDo;

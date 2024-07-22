// "use client";
// import { cva } from "class-variance-authority";
import React from "react";

// const buttonvariants = cva(" rounded-md font-semibold", {
//   variants: {
//     intent: {
//       primary: " text-white bg-black dark:text-black dark:bg-white",
//       outline: " bg-transparent text-black border-1 dark:text-white",
//     },
//   },

//   defaultVariants: {
//     intent: primary,
//   },
// });

const Buttons = ({ text, clicker, bg }) => {
  return (
    <button
      className={`p-2    text-white rounded-md hover:bg-red-400 ${bg}`}
      onClick={clicker}
    >
      {text}
    </button>
  );
};

export default Buttons;

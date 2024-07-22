"use client";
import React from "react";

const Buttons = ({ text, clicker }) => {
  return (
    <button
      className="p-2  bg-red-500  text-white rounded-md hover:bg-red-400"
      onClick={clicker}
    >
      {text}
    </button>
  );
};

export default Buttons;

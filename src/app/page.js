"use client";
import React, { useEffect, useState } from "react";
import Buttons from "./components/buttons";
import Link from "next/link";

const Home = () => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
  }, []);
  return (
    <div className=" container mx-auto">
      <Link
        href={"/admin"}
        className=" flex gap-4 bg-blue-500 rounded-[50px] w-fit p-2 my-2"
      >
        <span>Admin Page</span>{" "}
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </Link>
      <div>
        {loading ? (
          <Buttons text={"Hello Click me !"} bg={"bg-red-500"}></Buttons>
        ) : (
          <Buttons bg={"w-[132px] h-10 bg-gray-500 animate-pulse"}></Buttons>
        )}
      </div>
    </div>
  );
};

export default Home;

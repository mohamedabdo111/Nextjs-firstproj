import Link from "next/link";
import React from "react";

const Firstnav = () => {
  return (
    <div className="  bg-zinc-800 text-white ">
      <ul className="container mx-auto flex justify-center gap-5 p-5">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/products"}>
          <li>Products</li>
        </Link>
      </ul>
    </div>
  );
};

export default Firstnav;

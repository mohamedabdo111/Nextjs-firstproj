import React from "react";
import Navbar from "@/app/components/navbar";

const layoutAdmin = ({ children }) => {
  return (
    <div className=" grid grid-cols-12 gap-3" style={{ height: "150vh" }}>
      <div className=" col-span-2">
        <Navbar></Navbar>
      </div>
      <div className="col-span-10">{children}</div>
    </div>
  );
};

export default layoutAdmin;

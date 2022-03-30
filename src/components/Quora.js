import React from "react";
import Feed from "./Feed";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Quora() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-[50px]">
        <Sidebar />
        <Feed />
      </div>
    </>
  );
}

export default Quora;

import { Avatar } from "@material-ui/core";
import React from "react";

function FeedTop() {
  return (
    <div className="flex flex-col p-[10px] border border-green-600 bg-white rounded-[5px] cursor-pointer hover:border-2 hover:border-[olive]">
      <div className="flex items-center">
        <Avatar />
        <h5 className="text-green-600 font-light ml-[10px]">나</h5>
      </div>
      <div className="flex mt-2">
        <p className="text-black font-bold text-lg">무엇이 궁금하신가요?</p>
      </div>
    </div>
  );
}

export default FeedTop;

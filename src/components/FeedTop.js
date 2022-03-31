import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function FeedTop() {
  const user = useSelector(selectUser);
  return (
    <div className="flex flex-col p-[10px] border border-green-600 bg-white rounded-[5px] cursor-pointer hover:border-2 hover:border-[olive]">
      <div className="flex items-center">
        <Avatar src={user.photo} />
        <h5 className="text-green-600 font-light ml-[10px]">
          {user.displayName}
        </h5>
      </div>
      <div className="flex mt-2">
        <p className="text-black font-bold text-lg">무엇이 궁금하신가요?</p>
      </div>
    </div>
  );
}

export default FeedTop;

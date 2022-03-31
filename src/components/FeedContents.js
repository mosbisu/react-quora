import { Avatar } from "@material-ui/core";
import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutlineOutlined,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
} from "@material-ui/icons";
import React from "react";

function FeedContents({ key, Id, image, question, timestamp, quoraUser }) {
  return (
    <div className="flex flex-col p-[10px] border border-green-600 bg-white rounded-[5px] cursor-pointer mt-[10px] hover:boder-2 hover:border-[olive]">
      <div className="flex items-center">
        <Avatar src={quoraUser.photo} />
        <h5 className="text-green-600 ml-[10px] cursor-pointer text-[13px] hover:underline">
          {quoraUser.displayName ? quoraUser.displayName : quoraUser.email}
        </h5>
        <small className="ml-[10px]">
          {new Date(timestamp?.toDate()).toLocaleString()}
        </small>
      </div>
      <div className="flex flex-col">
        <div className="my-[10px] font-bold cursor-pointer flex">
          <p className="hover:underline">{question}</p>
          <button className="ml-auto outline-none border-none bg-[lightgoldenrodyellow] text-green-600 rounded-[10px] p-[10px] hover:scale-110">
            답변하기
          </button>
        </div>
        <div>
          <p>답변입니다</p>
        </div>
        <img
          className="object-contain w-full rounded-[5px] cursor-pointer"
          src={image}
          alt=""
        />
      </div>
      <div className="flex items-center mt-[10px]">
        <div className="flex justify-around rounded-[33px] p-[5px] bg-[lightgoldenrodyellow] items-center">
          <ArrowUpwardOutlined className="mr-[40px] cursor-pointer text-black hover:text-yellow-200 hover:bg-[darkgray]" />
          <ArrowDownwardOutlined className="mr-[40px] cursor-pointer text-black hover:text-yellow-200 hover:bg-[darkgray]" />
        </div>
        <RepeatOneOutlined className="mr-[40px] cursor-pointer text-black hover:text-yellow-200 hover:bg-[darkgray]" />
        <ChatBubbleOutlineOutlined className="mr-[40px] cursor-pointer text-black hover:text-yellow-200 hover:bg-[darkgray]" />
        <div className="ml-auto">
          <ShareOutlined className="ml-[30px] cursor-pointer text-black hover:text-yellow-200 hover:bg-[darkgray]" />
          <MoreHorizOutlined className="ml-[30px] cursor-pointer text-black hover:text-yellow-200 hover:bg-[darkgray]" />
        </div>
      </div>
    </div>
  );
}

export default FeedContents;

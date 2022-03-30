import { Avatar, Button } from "@material-ui/core";
import {
  AssignmentIndOutlined,
  BorderAllRounded,
  Home,
  Language,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
} from "@material-ui/icons";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center p-[1px] bg-white w-full sticky top-0 z-[999] shadow">
      <div className="qHeader_logo">
        <img
          className="mr-[20px] h-[70px] object-contain ml-[15px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/2880px-Quora_logo_2015.svg.png"
          alt=""
        />
      </div>
      <div className="flex mr-5 ml-5 items-center">
        <div className="qHeader_icon">
          <Home className="mx-[10px] my-[5px] text-[yellowgreen] cursor-pointer hover:text-black hover:bg-[yellowgreen] hover:scale-110 hover:rounded-[10px]" />
        </div>
        <div className="qHeader_icon">
          <BorderAllRounded className="mx-[10px] my-[5px] text-[yellowgreen] cursor-pointer hover:text-black hover:bg-[yellowgreen] hover:scale-110 hover:rounded-[10px]" />
        </div>
        <div className="qHeader_icon">
          <AssignmentIndOutlined className="mx-[10px] my-[5px] text-[yellowgreen] cursor-pointer hover:text-black hover:bg-[yellowgreen] hover:scale-110 hover:rounded-[10px]" />
        </div>
        <div className="qHeader_icon">
          <PeopleAltOutlined className="mx-[10px] my-[5px] text-[yellowgreen] cursor-pointer hover:text-black hover:bg-[yellowgreen] hover:scale-110 hover:rounded-[10px]" />
        </div>
        <div className="qHeader_icon">
          <NotificationsOutlined className="mx-[10px] my-[5px] text-[yellowgreen] cursor-pointer hover:text-black hover:bg-[yellowgreen] hover:scale-110 hover:rounded-[10px]" />
        </div>
      </div>
      <div className="flex items-center w-[400px] h-full border border-[lightgreen] p-[5px] rounded-[5px]">
        <input
          className="bg-transparent outline-none w-[400px] border-none"
          type="text"
          placeholder="검색하기"
        />
        <Search />
      </div>
      <div className="flex items-center">
        <div className="qHeader_avatar">
          <Avatar className="cursor-pointer" />
        </div>
        <Language className="text-2xl text-[yellowgreen] ml-[30px] cursor-pointer hover:text-black" />
        <Button className="text-black mx-[30px] cursor-pointer bg-[yellowgreen] rounded-[20px] hover:text-[yellowgreen] hover:bg-black">
          질문하기
        </Button>
      </div>
    </div>
  );
}

export default Navbar;

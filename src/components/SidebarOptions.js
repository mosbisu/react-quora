import { Add } from "@material-ui/icons";
import React from "react";

function SidebarOptions() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center p-[10px] cursor-pointer hover:bg-[lightgray] hover:rounded-[5px]">
        <img className="h-[30px] ml-[10px] rounded-[5px]" src="" alt="" />
        <p className="text-black font-normal ml-[10px]">격투기</p>
      </div>
      <div className="flex items-center p-[10px] cursor-pointer hover:bg-[lightgray] hover:rounded-[5px]">
        <img className="h-[30px] ml-[10px] rounded-[5px]" src="" alt="" />
        <p className="text-black font-normal ml-[10px]">야구</p>
      </div>
      <div className="flex items-center p-[10px] cursor-pointer hover:bg-[lightgray] hover:rounded-[5px]">
        <img className="h-[30px] ml-[10px] rounded-[5px]" src="" alt="" />
        <p className="text-black font-normal ml-[10px]">축구</p>
      </div>
      <div className="flex items-center p-[10px] cursor-pointer hover:bg-[lightgray] hover:rounded-[5px]">
        <img className="h-[30px] ml-[10px] rounded-[5px]" src="" alt="" />
        <p className="text-black font-normal ml-[10px]">자동차</p>
      </div>
      <div className="flex items-center p-[10px] cursor-pointer hover:bg-[lightgray] hover:rounded-[5px]">
        <img className="h-[30px] ml-[10px] rounded-[5px]" src="" alt="" />
        <p className="text-black font-normal ml-[10px]">요리</p>
      </div>
      <div className="flex items-center p-[10px] cursor-pointer hover:bg-[lightgray] hover:rounded-[5px]">
        <Add className="text-[yellowgreen] ml-[10px]" />
        <p className="text-black font-normal ml-[10px]"> 더보기 </p>
      </div>
    </div>
  );
}

export default SidebarOptions;

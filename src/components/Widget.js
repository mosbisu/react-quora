import React from "react";
import WidgetOptions from "./WidgetOptions";

function Widget() {
  return (
    <div className="flex-[0.2] flex flex-col p-[10px] mx-[20px] border border-[lightgray] rounded-[5px] max-h-[85vh] bg-white">
      <div className="border-b border-[lightgray]">
        <h5 className="p-[10px] text-[darkturquoise] text-[15px] tracking-[1px]">
          광고입니다
        </h5>
      </div>
      <div className="flex flex-col">
        <WidgetOptions />
      </div>
    </div>
  );
}

export default Widget;

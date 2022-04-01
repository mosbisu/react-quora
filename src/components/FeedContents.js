import { Avatar } from "@material-ui/core";
import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutlineOutlined,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import Modal from "react-modal";
// Modal.setAppElement("#root");

function FeedContents({ key, Id, image, question, timestamp, quoraUser }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col p-[10px] border border-green-600 bg-white rounded-[5px] cursor-pointer mt-[10px] hover:border-2 hover:border-[olive]">
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
          <button
            className="ml-auto outline-none border-none bg-[lightgoldenrodyellow] text-green-600 rounded-[10px] p-[10px] hover:scale-110"
            onClick={() => setOpenModal(true)}
          >
            답변하기
          </button>
          <Modal
            ariaHideApp={false}
            style={{
              overlay: {
                width: 700,
                height: 600,
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: 1000,
                top: "50%",
                left: "50%",
                marginTop: "-300px",
                marginLeft: "-350px",
              },
            }}
            isOpen={openModal}
            onRequestClose={() => {
              setOpenModal(false);
            }}
            shouldCloseOnOverlayClick={false}
          >
            <div className="flex flex-col items-center">
              <h1 className="text-[#8f1f1b] text-3xl font-semibold mb-[10px]">
                {question}
              </h1>
              <p className="text-[gray] text-sm">
                <span className="text-black text-sm">
                  {quoraUser.displayName
                    ? quoraUser.displayName
                    : quoraUser.email}
                </span>
                로부터의 질문
                <span>{new Date(timestamp?.toDate()).toLocaleString()}</span>에
                작성됨
              </p>
            </div>
            <div className="flex flex-1 pt-[20px]">
              <textarea
                className="w-full h-[300px] p-[5px] text-[15px] text-black border"
                type="text"
                placeholder="답변을 작성해주세요"
              />
            </div>

            <div className="flex items-center mr-[-20px] mt-0">
              <button
                className="border-none outline-none mt-[5px] mr-[10px] text-white bg-[blue] font-bold p-[10px] rounded-[33px] cursor-pointer"
                type="submit"
              >
                답변달기
              </button>
              <button
                className="border-none outline-none mt-[5px] ml-auto mr-[10px] text-[gray] font-medium p-[10px] rounded-[33px] cursor-pointer"
                onClick={() => setOpenModal(false)}
              >
                닫기
              </button>
            </div>
          </Modal>
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

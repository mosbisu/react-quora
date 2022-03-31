import { Avatar, Button } from "@material-ui/core";
import {
  AssignmentIndOutlined,
  BorderAllRounded,
  ExpandMore,
  Home,
  Language,
  Link,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { authService, dbService } from "../firebase";
import Modal from "react-modal";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function Navbar() {
  const user = useSelector(selectUser);
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState("");
  const [inputURL, setInputURL] = useState("");

  const handleQuestion = async (e) => {
    e.preventDefault();
    setOpenModal(false);

    const questions = {
      question: input,
      imageUrl: inputURL,
      timestamp: serverTimestamp(),
      user: user,
    };

    await addDoc(collection(dbService, "questions"), questions);
    setInput("");
    setInputURL("");
  };

  return (
    <div className="flex justify-between items-center p-[1px] bg-white w-full sticky top-0 z-[999] shadow">
      <div>
        <img
          className="mr-[20px] h-[70px] object-contain ml-[15px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/2880px-Quora_logo_2015.svg.png"
          alt=""
        />
      </div>
      <div className="flex mr-5 ml-5 items-center">
        <div>
          <Home className="mx-[10px] my-[5px] text-[yellowgreen] cursor-pointer hover:text-black hover:bg-[yellowgreen] hover:scale-110 hover:rounded-[10px]" />
        </div>
        <div>
          <BorderAllRounded className="mx-[10px] my-[5px] text-[yellowgreen] cursor-pointer hover:text-black hover:bg-[yellowgreen] hover:scale-110 hover:rounded-[10px]" />
        </div>
        <div>
          <AssignmentIndOutlined className="mx-[10px] my-[5px] text-[yellowgreen] cursor-pointer hover:text-black hover:bg-[yellowgreen] hover:scale-110 hover:rounded-[10px]" />
        </div>
        <div>
          <PeopleAltOutlined className="mx-[10px] my-[5px] text-[yellowgreen] cursor-pointer hover:text-black hover:bg-[yellowgreen] hover:scale-110 hover:rounded-[10px]" />
        </div>
        <div>
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
        <div>
          <Avatar
            className="cursor-pointer"
            src={user.photo}
            onClick={() => authService.signOut()}
          />
        </div>
        <Language className="text-2xl text-[yellowgreen] ml-[30px] cursor-pointer hover:text-black" />
        <Button
          onClick={() => {
            setOpenModal(true);
          }}
          className="text-black mx-[30px] cursor-pointer bg-[yellowgreen] rounded-[20px] hover:text-[yellowgreen] hover:bg-black"
        >
          질문하기
        </Button>
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
          <div className="flex items-center mb-[5px] border-b border-[lightgray]">
            <h5 className="text-[yellowgreen] text-[20px] cursor-pointer font-medium mr-[30px] hover:text-[lightgoldenrodyellow]">
              질문
            </h5>
            <h5 className="text-[yellowgreen] text-[20px] cursor-pointer font-medium mr-[30px] hover:text-[lightgoldenrodyellow]">
              공유하기
            </h5>
          </div>
          <div className="flex items-center mt-[30px]">
            <Avatar src={user.photo} />
            <p className="ml-[10px] text-sm text-[gray]">
              질문자 : {user.displayName ? user.displayName : user.email}
            </p>
            <div className="flex items-center text-[yellowgreen] p-[5px] ml-[10px] bg-white rounded-[33px] cursor-pointer">
              <PeopleAltOutlined />
              <p>전체공개</p>
              <ExpandMore />
            </div>
          </div>
          <div className="flex flex-col mt-[30px] flex-1">
            <input
              type="text"
              placeholder="질문을 작성해주세요"
              required
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <div className="text-[yellowgreen] flex items-center mt-[10px]">
              <Link />
              <input
                className="flex-1 border-none outline-none ml-[5px]"
                type="text"
                placeholder="url 링크를 작성해주세요"
                value={inputURL}
                onChange={(e) => {
                  setInputURL(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex items-center mt-[260px] mr-[-20px] border bprder-[lightgray]">
            <button
              className="border-none outline-none mt-[5px] mr-[10px] text-white bg-[yellowgreen] font-bold p-[10px] rounded-[33px] cursor-pointer"
              type="text"
              onClick={handleQuestion}
            >
              질문하기
            </button>
            <button
              className="border-none outline-none mt-[5px] ml-auto mr-[10px] text-[yellowgreen] font-medium p-[10px] rounded-[33px] cursor-pointer"
              onClick={() => setOpenModal(false)}
            >
              닫기
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;

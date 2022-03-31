import { ArrowForwardIos } from "@material-ui/icons";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { authService } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    let provider;
    provider = new GoogleAuthProvider();
    await signInWithPopup(authService, provider);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let data;
      data = await signInWithEmailAndPassword(authService, email, password);
      console.log(data);
    } catch (e) {
      alert(e.message);
    }
    setEmail("");
    setPassword("");
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      let data;
      data = await createUserWithEmailAndPassword(authService, email, password);
      console.log(data);
    } catch (e) {
      alert(e.message);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center h-[100vh] bg-[url('https://miro.medium.com/max/4800/1*U_qMLDs5RMkaSbHpwwlwzQ.png')]">
      <div className="flex flex-col p-[20px] w-[700px] bg-white rounded-[10px]">
        <div className="flex justify-center h-[30vh]">
          <img
            src="https://qph.fs.quoracdn.net/main-qimg-d049946241e53481209a8938b70321e0"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center mt-[10px]">
          <p className="text-[yellowgreen] text-center font-medium text-[20px]">
            병아리 개발자입니다
          </p>
          <h3 className="mt-[10px] text-center text-2xl">병아리 개발자</h3>
        </div>
        <div className="flex mt-[50px]">
          <div className="flex flex-[0.5] flex-col p-[20px] border-r border-[lightgray]">
            <div className="flex items-center p-[7px] mb-[15px] border border-[lightgray] rounded-[5px] cursor-pointer hover:bg-[#EFEFEF]">
              <img
                className=" h-[30px] object-contain"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p onClick={signIn} className="ml-[11px]">
                구글 아이디로 로그인
              </p>
            </div>
            <div className="flex items-center p-[7px] mb-[15px] border border-[lightgray] rounded-[5px] cursor-pointer hover:bg-[#EFEFEF]">
              <img
                className=" h-[30px] object-contain"
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt=""
              />
              <p className="ml-[11px]">페이스북 아이디로 로그인</p>
            </div>
            <div className="flex flex-col p-[7px] mb-[15px]">
              <p className="text-sm text-[yellowgreen]">
                <span className="text-[blue] cursor-pointer">
                  이메일로 회원가입
                </span>
                시 본사의{" "}
              </p>
              <p className="text-sm text-[yellowgreen]">
                <span className="text-[blue] cursor-pointer">
                  개인정보정책{" "}
                </span>
                과{" "}
              </p>
              <p className="text-sm text-[yellowgreen]">
                <span className="text-[blue] cursor-pointer">
                  서비스 제공 정책
                </span>
                에 동의하는 것으로 간주합니다
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center flex-[0.5] p-[20px] ml-[20px]">
            <div>
              <h4 className="p-[5px]">로그인</h4>
            </div>
            <div className="flex flex-col p-[5px]">
              <div className="p-[5px]">
                <input
                  className="p-[10px] w-full outline-none border-none bg-[#EEE]"
                  type="text"
                  placeholder="이메일"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="p-[5px]">
                <input
                  className="p-[10px] w-full outline-none border-none bg-[#EEE]"
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="pl-[10px] flex items-center justify-between">
              <small className="text-[yellowgreen] cursor-pointer hover:text-[lightgoldenrodyellow] hover:underline">
                비밀번호 찾기
              </small>
              <button
                type="submit"
                onClick={handleLogin}
                className="p-[9px] rounded-[5px] border-none outline-none bg-[yellowgreen] text-black font-bold text-[15px] cursor-pointer"
              >
                로그인
              </button>
            </div>
            <button
              onClick={handleRegister}
              className="p-[9px] rounded-[5px] border-none outline-none bg-[yellowgreen] text-black font-bold text-[15px] cursor-pointer mt-[10px]"
            >
              회원가입
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center border-t border-b border-[lightgray] mt-[30px] p-[10px]">
          <p className="text-[yellowgreen] mr-[5px] cursor-pointer text-[13px] hover:underline">
            언어 설정
          </p>
          <ArrowForwardIos className="text-sm text-[yellowgreen]" />
        </div>
        <div className="flex items-center justify-evenly mt-[10px]">
          <p className="text-[yellowgreen] cursor-pointer text-sm hover:underline">
            About
          </p>
          <p className="text-[yellowgreen] cursor-pointer text-sm hover:underline">
            오시는길
          </p>
          <p className="text-[yellowgreen] cursor-pointer text-sm hover:underline">
            비지니스문의
          </p>
          <p className="text-[yellowgreen] cursor-pointer text-sm hover:underline">
            근성과 끈기
          </p>
          <p className="text-[yellowgreen] cursor-pointer text-sm hover:underline">
            &copy;병아리 개발자
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

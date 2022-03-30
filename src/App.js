import React from "react";
import Quora from "./components/Quora";
import "tailwindcss/tailwind.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="m-0 h-auto w-auto bg-slate-100">
      {user ? <Quora /> : <Login />}
    </div>
  );
}

export default App;

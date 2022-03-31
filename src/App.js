import React, { useEffect } from "react";
import Quora from "./components/Quora";
import "tailwindcss/tailwind.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { authService } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
        console.log(authUser);
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="m-0 h-auto w-auto bg-slate-100">
      {user ? <Quora /> : <Login />}
    </div>
  );
}

export default App;

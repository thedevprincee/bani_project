import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LogoutWrapper, LogoutBtn } from "./Logout.style";
import { setLoginFalse, setLoginTrue } from "../../../store/features/isLoginSlice";

const Logout = () => {
  const isLogin = useSelector((state) => state.reducer.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    isLogin ? dispatch(setLoginTrue()) : dispatch(setLoginFalse());
    navigate("/");
  };
  return (
    <LogoutWrapper>
      <LogoutBtn onClick={logoutHandler}>Logout</LogoutBtn>
    </LogoutWrapper>
  );
};

export default Logout;

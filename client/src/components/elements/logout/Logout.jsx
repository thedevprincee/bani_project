import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LogoutWrapper, LogoutBtn } from "./Logout.style";
import { setLoginFalse, setLoginTrue } from "../../../store/features/authSlice";

const Logout = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    isLogin ? dispatch(setLoginFalse()) : dispatch(setLoginTrue());
    navigate("/");
  };
  return (
    <LogoutWrapper>
      <LogoutBtn onClick={logoutHandler}>Logout</LogoutBtn>
    </LogoutWrapper>
  );
};

export default Logout;

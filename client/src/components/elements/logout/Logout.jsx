import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LogoutWrapper, LogoutBtn } from "./Logout.style";
import { setLoginFalse, setLoginTrue } from "../../../store/features/isLoginSlice";
import { setBranchForm } from "../../../store/features/modalSlice";
import { logout } from "../../../store/features/authSlice";


const Logout = () => {
  const isLogin = useSelector((state) => state.reducer.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async() => {
    const isLogout = await dispatch(logout())
    if(isLogout) navigate("/");
    isLogin ? dispatch(setLoginTrue()) : dispatch(setLoginFalse());
    dispatch(setBranchForm({isModal: 'false', modalType: '', modalTitle: ''}))
  };
  return (
    <LogoutWrapper>
      <LogoutBtn onClick={logoutHandler}>Logout</LogoutBtn>
    </LogoutWrapper>
  );
};

export default Logout;

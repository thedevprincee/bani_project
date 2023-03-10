import React from "react";
import { setLoginFalse, setLoginTrue } from '../../../store/features/authSlice'
import { useSelector, useDispatch } from "react-redux";
import { AuthForm } from "../../molecules/authform/AuthForm";
import {
  AuthWrapper,
  LogoCont,
  Logo,
  FormWrapper,
  FormH2Text,
  FormpText,
  FormpTextWrapper,
  FormGetSt,
} from "./Auth.style";

const Auth = () => {
  const isLogin = useSelector((state)=> state.auth.isLogin)
  const dispatch = useDispatch()
  const handler = ()=>{
    isLogin ? dispatch(setLoginFalse()) : dispatch(setLoginTrue()) 
  }
  return (
    <AuthWrapper>
      <LogoCont>
        <Logo />
      </LogoCont>
      <FormWrapper>
        <FormH2Text>{isLogin ? "Log in to your account": 'Create an Acccout'}</FormH2Text>
        <FormpTextWrapper>
          <FormpText>{isLogin ? "Don’t have an account?" : "Have an account?"}</FormpText>
          <FormGetSt onClick={()=>{handler()}}>{isLogin ? "Get Started": "Sign In"}</FormGetSt>
        </FormpTextWrapper>
        <AuthForm/>
      </FormWrapper>
    </AuthWrapper>
  );
};

export default Auth;

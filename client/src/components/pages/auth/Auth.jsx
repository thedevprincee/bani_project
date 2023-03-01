import React, { useState } from "react";
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
  const [isLogin, setIsLogin] = useState(true)
  return (
    <AuthWrapper>
      <LogoCont>
        <Logo />
      </LogoCont>
      <FormWrapper>
        <FormH2Text>{isLogin ? "Log in to your account": 'Create an Acccout'}</FormH2Text>
        <FormpTextWrapper>
          <FormpText>{isLogin ? "Don’t have an account?" : "Have an account?"}</FormpText>
          <FormGetSt onClick={()=>  setIsLogin(!isLogin)}>{isLogin ? "Get Started": "Sign In"}</FormGetSt>
        </FormpTextWrapper>
        <AuthForm isLogin={isLogin}/>
      </FormWrapper>
    </AuthWrapper>
  );
};

export default Auth;

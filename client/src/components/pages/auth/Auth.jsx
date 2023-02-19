import React, { useState } from "react";
import {
  AuthWrapper,
  LogoCont,
  Logo,
  FormWrapper,
  EMInput,
  PWInput,
  Label,
  FormH2Text,
  FormpText,
  FormpTextWrapper,
  FormGetSt,
  LabelPText,
  ForgotPwTxt,
  LabelPTextWrapper,
  PwIcon,
  LoginBtn,
} from "./Auth.style";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Auth = () => {
  const [pwState, setPwState] = useState(true);
  const pwStateHandler = () => {
    if (pwState === true) {
      setPwState(false);
    } else {
      setPwState(true);
    }
  };

  return (
    <AuthWrapper>
      <LogoCont>
        {/* <img src={logo} alt="Logo" /> */}
        <Logo />
      </LogoCont>
      <FormWrapper>
        <FormH2Text>Log in to your account</FormH2Text>
        <FormpTextWrapper>
          <FormpText>Don’t have an account?</FormpText>
          <FormGetSt>Get Started</FormGetSt>
        </FormpTextWrapper>
        <Label>
          <LabelPText>Email</LabelPText>
          <EMInput />
        </Label>
        <Label>
          <LabelPTextWrapper>
            <LabelPText>Password</LabelPText>
            <ForgotPwTxt>Forgot Password</ForgotPwTxt>
          </LabelPTextWrapper>
          <PWInput type={pwState ? "password" : "text"} autoComplete="off" />
          <PwIcon onClick={pwStateHandler}>
            {pwState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </PwIcon>
        </Label>
        <LoginBtn>Login</LoginBtn>
      </FormWrapper>
    </AuthWrapper>
  );
};

export default Auth;

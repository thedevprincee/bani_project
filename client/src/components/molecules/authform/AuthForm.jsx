import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  EMInput,
  PWInput,
  PwIcon,
  Label,
  FormGetSt,
  LabelPText,
  ForgotPwTxt,
  LabelPTextWrapper,
  LoginBtn,
  PwInputWrapper,
} from "./AuthForm.style";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const AuthForm = () => {
  const isLogin = useSelector((state)=> state.isLogin)
  
  const [pwState, setPwState] = useState(true);
  // const pwStateHandler = () => {
  //   if (pwState === true) {
  //     setPwState(false);
  //   } else {
  //     setPwState(true);
  //   }
  // };

  return (
    <>
      {
          !isLogin 
          &&
          <>
            <Label>
              <LabelPText>First Name</LabelPText>
              <EMInput />
            </Label>
            <Label>
              <LabelPText>Last Name</LabelPText>
              <EMInput />
            </Label>
          </>
      }
      <Label>
        <LabelPText>Email</LabelPText>
        <EMInput />
      </Label>
      <Label>
        <LabelPTextWrapper>
          <LabelPText>Password</LabelPText>
          {
            isLogin && <ForgotPwTxt>Forgot Password</ForgotPwTxt>
          }
        </LabelPTextWrapper>
        <PwInputWrapper>
          <PWInput type={pwState ? "password" : "text"} autoComplete="off" />
          <PwIcon onClick={() => setPwState(!pwState)}>
            {pwState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </PwIcon>
        </PwInputWrapper>
      </Label>
      <LoginBtn>{isLogin ? "Login" : "Sign Up"}</LoginBtn>
    </>
  );
};

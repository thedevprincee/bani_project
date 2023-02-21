import React, { useState } from "react";
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
} from "./AuthForm.style";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const AuthForm = () => {
  const [pwState, setPwState] = useState(true);
  const pwStateHandler = () => {
    if (pwState === true) {
      setPwState(false);
    } else {
      setPwState(true);
    }
  };

  return (
    <>
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
    </>
  );
};

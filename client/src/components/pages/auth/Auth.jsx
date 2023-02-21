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
  return (
    <AuthWrapper>
      <LogoCont>
        <Logo />
      </LogoCont>
      <FormWrapper>
        <FormH2Text>Log in to your account</FormH2Text>
        <FormpTextWrapper>
          <FormpText>Don’t have an account?</FormpText>
          <FormGetSt>Get Started</FormGetSt>
        </FormpTextWrapper>
        <AuthForm />
      </FormWrapper>
    </AuthWrapper>
  );
};

export default Auth;

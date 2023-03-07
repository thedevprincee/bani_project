import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {signupAsync,loginAsync}  from '../../../store/features/authSlice'

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
  TextInput,
  FormWrapper,
} from "./AuthForm.style";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router";

export const AuthForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLogin = useSelector((state)=> state.reducer.isLogin)
  const [pwState, setPwState] = useState(true);
  const initialDataSignup = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }
  const initialDataLogin = {
    email: "",
    password: "",
  }
  const [formValues, setformValues] = useState(isLogin ? initialDataLogin: initialDataSignup)
  
  const handleChange = (e) =>{
    setformValues((prev) =>{
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    if (isLogin){
      console.log(formValues);
      const logon = await dispatch(loginAsync(formValues))
      if (logon) {
        setformValues(initialDataLogin)
        navigate('/dashboard')
      }
      
    }else{
      console.log(formValues);
      const signup = await dispatch(signupAsync(formValues))
      if (signup) {
        setformValues(initialDataSignup)
        navigate('/dashboard')
      }
      

    }
  }
  return (
    <>
      <FormWrapper>
        
        {
            !isLogin 
            &&
            <>
              <Label>
                <LabelPText>First Name</LabelPText>
                <TextInput 
                  name="firstName" 
                  onChange={handleChange} 
                  value={formValues.firstName}
                />
              </Label>
              <Label>
                <LabelPText>Last Name</LabelPText>
                <TextInput 
                  name="lastName" 
                  onChange={handleChange} 
                  value={formValues.lastName}/>
              </Label>
            </>
        }
        <Label>
          <LabelPText>Email</LabelPText>
          <EMInput 
            name="email" 
            onChange={handleChange} 
            value={formValues.email}/>
        </Label>
        <Label>
          <LabelPTextWrapper>
            <LabelPText>Password</LabelPText>
            {
              isLogin && <ForgotPwTxt>Forgot Password</ForgotPwTxt>
            }
          </LabelPTextWrapper>
          <PwInputWrapper>
            <PWInput 
              type={pwState ? "password" : "text"} autoComplete="off" 
              onChange={handleChange}
              name="password" 
              value={formValues.password}  
            />
            <PwIcon onClick={() => setPwState(!pwState)}>
              {pwState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </PwIcon>
          </PwInputWrapper>
        </Label>
        <LoginBtn onClick={handleSubmit}>{isLogin ? "Login" : "Sign Up"}</LoginBtn>
      </FormWrapper>
    </>
  );
};

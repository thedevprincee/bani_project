import styled from 'styled-components'
import logo from "../../../assets/logo.svg";


export const AuthWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color:rgb(245, 246, 250);
`
export const LogoCont = styled.div`
    width:80px;
    margin: 33px 0 25px;
    
`
export const Logo = styled.img.attrs({  src:logo })`
    width:100%;
    
`
export const FormWrapper = styled.div`
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    padding: 20px 20px 30px;
    width: 25%;
    
    
    @media screen and (max-width: 768px) {
        width: 50%;
    }
    @media screen and (max-width: 576px) {
        width:90%
    }

`
export const FormH2Text = styled.h2`
    font-family: Poppins, sans-serif;
    line-height: 35px;
    margin: 0px;
    font-weight: 600;
    white-space: nowrap;
    font-size: 1.4rem;
`
export const FormpTextWrapper = styled.div`
   display: flex;
    
`
export const FormpText = styled.p`
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    font-family: Poppins, sans-serif;
    padding: 0px 10px 0px 0px;
    margin: 1em 0 1em 0
    
`
export const FormGetSt = styled.span`
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    font-family: Poppins, sans-serif;
    color: rgb(84, 68, 242);
    margin: 1em 0 1em 0;
    cursor: pointer;
`


// export const EMInput = styled.input.attrs({ type: "email" })``
//     font-family: Poppins, sans-serif;
//     width: 100%;
//     height: 36px;
//     border-radius: 5px;
//     border: 1px solid rgba(225, 225, 225, 0.8);
//     padding: 0px 12px;
//     font-size: 100%;
// `;
// export const PWInput = styled.input.attrs({  id:'password' })`
//     font-family: Poppins, sans-serif;
//     width: 100%;
//     height: 36px;
//     border: 1px solid rgba(225, 225, 225, 0.8);
//     border-radius: 5px;
//     padding: 0px 12px;
//     font-size: 100%;
// `
 
//  export const PwIcon = styled.div`
//     position: relative;
//     left:270px;
//     bottom:28px;
//     cursor: pointer;
//     font-size:1.35rem;
//     width:20px;
    

//     @media screen and (max-width: 576px) {
//         left:280px;
//         bottom:25px;
//     }
// `;

// export const Label = styled.label`
//     display: block;
//     color: rgb(101, 113, 124);
// `
// export const LabelPText = styled.p`
//     font-weight: 400;
//     display: block;
//     font-family: Poppins, sans-serif;
//     font-size: 0.9rem;
//     margin: 5px 0px;
// `
// export const ForgotPwTxt = styled(FormGetSt)`
//     margin:0;
// `;
// export const LabelPTextWrapper = styled.div`
//     display: flex;
//     justify-content:space-between;
//     align-items : flex-end;
//     width:100%;
//     margin-top:15px;
//     @media screen and (max-width: 576px) {
//         width:80%;

//     }
    
// `
// export const LoginBtn = styled.button`
//     background-color: rgb(84, 68, 242);
//     font-size:16px;
//     color: rgb(255, 255, 255);
//     width: 100%;
//     border: 0px;
//     padding: 10px;
//     border-radius: 5px;
//     text-align: center;
// `
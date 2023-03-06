import styled from 'styled-components'

export const FormWrapper = styled.form``
export const EMInput = styled.input.attrs({ type: "email" })`
    font-family: Poppins, sans-serif;
    width: 100%;
    height: 36px;
    border-radius: 5px;
    border: 1px solid rgba(225, 225, 225, 0.8);
    padding: 0px 12px;
    font-size: 100%;
`;
export const TextInput = styled.input.attrs({ type: "text" })`
    font-family: Poppins, sans-serif;
    width: 100%;
    height: 36px;
    border-radius: 5px;
    border: 1px solid rgba(225, 225, 225, 0.8);
    padding: 0px 12px;
    font-size: 100%;
`;

export const FormGetSt = styled.span`
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    font-family: Poppins, sans-serif;
    color: rgb(84, 68, 242);
    margin: 1em 0 1em 0;
`
export const PWInput = styled.input.attrs({  id:'password' })`
    font-family: Poppins, sans-serif;
    width: 100%;
    height: inherit ;
    border: 1px solid rgba(225, 225, 225, 0.8);
    border-radius: 5px;
    padding: 0px 12px;
    font-size: 100%;
    `
export const PwInputWrapper = styled.div`
    margin-bottom: 15px;
    position: relative;
    height: 36px;
` 
 export const PwIcon = styled.div`
    position: absolute;
    right:10px;
    bottom:3%;
    cursor: pointer;
    font-size:1.35rem;
    width:20px;
    

    @media screen and (max-width: 576px) {
        left:280px;
        bottom:25px;
    }
`;

export const Label = styled.label`
    display: block;
    position: relative;
    color: rgb(101, 113, 124);
    padding: 5px 0;
`
export const LabelPText = styled.p`
    font-weight: 400;
    display: block;
    font-family: Poppins, sans-serif;
    font-size: 0.9rem;
    margin: 5px 0px;
`
export const ForgotPwTxt = styled(FormGetSt)`
    margin:0;
`;
export const LabelPTextWrapper = styled.div`
    display: flex;
    justify-content:space-between;
    align-items : flex-end;
    width:100%;
    /* margin-top:15px; */
    @media screen and (max-width: 576px) {
        width:80%;

    }
    
`
export const LoginBtn = styled.button`
    background-color: rgb(84, 68, 242);
    font-size:16px;
    color: rgb(255, 255, 255);
    width: 100%;
    border: 0px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
`

export const FormGroup = styled.div`
    position: relative;
    width: 100%;
`

export const FormLeftIcon = styled.div`
    position: absolute;
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
    height: 92%;
    width: 25px;
    border-radius: 4px;
    color: #000;
    background-color: #efefef;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
` 

export const Select = styled.select`
    font-family: Poppins, sans-serif;
    width: 100%;
    height: 36px;
    border-radius: 5px;
    border: 1px solid rgba(225, 225, 225, 0.8);
    padding: 0px 12px;
    font-size: 100%;
`;

export const TXTInput = styled.input.attrs({ type: "text" })`
    font-family: Poppins, sans-serif;
    width: 100%;
    height: 36px;
    border-radius: 5px;
    border: 1px solid rgba(225, 225, 225, 0.8);
    padding: 0px 12px;
    font-size: 100%;
`;

export const NUMInput = styled.input.attrs({ type: "number" })`
    font-family: Poppins, sans-serif;
    width: 100%;
    height: 36px;
    border-radius: 5px;
    border: 1px solid rgba(225, 225, 225, 0.8);
    padding: 0px 30px;
    font-size: 100%;
`;


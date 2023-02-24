import styled from "styled-components"

export const BlurbWrapper =styled.div`
    display:flex;
    align-items:center;
    
`
export const BlurbIcon =styled.div`

`
export const BlurbTxt =styled.p`
    margin-left: 10px;
    color: rgb(117, 117, 117);
    font-size: 0.9rem;
    cursor:pointer;

    &:hover{
        font-weight:600;
    }
    `
export const BlurbTxtSpan =styled.span`
    margin: 5px 0px 0px 30px;
    color: rgb(83, 181, 116);
    font-size: 0.6rem;
    font-weight:500;
    & :hover {
        font-weight:600;
    }
`

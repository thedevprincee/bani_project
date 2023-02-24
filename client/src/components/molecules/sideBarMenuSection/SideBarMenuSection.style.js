import styled from "styled-components";
// import {BlurbTxt} from "../../elements/SideBarMenuItems/sideBarMenuItems.style";



export const SidebarCont =styled.div`
    @media screen and (max-width:576px)  {
        padding-top: 28px;
        align-items: center;
        justify-content: space-evenly;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        }

`
export const MenuSectionHead =styled.h4`
    text-transform: uppercase;
    font-weight: 600;
    padding: 6px 0px 16px;
    margin: 0px;
    line-height: 1.1em;
    font-size:0.9rem;
    @media screen and (max-width: 576px) {
        display:none;
    }

`
export const BreakTxt =styled.div`
    width:40%;
    margin:0 0 10px 0;
    color: rgb(117, 117, 117);
    font-size: 0.9rem;
    cursor:pointer;

    &:hover{
        font-weight:600;
    }

`
export const BottomLinks =styled.div`
   @media screen and (max-width: 576px) {
        display:none;
        justify-content:space-between;

    }

`
export const BottomLinksMob =styled.div`
        display:none;
        width:97%;
        margin:0;
   @media screen and (max-width: 576px) {
        display:block;
        
    }

`
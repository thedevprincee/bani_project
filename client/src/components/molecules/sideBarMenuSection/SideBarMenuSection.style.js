import styled from "styled-components";
import {BlurbTxt} from "../../elements/SideBarMenuItems/sideBarMenuItems.style";

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
export const BreakTxt =styled(BlurbTxt)`
    width:40%;
    margin:0 0 10px 0;

`
export const BottomLinks =styled.div`
   @media screen and (max-width: 576px) {
        display:flex;
        justify-content:space-between;

    }

`
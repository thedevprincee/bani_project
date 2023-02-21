import React from "react";
import welcome from "../../../assets/welcome.svg";
import {
  BlurbWrapper,
  BlurbIcon,
  BlurbTxt,
  BlurbTxtSpan,
} from "./sideBarMenuItems.style";

export const SideBarMenuItems = ({ svgSrc, pText, spanText }) => {
  return (
    <>
      <BlurbWrapper>
        <BlurbIcon>
          <img src={svgSrc} alt="" />
        </BlurbIcon>
        <BlurbTxt>{pText}</BlurbTxt>
      </BlurbWrapper>
      <BlurbTxtSpan>{spanText}</BlurbTxtSpan>
    </>
  );
};

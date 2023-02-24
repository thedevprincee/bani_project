import React from "react";
import Image from "../../atoms/img/Image";
import Text from "../../atoms/text/Text";
import NavWrapper, {
  NavFlexColumn,
  NavIcon,
  NavIconNotify,
  NavLeftLayout,
  NavLogoWrapper,
  NavUserDDIcon,
  NavUserDp,
  NavCompTxt,
  NavMailTxt,
  NavUserLayout,
} from "./Nav.styles";
import logo from "../../../assets/logo.svg";
import { HiOutlineBell } from "react-icons/hi";
import { RxCaretDown } from "react-icons/rx";

const Nav = () => {
  return (
    <NavWrapper>
      <NavLogoWrapper>
        <Image src={logo} width="100%" />
      </NavLogoWrapper>
      <NavLeftLayout>
        <NavIcon>
          <HiOutlineBell />
          <NavIconNotify />
        </NavIcon>
        <NavUserLayout>
          <NavUserDp>JT</NavUserDp>
          <NavFlexColumn>
            <NavCompTxt>JT Industry Limit..</NavCompTxt>
            <NavMailTxt>JamesT@gmail.com</NavMailTxt>
          </NavFlexColumn>
          <NavUserDDIcon>
            <RxCaretDown />
          </NavUserDDIcon>
        </NavUserLayout>
      </NavLeftLayout>
    </NavWrapper>
  );
};

export default Nav;

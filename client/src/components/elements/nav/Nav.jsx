import React, { useState } from "react";
import Image from "../../atoms/img/Image";
import Text from "../../atoms/text/Text";
import Logout from "../logout/Logout";
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
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  const clickedHandler = () => {
    if (clicked === true) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

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
        <NavUserLayout onClick={clickedHandler}>
          <NavUserDp>JT</NavUserDp>
          <NavFlexColumn>
            <NavCompTxt>JT Industry Limit..</NavCompTxt>
            <NavMailTxt>JamesT@gmail.com</NavMailTxt>
          </NavFlexColumn>
          <NavUserDDIcon>
            {clicked ? <RxCaretUp /> : <RxCaretDown />}
          </NavUserDDIcon>
        </NavUserLayout>
        {clicked && <Logout />}
      </NavLeftLayout>
    </NavWrapper>
  );
};

export default Nav;

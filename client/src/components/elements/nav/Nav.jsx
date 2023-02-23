import React from 'react'
import Image from '../../atoms/img/Image'
import Text from '../../atoms/text/Text'
import NavWrapper, { NavFlexColumn, NavIcon, NavIconNotify, NavLeftLayout, NavLogoWrapper, NavUserDDIcon, NavUserDp, NavUserLayout } from './Nav.styles'
import logo from '../../../assets/logo.svg'
import {HiOutlineBell} from 'react-icons/hi'
import {RxCaretDown} from 'react-icons/rx'


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
                <NavUserDp>PP</NavUserDp>
                <NavFlexColumn>
                    <Text type="h6">JT Industry Limit..</Text>
                    <Text type="p">JamesT@gmail.com</Text>
                </NavFlexColumn>
                <NavUserDDIcon>
                    <RxCaretDown />
                </NavUserDDIcon>
            </NavUserLayout>
        </NavLeftLayout>
    </NavWrapper>
  )
}

export default Nav

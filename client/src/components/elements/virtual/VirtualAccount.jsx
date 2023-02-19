import React from 'react'
import Text from '../../atoms/text/Text'
import VAWrapper, { VAHeader, VAIcon, VAIcons } from './VirtualAccount.styles'
import {FiGrid, FiServer} from 'react-icons/fi'

const VirtualAccount = () => {
  return (
    <VAWrapper>
        <VAHeader>
            <Text type="h5">Your Virtual Accounts</Text>
            <VAIcons>
                <VAIcon><FiGrid /></VAIcon>
                <VAIcon><FiServer /></VAIcon>
            </VAIcons>
        </VAHeader>
    </VAWrapper>
  )
}

export default VirtualAccount

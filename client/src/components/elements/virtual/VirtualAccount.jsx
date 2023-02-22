import React from 'react'
import Text from '../../atoms/text/Text'
import VAWrapper, { VAHeader, VAIcon, VAIcons, VASearchLayout, VASInput, VASInputIcon, VASInputWrapper, VASTag } from './VirtualAccount.styles'
import {FiGrid, FiServer} from 'react-icons/fi'
import {CiSearch} from 'react-icons/ci'
import {RiSettingsLine} from 'react-icons/ri'
import VirtualAccTable from '../../molecules/table/VirtualAccTable'

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
        <VASearchLayout>
            <VASTag><Text type="p">Branch</Text></VASTag>
            <VASInputWrapper>
              <VASInput placeholder='Search for vitual account'/>
              <VASInputIcon>
                <CiSearch />
              </VASInputIcon>
            </VASInputWrapper>
        </VASearchLayout>
        <VASearchLayout height="50px">
          <Text>Lekki II</Text>
          <Text>Manage <RiSettingsLine /></Text>
        </VASearchLayout>
        <VirtualAccTable />

    </VAWrapper>
  )
}

export default VirtualAccount

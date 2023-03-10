import React from 'react'
import Text from '../../atoms/text/Text'
import OverviewWrapper, { OverviewContent } from './Overview.styles'

const Overview = () => {
  return (
    <OverviewWrapper>   
        <OverviewContent>
            <Text type="p" color="#757575">Total Credits</Text>
            <Text type="h4">NGN 3,287,902.00</Text>
        </OverviewContent>
        <OverviewContent>
            <Text type="p" color="#757575">Total Transfer Settlememts</Text>
            <Text type="h4">81 Settlement</Text>
        </OverviewContent>
        <OverviewContent>
            <Text type="p" color="#757575">Generated Accounts</Text>
            <Text type="h4">12 Accounts</Text>
        </OverviewContent>
    </OverviewWrapper>
  )
}

export default Overview

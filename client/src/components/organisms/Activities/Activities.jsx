import { 
    ActivityFeedWrapper, 
    ActivityHeader, 
    ActivityState, 
    BankDetails, 
    BankWrapper, 
    Brand, 
    BrandBg, 
    DynamicBranch, 
    DynamicText, 
    InflowColumn, 
    InflowColumnSmall, 
    InflowWrapper, 
    StyledButton, 
    
} from "./activities.styled"
import Text from '../../atoms/text/Text'
import {FaChevronRight, FaDatabase} from 'react-icons/fa'
import Table from "../../molecules/Table/Table"
function Activities() {
  return (
    <ActivityFeedWrapper>
        <ActivityHeader>
            <Text type='h4'>
                Activity Feed - <DynamicText>First Bank</DynamicText>
            </Text>
            <ActivityState>
                <Text>Active </Text>
                <Text>
                    - Created 13th Aug. 2021
                </Text>
            </ActivityState>
        </ActivityHeader>
        <BrandBg>
            <Brand src="data:image/png;base64,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" title="name"/>
        </BrandBg>
        <BankWrapper>
            <BankDetails>
                <Text type='h5'>
                    First Bank                    
                </Text>
                <Text type='p'>
                    3155043807
                </Text>
            </BankDetails>
            <StyledButton>
                <Text>
                    Go to Account View 
                </Text>
                <FaChevronRight/>
            </StyledButton>
        </BankWrapper>
        <InflowWrapper>
            <InflowColumn>
                <InflowColumnSmall>
                    Total Inflow
                </InflowColumnSmall>
                <Text type='h5'>
                    NGN 100,000.00
                </Text>
            </InflowColumn>
            <InflowColumn>
                <InflowColumnSmall>
                    Last Activity Date
                </InflowColumnSmall>
                <Text type='h5'>
                    13th Sept. 2022
                </Text>
            </InflowColumn>
            <InflowColumn>
                <InflowColumnSmall>
                    Linked Branch
                </InflowColumnSmall>
                <DynamicBranch>
                   <FaDatabase/> <Text>Dodo-Ikeja</Text>
                </DynamicBranch>
            </InflowColumn>
        </InflowWrapper>
        <Table/>
    </ActivityFeedWrapper>
  )
}

export default Activities
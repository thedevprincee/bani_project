import styled from "styled-components";

export const ActivityFeedWrapper = styled.section`
    background-color: #fff;
    border-radius: 8px;
    height: 100%;
`
export const ActivityHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 16px 24px;

`
export const ActivityState = styled.div`
    font-size: 12px;
`
export const DynamicText = styled.span`
    font-weight: normal;
`
export const BrandBg = styled.div`
    background-color: #233377;
    /* height: ; */
    margin: 0 0 20px;
`
export const Brand = styled.img`
    position: relative;
    top: 20px;
    left: 24px;
    width: 34px;
    height: 34px;
`
export const BankWrapper = styled.section`
    display: flex;
    justify-content: space-between;
`
export const BankDetails = styled.div`
    padding: 16px 24px;
`
export const StyledButton = styled.div`
    border: 1px solid rgba(225, 225, 225, 0.8);
    color: rgb(117, 117, 117);
    background-color: rgb(255, 255, 255);
    height: fit-content;
    padding: 10px 16px;
    border-radius: 5px;
    font-size: 0.9rem;
    cursor: pointer;
    display:  flex;
    align-items: center;
    /* align-self: flex-end; */
    &:nth-child(1){
        margin-right: 10px;
    }
`
export const InflowWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 8px 24px;
    border-radius: 8px;
    border-top: 1px solid rgba(225, 225, 225, 0.8);
    border-bottom: 1px solid rgba(225, 225, 225, 0.8);
    height: 15%;
    align-items: center;
`
export const InflowColumn = styled.div`

`
export const InflowColumnSmall = styled.p`
    color: rgb(117, 117, 117);
    font-size: 0.7rem;
    margin: 0px 0px 6px;
    line-height: 18px;
`
export const DynamicBranch = styled.div`
    background-color: #feefef;
`




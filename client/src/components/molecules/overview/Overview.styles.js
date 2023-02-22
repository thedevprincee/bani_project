import styled from "styled-components"

const OverviewWrapper = styled.div`
    background-color: rgb(255, 255, 255);
    height: auto;
    width: 100%;
    border-radius: 8px;
    padding: 16px 24px;
    display: flex;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: flex-start;
    overflow-x: auto;
    white-space: nowrap;
    @media screen and (min-width:990px) {
        height: 15%;
    }
`

export const OverviewContent = styled.div`
    width: 300px !important;
    margin-right: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 90%;
    justify-content: space-between;
    @media screen and (min-width:990px) {
        margin-right: 50px;
    }
`

export default OverviewWrapper
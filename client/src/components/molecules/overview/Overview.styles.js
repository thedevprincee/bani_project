import styled from "styled-components"

const OverviewWrapper = styled.div`
    background-color: rgb(255, 255, 255);
    height: 15%;
    width: 100%;
    border-radius: 8px;
    padding: 16px 24px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow-x: auto;
`

export const OverviewContent = styled.div`
    margin-right: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 90%;
    justify-content: space-between;
`

export default OverviewWrapper
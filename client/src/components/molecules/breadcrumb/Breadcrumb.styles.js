import styled from "styled-components"

const BreadcrumbWrapper = styled.div`
    padding: 0 15px;
    margin-top: 5px;
    /* height: 100%; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: auto;
    white-space: nowrap;
    @media screen and (min-width:990px) {
        justify-content: space-between;
        padding: 0 24px;
    }
`

export const CrumbTitle = styled.div`
    width: 400px;
    padding: 0 5px;
    @media screen and (min-width:990px) {
        width: 50%;
    }
`

export const CrumbButtonSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    @media screen and (min-width:990px) {
        width: 50%;
        justify-content: flex-end;
    }
`

export default BreadcrumbWrapper
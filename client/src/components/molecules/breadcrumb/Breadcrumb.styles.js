import styled from "styled-components"

const BreadcrumbWrapper = styled.div`
    border: 1px solid red;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: scroll;
    white-space: nowrap;
    @media screen and (min-width:990px) {
        justify-content: space-between;
    }
`

export const CrumbTitle = styled.div`
    border: 1px solid black;
    width: auto;
    @media screen and (min-width:990px) {

    }
`

export const CrumbButtonSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 50%; */
    border: 1px solid red;
    @media screen and (min-width:990px) {
        justify-content: flex-end;
    }
`

export default BreadcrumbWrapper
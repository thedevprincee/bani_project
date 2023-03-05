import styled from "styled-components"

const BreadcrumbWrapper = styled.div`
    padding: 15px 15px 25px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x: auto;
    white-space: nowrap;
    @media screen and (min-width:990px) {
        justify-content: space-between;
        padding: 5px 0;
    }
`

export const CrumbTitle = styled.div`
    width: 400px;
    padding: 0 5px;
    margin-right:30px;
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
export const BranchBtn = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:white;
    padding:10px 16px;
    border-radius:5px;
    font-size:0.9rem;
    color:rgb(117, 117, 117);
    & span{
        margin-left:10px;
    }
    @media screen and (min-width:990px) {
    }
`
export const VirtualAcchBtn = styled(BranchBtn)`
    background-color:rgb(84, 68, 242);
    color:rgb(255, 255, 255);
    margin-left:15px;
`
export default BreadcrumbWrapper
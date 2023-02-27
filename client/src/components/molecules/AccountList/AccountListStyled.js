import styled from "styled-components";
export const ScrollableWrapper = styled.section`
    overflow-y: auto;
    height: 329px;
    /* background-color: aliceblue; */
`
export const ListWrapper = styled.section`
    display: grid;
    grid-template-columns: .8fr .5fr .5fr .3fr;
    /* width: 100%; */
`
export const ListHeadItem = styled.div`
    padding: 10px 10px 10px 16px;
    font-size: 0.7rem;
    white-space: nowrap;
    justify-content: left;
    border-bottom: 1px solid rgba(225, 225, 225, 0.8);
    font-weight: bold;
`
export const StyledListData = styled.div`
    font-size: 0.7rem;
    padding: 10px 10px 10px 16px;
    border-bottom: 1px solid rgba(225, 225, 225, 0.8);
`

import styled from "styled-components"
export const ScrollableWrapper = styled.section`
    overflow-y: auto;
    height: 329px;
    /* background-color: aliceblue; */
`
export const TableWrapper = styled.table`
    border-bottom: 1px solid rgba(225, 225, 225, 0.8);
    color: rgb(117, 117, 117); 
    border-collapse: collapse;
    width: 100%;
   
`
export const TableHeader = styled.thead`
`
export const TableRow = styled.tr`
    border-bottom: 1px solid rgba(225, 225, 225, 0.8);
    border-collapse: collapse;
`
export const TableHead   = styled.th`
    border-bottom: 1px solid rgba(225, 225, 225, 0.8);
    padding: 10px 16px;
    font-size: 0.7rem;
    white-space: nowrap;
    text-align: left;
`
export const TableBody = styled.tbody`
    overflow-y: scroll;
    /* height: 100vh; */
`
export const TableData =  styled.td`
    padding: 10px 16px;
    font-size: 0.7rem;
    white-space: nowrap;
`
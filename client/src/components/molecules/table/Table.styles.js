import styled from "styled-components"

const TableWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-x: auto;
    white-space: nowrap;
`

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`

export const THead = styled.thead`
    border-bottom: 1px solid rgba(225, 225, 225, 0.8);
    padding: 15px 0;
    `


export const TBody = styled.tbody`
`

export const THeader = styled.th`
    padding: 15px 0;
    padding-right: 125px;
`

export const TRow = styled.tr`
    border-bottom: 1px solid rgba(225, 225, 225, 0.8);
    border-left:3px solid white;
    font-size: .9rem;
    &:first-child{
        color:rgb(117, 117, 117);
    }
    &:not(:first-child):hover{
        background-color: rgb(245, 246, 250);
        border-left:3px solid rgb(84, 68, 242);
        cursor:pointer;
    }
`

export const TData = styled.td`
    padding: 12px 0;
    
`
export const TDataContent = styled.td`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    padding-left: 20px;
`



export default TableWrapper
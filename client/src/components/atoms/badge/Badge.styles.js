import styled, {css} from "styled-components"

const BadgeWrapper = styled.div`
   display: flex;
   width: 100px;
   height: 20px;
   justify-content: space-between;
   align-items: center;
   background-color: #ccc;
   border-radius: 5px;
   color: #fff;
   font-size: 0.7em;
   font-weight: bold;
   padding: 2px 10px;

   ${({bgcolor})=>(
    bgcolor && css`
      background-color: ${bgcolor}
    `
   )}
   ${({color})=>(
    color && css`
      color: ${color}
    `
   )}
`

export default BadgeWrapper
import styled, {css} from "styled-components"

const SkeletonWrapper =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
    border: 1px solid;
    box-sizing: border-box;
    /* margin: 5px; */
    border-radius: 5px;
    width: 90%;
    height: 98%;
    ${({type})=>( 
        type === "avater" && css`
        border-radius: 50%;
        width: 100px;
        height: 100px;
        `
    )}

    ${({type})=>( 
        type === "title" && css`
            width: 50%;
            height: 20px;
            margin-bottom: 15px;
        `
    )}

    ${({type})=>(     
        type === "text" && css`
            width: 100%;
            height: 12px;
        `
    )}
    
    ${({type})=>(     
        type === "thumbnail" && css`
            width: 98.5%;
            height: 99%;
        `
    )}
`



export default SkeletonWrapper
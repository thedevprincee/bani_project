import styled from "styled-components"

const CardWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform:  translateY(-70%) translateX(-50%);
    border: 1px solid #e2e2e2;
    box-shadow: 0px -9px 19px -3px rgba(0,0,0,0.1);
    border-radius: 10px;
    z-index: 999;
    width: 90%;
    min-height: 300px;
    background-color: #fff;
    padding: 20px;
    display: ${({display})=>(display==="true" ? 'block' : 'none')};
    @media screen and (min-width:990px)  {
        transform:  translateY(-50%) translateX(-50%);
        min-width: 400px;
        width: 400px;
        /* height: 300px; */
    }
`

export const CardHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CardBody = styled.div`
    width: 100%;
    padding-top: 10px;
`

export const CardIcon = styled.div`
    cursor: pointer;
    user-select: none; 
    padding: 5px;
`

export default CardWrapper
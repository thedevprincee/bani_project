import styled from "styled-components"

const VAWrapper = styled.div`
    background-color: rgb(255, 255, 255);
    height: 83%;
    border-radius: 8px;
    margin-top: 10px;
`

export const VAHeader = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    place-content: stretch space-between;
    -webkit-box-align: center;
    align-items: center;
    order: 0;
    -webkit-box-flex: 0;
    flex: 0 1 auto;
    align-self: auto;
    height: auto;
    margin: 0px;
    padding: 12px 24px;
    border-top: 1px solid rgba(225, 225, 225, 0.8);
    border-bottom: 1px solid rgba(225, 225, 225, 0.8);
`

export const VAIcons = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: start;
    place-content: stretch flex-start;
    justify-content: space-between;
    width: 70px;
    -webkit-box-align: center;
    align-items: center;
    order: 0;
    -webkit-box-flex: 0;
    flex: 0 1 auto;
    align-self: auto;
    height: auto;
    margin: 0px;
    padding: 0px;
    cursor: pointer;
    user-select: none;
`

export const VAIcon = styled.div`
    border: 1px solid rgba(225, 225, 225, 0.8);
    padding: 5px;
    border-radius: 5px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    &:hover{
        border: 1px solid #00f;
    }
`

export const VASearchLayout = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    place-content: stretch space-between;
    -webkit-box-align: center;
    align-items: center;
    order: 0;
    -webkit-box-flex: 0;
    flex: 0 1 auto;
    align-self: auto;
    height: ${({height})=>(height || 'auto')};
    margin: 0px;
    padding: 12px 24px;
    border-top: 1px solid rgba(225, 225, 225, 0.8);
`

export const VASTag = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: start;
    place-content: stretch flex-start;
    -webkit-box-align: stretch;
    align-items: stretch;
    order: 0;
    -webkit-box-flex: 0;
    flex: 0 1 auto;
    align-self: auto;
    height: auto;
    margin: 0px;
    padding: 8px 10px;
    color: rgb(84, 68, 242);
    background-color: rgb(245, 246, 250);
    border-radius: 50px;
    font-size: 0.7em;
    font-weight: 600;
    @media screen and (min-width: 990px){
        font-size: 1em;
    }
`

export const VASInputWrapper = styled.div`
    width: 150px;
    position: relative;
    @media screen and (min-width: 990px){
        width: 400px;
    }
`

export const VASInput = styled.input`
    font-family: Poppins, sans-serif;
    width: 100%;
    height: 36px;
    border-radius: 5px;
    border: 1px solid rgba(225, 225, 225, 0.8);
    padding: 0px 12px;
`

export const VASInputIcon = styled.div`
    position: absolute;
    background-color: #fff;
    right: 10px;
    top: 50%;
    transform: translateY(-40%);
`

export default VAWrapper